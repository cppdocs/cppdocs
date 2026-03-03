#!/usr/bin/env python3
"""Build a strict, lightweight JSON search index from Markdown content."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

ALLOWED_SINCE_VALUES = {"C++11", "C++14", "C++17", "C++20", "C++23", "C++26"}


def split_frontmatter(text: str) -> Tuple[Dict[str, object], str]:
    if not text.startswith("---\n"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    return parse_simple_yaml(parts[1]), parts[2].lstrip("\n")


def parse_simple_yaml(fm_text: str) -> Dict[str, object]:
    data: Dict[str, object] = {}
    current_list_key: str | None = None

    for raw_line in fm_text.splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            continue

        if line.startswith("  - ") and current_list_key:
            value = line[4:].strip()
            data.setdefault(current_list_key, [])
            assert isinstance(data[current_list_key], list)
            data[current_list_key].append(unquote(value))
            continue

        current_list_key = None
        if ":" not in line:
            continue

        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()
        if not key:
            continue

        if not value:
            current_list_key = key
            data[key] = []
            continue

        data[key] = parse_scalar_or_inline_list(value)

    return data


def parse_scalar_or_inline_list(value: str):
    value = value.strip()
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [unquote(v.strip()) for v in inner.split(",") if v.strip()]
    return unquote(value)


def unquote(value: str) -> str:
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
        q = value[0]
        value = value[1:-1]
        if q == '"':
            value = value.replace('\\"', '"').replace("\\\\", "\\")
    return value


def derive_url(md_file: Path, content_root: Path, source_path: str) -> str:
    if source_path:
        return f"/{source_path.strip('/')}/"

    rel = md_file.relative_to(content_root).as_posix()
    if rel.endswith("/_index.md"):
        slug = rel[: -len("/_index.md")].strip("/")
        return f"/{slug}/" if slug else "/"
    slug = rel[:-3].strip("/")
    return f"/{slug}/" if slug else "/"


def derive_path_and_section(url: str) -> Tuple[str, str]:
    path = url.strip("/")
    parts = [p for p in path.split("/") if p]
    if len(parts) >= 2 and parts[0] == "cpp":
        return path, parts[1]
    if parts:
        return path, parts[0]
    return path, ""


def strip_block_sections(md: str) -> str:
    # Remove heavy sections entirely from searchable summary extraction.
    cutoff_headers = {
        "## Notes",
        "## Example",
        "## Defect reports",
        "## See also",
        "## Parameters",
        "## Return value",
    }
    out: List[str] = []
    for line in md.splitlines():
        if line.strip() in cutoff_headers:
            break
        out.append(line)
    return "\n".join(out)


def markdown_to_text(md: str) -> str:
    text = re.sub(r"```.*?```", " ", md, flags=re.DOTALL)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"^#{1,6}\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*\|.*\|\s*$", " ", text, flags=re.MULTILINE)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def normalize_summary(text: str) -> str:
    if not text:
        return ""
    # Keep 1-2 sentences max.
    sentences = re.split(r"(?<=[.!?])\s+", text)
    picked = []
    for s in sentences:
        s = s.strip()
        if not s:
            continue
        picked.append(s)
        if len(picked) == 2:
            break
    summary = " ".join(picked).strip()
    return summary[:420]


def extract_signatures(body: str, max_signatures: int = 6) -> List[str]:
    lines = body.splitlines()
    in_decls = False
    in_code = False
    code_lines: List[str] = []
    signatures: List[str] = []

    for line in lines:
        stripped = line.strip()

        if stripped.startswith("## "):
            if stripped == "## Declarations":
                in_decls = True
                in_code = False
                code_lines = []
                continue
            if in_decls:
                break

        if not in_decls:
            continue

        if stripped.startswith("```"):
            if not in_code:
                in_code = True
                code_lines = []
            else:
                in_code = False
                sig = " ".join(l.strip() for l in code_lines if l.strip())
                if sig:
                    signatures.append(sig)
                    if len(signatures) >= max_signatures:
                        break
                code_lines = []
            continue

        if in_code:
            code_lines.append(line)

    return signatures


def reliable_header(value: object) -> str | None:
    if not isinstance(value, str):
        return None
    v = value.strip()
    if re.fullmatch(r"<[^<>]+>", v):
        return v
    return None


def reliable_since(value: object) -> str | None:
    if not isinstance(value, str):
        return None
    v = value.strip()
    if v in ALLOWED_SINCE_VALUES:
        return v
    return None


def build_aliases(title: str) -> List[str]:
    aliases: List[str] = []
    t = title.strip()
    if not t:
        return aliases

    if "::" in t:
        tail = t.split("::")[-1].strip()
        tail = re.sub(r"\s*\(.*\)$", "", tail).strip()
        if tail and tail != t:
            aliases.append(tail)

    if t.startswith("C++ named requirements:"):
        name = t.split(":", 1)[-1].strip()
        name = re.sub(r"\s*\(.*\)$", "", name).strip()
        if name and name not in aliases:
            aliases.append(name)

    return aliases


def build_index(content_root: Path) -> List[Dict[str, object]]:
    entries: List[Dict[str, object]] = []

    for md_file in sorted(content_root.rglob("*.md")):
        text = md_file.read_text(encoding="utf-8")
        fm, body = split_frontmatter(text)

        title = str(fm.get("title") or md_file.stem)
        source_path = str(fm.get("source_path") or "")
        url = derive_url(md_file, content_root, source_path)
        path, section = derive_path_and_section(url)

        preface = strip_block_sections(body)
        summary_text = markdown_to_text(preface)
        summary = normalize_summary(summary_text)

        entry: Dict[str, object] = {
            "title": title,
            "url": url,
            "section": section,
            "path": path,
            "summary": summary,
            "signatures": extract_signatures(body, max_signatures=6),
        }

        header = reliable_header(fm.get("header"))
        if header:
            entry["header"] = header

        since = reliable_since(fm.get("since"))
        if since:
            entry["since"] = since

        aliases = build_aliases(title)
        if aliases:
            entry["aliases"] = aliases

        entries.append(entry)

    return entries


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path("content/cpp"), help="Markdown root to index")
    parser.add_argument("--out", type=Path, default=Path("static/search-index.json"), help="Output JSON path")
    args = parser.parse_args()

    entries = build_index(args.root)
    payload = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(payload, encoding="utf-8")

    size = args.out.stat().st_size
    print(f"indexed pages: {len(entries)}")
    print(f"output size: {size} bytes ({size / 1024:.1f} KiB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
