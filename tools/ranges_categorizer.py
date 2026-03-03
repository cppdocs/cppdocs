#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path

CONTENT_ROOT = Path("content")
RANGES_ROOT = CONTENT_ROOT / "cpp" / "ranges"
DEFAULT_OUTPUT = Path("data") / "ranges_index.json"
DEFAULT_OVERRIDES = Path("tools") / "ranges_overrides.json"

FRONT_MATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.DOTALL)
KV_RE = re.compile(r"^([A-Za-z0-9_]+):\s*(.*)$")

NAMESPACE_PREFIXES = (
    "std::ranges::views::",
    "std::views::",
    "std::ranges::",
    "std::",
)

CATEGORY_BY_KEY = {
    "transform": "transforming",
    "adjacent_transform": "transforming",
    "elements": "transforming",
    "keys": "transforming",
    "values": "transforming",
    "as_const": "transforming",
    "as_rvalue": "transforming",
    "enumerate": "transforming",
    "filter": "filtering_slicing",
    "take": "filtering_slicing",
    "take_while": "filtering_slicing",
    "drop": "filtering_slicing",
    "drop_while": "filtering_slicing",
    "chunk": "filtering_slicing",
    "chunk_by": "filtering_slicing",
    "slide": "filtering_slicing",
    "stride": "filtering_slicing",
    "split": "filtering_slicing",
    "lazy_split": "filtering_slicing",
    "adjacent": "filtering_slicing",
    "zip": "combining",
    "zip_transform": "combining",
    "join": "combining",
    "join_with": "combining",
    "concat": "combining",
    "cartesian_product": "combining",
    "iota": "generators",
    "repeat": "generators",
    "single": "generators",
    "empty": "generators",
    "basic_istream": "generators",
    "range": "concepts",
    "view": "concepts",
    "viewable_range": "concepts",
    "borrowed_range": "concepts",
    "input_range": "concepts",
    "forward_range": "concepts",
    "bidirectional_range": "concepts",
    "random_access_range": "concepts",
    "contiguous_range": "concepts",
    "common_range": "concepts",
    "sized_range": "concepts",
    "constant_range": "concepts",
    "all": "utility",
    "common": "utility",
    "counted": "utility",
    "owning": "utility",
    "ref": "utility",
    "subrange": "utility",
    "to": "utility",
    "view_interface": "utility",
    "range_adaptor_closure": "utility",
    "borrowed_iterator_t": "utility",
    "iterator_t": "utility",
    "range_reference_t": "utility",
    "range_size_t": "utility",
    "dangling": "utility",
    "view_counted": "utility",
    "subrange_kind": "utility",
    "cpo": "utility",
    "copyable_wrapper": "support",
    "non-propagating-cache": "support",
    "elements_of": "support",
    "begin": "access",
    "end": "access",
    "size": "access",
    "data": "access",
    "cbegin": "access",
    "cend": "access",
    "cdata": "access",
    "rbegin": "access",
    "rend": "access",
    "crbegin": "access",
    "crend": "access",
    "ssize": "access",
}

DETAIL_SEGMENTS = {"iterator", "sentinel", "inner_iterator", "outer_iterator"}
DETAIL_LEAVES = {
    "_index",
    "base",
    "begin",
    "end",
    "size",
    "pred",
    "find_next",
    "helpers",
    "iter_move",
    "iter_swap",
    "value_type",
    "satisfy",
    "ok",
    "front",
    "back",
    "data",
    "empty",
    "deduction_guides",
}

