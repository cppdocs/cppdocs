#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path


FRONT_MATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.DOTALL)
KV_RE = re.compile(r"^([A-Za-z0-9_]+):\s*(.*)$")
SAFE_URL_RE = re.compile(r"^/[A-Za-z0-9_./-]+/$")

MAX_ENTRIES_DEFAULT = 12
DEFAULT_OVERRIDES_PATH = Path("tools/reference_map_overrides.json")

CPP_AREA_TITLES = {
    "language": "Language",
    "concepts": "Concepts",
    "types": "Types",
    "algorithm": "Algorithms",
    "container": "Containers",
    "iterator": "Iterators",
    "ranges": "Ranges",
    "string": "Text",
    "regex": "Regex",
    "locale": "Localization",
    "io": "IO",
    "filesystem": "Filesystem",
    "memory": "Memory",
    "atomic": "Atomics",
    "thread": "Concurrency",
    "chrono": "Chrono",
    "numeric": "Numeric",
    "utility": "Utility",
}

C_AREA_TITLES = {
    "language": "Language",
    "keyword": "Keywords",
    "preprocessor": "Preprocessor",
    "types": "Types",
    "string": "String",
    "io": "IO",
    "numeric": "Numeric",
    "thread": "Thread",
    "locale": "Localization",
    "error": "Error handling",
    "memory": "Memory",
    "program": "Program utilities",
    "chrono": "Time",
}


@dataclass(frozen=True)
class Entry:
    title: str
    url: str
    since: str | None
    source_path: str
    score: int

    def to_json(self) -> dict[str, str]:
        out = {
            "title": self.title,
            "url": self.url,
            "source_path": self.source_path,
        }
        if self.since:
            out["since"] = self.since
        return out


def parse_url_area_key(domain: str, url: str) -> str | None:
    parts = [p for p in url.strip("/").split("/") if p]
    if len(parts) < 2:
        return None
    if domain == "cpp" and parts[0] == "cpp":
        return parts[1]
    if domain == "c" and parts[0] == "c":
        return parts[1]
    return None


def parse_front_matter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    m = FRONT_MATTER_RE.match(text)
    if not m:
        return {}

    result: dict[str, str] = {}
    for raw in m.group(1).splitlines():
        raw = raw.strip()
        if not raw or raw.startswith("#"):
            continue
        km = KV_RE.match(raw)
        if not km:
            continue
        key, value = km.group(1), km.group(2).strip()
        if value.startswith('"') and value.endswith('"') and len(value) >= 2:
            value = value[1:-1]
        result[key] = value
    return result


def rel_to_url(domain: str, rel: Path, fm: dict[str, str]) -> str:
    if "url" in fm and fm["url"].strip():
        u = fm["url"].strip()
        if not u.startswith("/"):
            u = "/" + u
        if not u.endswith("/"):
            u += "/"
        return u

    if rel.name == "_index.md":
        parent = rel.parent.as_posix().strip(".")
        if not parent:
            return f"/{domain}/"
        return f"/{domain}/{parent.strip('/')}/"

    return f"/{domain}/{rel.with_suffix('').as_posix().strip('/')}/"


def area_key_for_rel(rel: Path) -> str | None:
    parts = rel.parts
    if not parts:
        return None
    # Keep map focused on section-style top-level areas; skip root loose pages.
    if len(parts) == 1:
        return None
    return parts[0]


def score_entry(rel: Path, fm: dict[str, str], url: str) -> int:
    # lower is better
    if rel.name == "_index.md":
        return 0

    stem = rel.stem
    depth_from_area = max(0, len(rel.parts) - 2)
    score = 10 + depth_from_area * 10

    # De-prioritize hyper-granular operator and legacy implementation pages.
    if "operator" in stem or "operator" in rel.as_posix():
        score += 40
    if stem.startswith("~"):
        score += 30
    if any(token in stem for token in ("cmp", "hash", "formatter", "deduction_guides")):
        score += 20
    if not SAFE_URL_RE.match(url):
        score += 1000
    if fm.get("title", "").strip().lower() in {"", "incomplete"}:
        score += 10

    return score


def area_title(domain: str, key: str) -> str:
    if domain == "cpp":
        if key in CPP_AREA_TITLES:
            return CPP_AREA_TITLES[key]
    if domain == "c":
        if key in C_AREA_TITLES:
            return C_AREA_TITLES[key]
    return key.replace("_", " ").title()


def area_sort_key(domain: str, key: str) -> tuple[int, str]:
    if domain == "cpp":
        order = list(CPP_AREA_TITLES.keys())
    else:
        order = list(C_AREA_TITLES.keys())
    try:
        return (order.index(key), key)
    except ValueError:
        return (999, key)


def collect_domain_entries(domain: str, root: Path) -> dict[str, list[Entry]]:
    grouped: dict[str, list[Entry]] = {}
    if not root.exists():
        return grouped

    for md in sorted(root.rglob("*.md")):
        rel = md.relative_to(root)
        key = area_key_for_rel(rel)
        if not key:
            continue

        fm = parse_front_matter(md)
        url = rel_to_url(domain, rel, fm)
        if not SAFE_URL_RE.match(url):
            continue

        title = fm.get("title", "").strip() or rel.stem.replace("_", " ")
        source_path = fm.get("source_path", "").strip() or rel.with_suffix("").as_posix()
        since = fm.get("since", "").strip() or None
        score = score_entry(rel, fm, url)

        grouped.setdefault(key, []).append(
            Entry(title=title, url=url, since=since, source_path=source_path, score=score)
        )

    return grouped


def load_overrides(path: Path) -> dict:
    if not path.exists():
        return {}
    raw = json.loads(path.read_text(encoding="utf-8"))
    return raw if isinstance(raw, dict) else {}