DEFAULT_RELATED_BY_KEY = {
    "transform": [
        {"url": "/cpp/algorithm/ranges/transform/", "title": "ranges::transform algorithm"},
        {"url": "/cpp/ranges/zip_transform_view/", "title": "zip_transform_view"},
    ],
    "elements": [
        {"url": "/cpp/ranges/keys_view/", "title": "keys_view"},
        {"url": "/cpp/ranges/values_view/", "title": "values_view"},
    ],
    "keys": [
        {"url": "/cpp/ranges/elements_view/", "title": "elements_view"},
        {"url": "/cpp/ranges/values_view/", "title": "values_view"},
    ],
    "values": [
        {"url": "/cpp/ranges/elements_view/", "title": "elements_view"},
        {"url": "/cpp/ranges/keys_view/", "title": "keys_view"},
    ],
    "enumerate": [
        {"url": "/cpp/ranges/zip_view/", "title": "zip_view"},
        {"url": "/cpp/ranges/transform_view/", "title": "transform_view"},
    ],
    "adjacent": [
        {"url": "/cpp/ranges/slide_view/", "title": "slide_view"},
        {"url": "/cpp/ranges/adjacent_transform_view/", "title": "adjacent_transform_view"},
    ],
    "adjacent_transform": [
        {"url": "/cpp/ranges/adjacent_view/", "title": "adjacent_view"},
        {"url": "/cpp/ranges/transform_view/", "title": "transform_view"},
    ],
    "chunk": [
        {"url": "/cpp/ranges/slide_view/", "title": "slide_view"},
        {"url": "/cpp/ranges/stride_view/", "title": "stride_view"},
    ],
    "chunk_by": [
        {"url": "/cpp/ranges/chunk_view/", "title": "chunk_view"},
        {"url": "/cpp/ranges/split_view/", "title": "split_view"},
    ],
    "slide": [
        {"url": "/cpp/ranges/chunk_view/", "title": "chunk_view"},
        {"url": "/cpp/ranges/adjacent_view/", "title": "adjacent_view"},
    ],
    "stride": [
        {"url": "/cpp/ranges/chunk_view/", "title": "chunk_view"},
        {"url": "/cpp/ranges/drop_view/", "title": "drop_view"},
    ],
    "split": [
        {"url": "/cpp/ranges/lazy_split_view/", "title": "lazy_split_view"},
        {"url": "/cpp/ranges/join_view/", "title": "join_view"},
    ],
    "lazy_split": [
        {"url": "/cpp/ranges/split_view/", "title": "split_view"},
        {"url": "/cpp/ranges/join_view/", "title": "join_view"},
    ],
    "zip": [
        {"url": "/cpp/ranges/zip_transform_view/", "title": "zip_transform_view"},
        {"url": "/cpp/ranges/elements_view/", "title": "elements_view"},
    ],
    "zip_transform": [
        {"url": "/cpp/ranges/zip_view/", "title": "zip_view"},
        {"url": "/cpp/ranges/transform_view/", "title": "transform_view"},
    ],
    "join": [
        {"url": "/cpp/ranges/join_with_view/", "title": "join_with_view"},
        {"url": "/cpp/ranges/split_view/", "title": "split_view"},
    ],
    "join_with": [
        {"url": "/cpp/ranges/join_view/", "title": "join_view"},
        {"url": "/cpp/ranges/split_view/", "title": "split_view"},
    ],
    "iota": [
        {"url": "/cpp/ranges/repeat_view/", "title": "repeat_view"},
        {"url": "/cpp/ranges/single_view/", "title": "single_view"},
    ],
    "repeat": [
        {"url": "/cpp/ranges/iota_view/", "title": "iota_view"},
        {"url": "/cpp/ranges/single_view/", "title": "single_view"},
    ],
    "subrange": [
        {"url": "/cpp/ranges/view_interface/", "title": "view_interface"},
        {"url": "/cpp/ranges/common_view/", "title": "common_view"},
    ],
}


@dataclass(frozen=True)
class PageMeta:
    title: str
    source_path: str
    since: str | None
    url: str


def parse_front_matter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    match = FRONT_MATTER_RE.match(text)
    if not match:
        return {}

    out: dict[str, str] = {}
    for raw in match.group(1).splitlines():
        raw = raw.strip()
        if not raw or raw.startswith("#"):
            continue
        kv = KV_RE.match(raw)
        if not kv:
            continue
        key, value = kv.group(1), kv.group(2).strip()
        if value.startswith('"') and value.endswith('"') and len(value) >= 2:
            value = value[1:-1]
        out[key] = value
    return out


def title_names(title: str) -> list[str]:
    names = [part.strip() for part in title.split(",")]
    return [name for name in names if name]


def normalize_name(name: str) -> str:
    out = name.strip()
    for prefix in NAMESPACE_PREFIXES:
        if out.startswith(prefix):
            out = out[len(prefix) :]
            break
    return out.strip()


def short_name_from_names(names: list[str]) -> str | None:
    for name in names:
        if "::views::" in name:
            return f"views::{normalize_name(name)}"
    for name in names:
        if "::" in name:
            return normalize_name(name)
    return names[0] if names else None


def display_name_from_names(names: list[str], slug: str) -> str:
    short = short_name_from_names(names)
    if short:
        return short
    if slug.endswith("_view"):
        return f"views::{slug[:-5]}"
    return slug


def rel_to_url(rel: Path, front_matter: dict[str, str]) -> str:
    explicit = front_matter.get("url", "").strip()
    if explicit:
        if not explicit.startswith("/"):
            explicit = "/" + explicit
        if not explicit.endswith("/"):
            explicit += "/"
        return explicit

    if rel.name == "_index.md":
        parent = rel.parent.as_posix().strip("/")
        return f"/cpp/ranges/{parent}/" if parent else "/cpp/ranges/"
    return f"/cpp/ranges/{rel.with_suffix('').as_posix().strip('/')}/"