def select_entries(
    entries: list[Entry],
    limit: int,
    force_include: list[str] | None = None,
    force_exclude: set[str] | None = None,
    block_priority: list[str] | None = None,
) -> list[Entry]:
    force_include = force_include or []
    force_exclude = force_exclude or set()
    block_priority = block_priority or []
    priority_rank = {u: i for i, u in enumerate(block_priority)}

    pool: list[Entry] = []
    for e in entries:
        if e.url in force_exclude:
            continue
        pool.append(e)

    # Add synthetic curated entries if they don't already exist.
    existing_urls = {e.url for e in pool}
    for u in force_include:
        if u in force_exclude or u in existing_urls:
            continue
        source_path = u.strip("/")
        title = source_path.split("/")[-1].replace("_", " ").title() or u
        pool.append(Entry(title=title, url=u, since=None, source_path=source_path, score=-1000))
        existing_urls.add(u)

    # stable deterministic ordering: score, url, title
    ordered = sorted(
        pool,
        key=lambda e: (
            0 if e.url in priority_rank else 1,
            priority_rank.get(e.url, 9999),
            e.score,
            e.url,
            e.title,
        ),
    )
    seen: set[str] = set()
    selected: list[Entry] = []
    for e in ordered:
        if e.url in seen:
            continue
        seen.add(e.url)
        selected.append(e)
        if len(selected) >= limit:
            break
    return selected


def build_map(max_entries: int, overrides: dict | None = None) -> dict:
    overrides = overrides or {}
    force_exclude = {
        u for u in overrides.get("force_exclude", []) if isinstance(u, str) and SAFE_URL_RE.fullmatch(u)
    }
    force_include_urls = [
        u for u in overrides.get("force_include", []) if isinstance(u, str) and SAFE_URL_RE.fullmatch(u)
    ]
    canonical_rewrite = {
        k: v
        for k, v in overrides.get("canonical_rewrite", {}).items()
        if isinstance(k, str)
        and isinstance(v, str)
        and SAFE_URL_RE.fullmatch(k)
        and SAFE_URL_RE.fullmatch(v)
    }
    block_limits = overrides.get("block_limits", {}) if isinstance(overrides.get("block_limits", {}), dict) else {}
    default_block_limit = block_limits.get("default", max_entries)
    if not isinstance(default_block_limit, int) or default_block_limit < 1:
        default_block_limit = max_entries
    block_priority = (
        overrides.get("block_priority", {}) if isinstance(overrides.get("block_priority", {}), dict) else {}
    )

    force_include_by_domain_area: dict[tuple[str, str], list[str]] = {}
    for u in force_include_urls:
        domain = "cpp" if u.startswith("/cpp/") else "c" if u.startswith("/c/") else ""
        if not domain:
            continue
        area = parse_url_area_key(domain, u)
        if not area:
            continue
        force_include_by_domain_area.setdefault((domain, area), []).append(u)

    domains = {
        "cpp": Path("content/cpp"),
        "c": Path("content/c"),
    }

    out_domains: dict[str, dict] = {}

    for domain, root in domains.items():
        grouped = collect_domain_entries(domain, root)
        rewritten_grouped: dict[str, list[Entry]] = {}
        for area, entries in grouped.items():
            out: list[Entry] = []
            for e in entries:
                new_url = canonical_rewrite.get(e.url, e.url)
                if new_url in force_exclude:
                    continue
                out.append(Entry(title=e.title, url=new_url, since=e.since, source_path=e.source_path, score=e.score))
            rewritten_grouped[area] = out
        grouped = rewritten_grouped

        areas = []
        for key in sorted(grouped.keys(), key=lambda k: area_sort_key(domain, k)):
            limit = block_limits.get(key, default_block_limit)
            if not isinstance(limit, int) or limit < 1:
                limit = default_block_limit
            pri = block_priority.get(key, [])
            if not isinstance(pri, list):
                pri = []
            pri = [u for u in pri if isinstance(u, str) and SAFE_URL_RE.fullmatch(u)]
            selected = select_entries(
                grouped[key],
                limit,
                force_include=force_include_by_domain_area.get((domain, key), []),
                force_exclude=force_exclude,
                block_priority=pri,
            )
            areas.append(
                {
                    "key": key,
                    "title": area_title(domain, key),
                    "entry_count": len(selected),
                    "entries": [e.to_json() for e in selected],
                }
            )
        out_domains[domain] = {
            "source_root": root.as_posix(),
            "area_count": len(areas),
            "areas": areas,
        }

    return {
        "schema_version": 1,
        "max_entries_per_area": max_entries,
        "domains": out_domains,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Build deterministic reference map from Hugo content trees.")
    ap.add_argument(
        "--out",
        type=Path,
        default=Path("data/reference_map.json"),
        help="Output JSON path (default: data/reference_map.json)",
    )
    ap.add_argument(
        "--max-entries",
        type=int,
        default=MAX_ENTRIES_DEFAULT,
        help=f"Max entries per area (default: {MAX_ENTRIES_DEFAULT})",
    )
    ap.add_argument(
        "--overrides",
        type=Path,
        default=DEFAULT_OVERRIDES_PATH,
        help=f"Manual curation overrides JSON (default: {DEFAULT_OVERRIDES_PATH})",
    )
    args = ap.parse_args()

    result = build_map(
        max_entries=max(1, args.max_entries),
        overrides=load_overrides(args.overrides),
    )
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    cpp_areas = result["domains"]["cpp"]["area_count"]
    c_areas = result["domains"]["c"]["area_count"]
    print(f"wrote={args.out}")
    print(f"cpp_areas={cpp_areas} c_areas={c_areas} max_entries={result['max_entries_per_area']}")


if __name__ == "__main__":
    main()