def load_overrides(path: Path) -> dict[str, dict]:
    if not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("overrides", {})


def entity_key_for_slug(slug: str, override: dict[str, dict]) -> str:
    entry = override.get(slug, {})
    if "entity_key" in entry:
        return str(entry["entity_key"])
    if slug.endswith("_view"):
        return slug[:-5]
    return slug


def category_for_slug(slug: str, entity_key: str, override: dict[str, dict]) -> str:
    entry = override.get(slug, {})
    if "category" in entry:
        return str(entry["category"])
    return CATEGORY_BY_KEY.get(entity_key, "utility")


def canonical_url_for_slug(slug: str, default_url: str, override: dict[str, dict]) -> str:
    entry = override.get(slug, {})
    if "canonical_url" in entry:
        return str(entry["canonical_url"])
    return default_url


def page_meta_for(rel: Path) -> PageMeta:
    full = RANGES_ROOT / rel
    fm = parse_front_matter(full)
    return PageMeta(
        title=fm.get("title", "").strip() or rel.stem,
        source_path=fm.get("source_path", "").strip() or f"cpp/ranges/{rel.with_suffix('').as_posix()}",
        since=fm.get("since", "").strip() or None,
        url=rel_to_url(rel, fm),
    )


def is_detail_rel(rel: Path) -> bool:
    parts = rel.with_suffix("").parts
    if any(part in DETAIL_SEGMENTS for part in parts):
        return True
    leaf = rel.stem
    if leaf in DETAIL_LEAVES:
        return True
    if leaf.startswith("operator"):
        return True
    return False


def related_urls_for_slug(slug: str, entity_key: str, canonical_url: str, override: dict[str, dict]) -> list[dict[str, str]]:
    entry = override.get(slug, {})
    raw_related = entry.get("related_urls", DEFAULT_RELATED_BY_KEY.get(entity_key, []))

    related: list[dict[str, str]] = []
    seen = {canonical_url}
    for item in raw_related:
        if isinstance(item, str):
            url = item
            title = item.rstrip("/").rsplit("/", 1)[-1]
        else:
            url = str(item.get("url", ""))
            title = str(item.get("title", url.rstrip("/").rsplit("/", 1)[-1]))
        if not url or url in seen:
            continue
        seen.add(url)
        related.append({"url": url, "title": title})
        if len(related) >= 3:
            break
    return related


def build_entities(overrides: dict[str, dict]) -> dict:
    entities = []
    root_pages = sorted(p for p in RANGES_ROOT.glob("*.md") if p.name != "_index.md")

    for page in root_pages:
        rel = page.relative_to(RANGES_ROOT)
        slug = rel.stem
        if is_detail_rel(rel):
            continue

        meta = page_meta_for(rel)
        entity_key = entity_key_for_slug(slug, overrides)
        canonical_url = canonical_url_for_slug(slug, meta.url, overrides)
        names = title_names(meta.title)
        display_name = display_name_from_names(names, slug)
        short_name = short_name_from_names(names)
        related_urls = related_urls_for_slug(slug, entity_key, canonical_url, overrides)

        entity = {
            "entity_key": entity_key,
            "display_name": display_name,
            "canonical_url": canonical_url,
            "related_urls": related_urls,
            "full_names": names,
            "category": category_for_slug(slug, entity_key, overrides),
            "source_slug": slug,
        }
        if short_name:
            entity["short_name"] = short_name
        if meta.since:
            entity["since"] = meta.since
        entities.append(entity)

    entities.sort(key=lambda e: (e["category"], e["display_name"], e["canonical_url"]))

    category_counts: dict[str, int] = {}
    for entity in entities:
        category_counts[entity["category"]] = category_counts.get(entity["category"], 0) + 1

    return {
        "schema_version": 2,
        "source_root": "content/cpp/ranges",
        "entity_count": len(entities),
        "category_counts": dict(sorted(category_counts.items())),
        "entities": entities,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate conceptual ranges entity data for Hugo.")
    parser.add_argument("--content-root", type=Path, default=CONTENT_ROOT)
    parser.add_argument("--overrides", type=Path, default=DEFAULT_OVERRIDES)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()

    global RANGES_ROOT
    RANGES_ROOT = args.content_root / "cpp" / "ranges"

    overrides = load_overrides(args.overrides)
    result = build_entities(overrides)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"wrote={args.out}")
    print(f"entity_count={result['entity_count']}")
    print(f"categories={len(result['category_counts'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
