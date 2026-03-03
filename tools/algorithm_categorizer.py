#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path


CONTENT_ROOT = Path("content") / "cpp" / "algorithm"
DEFAULT_OUTPUT = Path("data") / "algorithm_index.json"
DEFAULT_OVERRIDES = Path("tools") / "algorithm_overrides.json"

FRONT_MATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.DOTALL)
KV_RE = re.compile(r"^([A-Za-z0-9_]+):\s*(.*)$")

SKIP_PATHS = {
    "ranges.md",
    "execution_policy_tag.md",
    "execution_policy_tag_t.md",
    "is_execution_policy.md",
}
SKIP_PREFIXES = ("ranges/return_types/",)
IGNORE_NAME_SUFFIXES = (
    "_result",
    "_policy",
)
IGNORE_NAMES = {
    "seq",
    "par",
    "par_unseq",
    "unseq",
    "sequenced_policy",
    "parallel_policy",
    "parallel_unsequenced_policy",
    "unsequenced_policy",
    "is_execution_policy",
}

CATEGORY_BY_KEY = {
    "adjacent_find": "searching",
    "all_of": "searching",
    "any_of": "searching",
    "binary_search": "searching",
    "clamp": "comparison_min_max",
    "contains": "searching",
    "contains_subrange": "searching",
    "count": "searching",
    "count_if": "searching",
    "ends_with": "searching",
    "equal": "comparison_min_max",
    "equal_range": "searching",
    "find": "searching",
    "find_end": "searching",
    "find_first_of": "searching",
    "find_if": "searching",
    "find_if_not": "searching",
    "find_last": "searching",
    "find_last_if": "searching",
    "find_last_if_not": "searching",
    "includes": "set_operations",
    "is_heap": "searching",
    "is_heap_until": "searching",
    "is_partitioned": "partitioning",
    "is_permutation": "permutations",
    "is_sorted": "sorting_ordering",
    "is_sorted_until": "sorting_ordering",
    "lexicographical_compare": "comparison_min_max",
    "lexicographical_compare_three_way": "comparison_min_max",
    "lower_bound": "searching",
    "max": "comparison_min_max",
    "max_element": "comparison_min_max",
    "min": "comparison_min_max",
    "min_element": "comparison_min_max",
    "minmax": "comparison_min_max",
    "minmax_element": "comparison_min_max",
    "mismatch": "comparison_min_max",
    "none_of": "searching",
    "search": "searching",
    "search_n": "searching",
    "starts_with": "searching",
    "upper_bound": "searching",
    "copy": "modifying_sequences",
    "copy_backward": "modifying_sequences",
    "copy_if": "modifying_sequences",
    "copy_n": "modifying_sequences",
    "iter_swap": "modifying_sequences",
    "move": "modifying_sequences",
    "move_backward": "modifying_sequences",
    "swap": "modifying_sequences",
    "swap_ranges": "modifying_sequences",
    "fill": "modifying_sequences",
    "fill_n": "modifying_sequences",
    "generate": "modifying_sequences",
    "generate_n": "modifying_sequences",
    "generate_random": "modifying_sequences",
    "remove": "modifying_sequences",
    "remove_copy": "modifying_sequences",
    "remove_copy_if": "modifying_sequences",
    "remove_if": "modifying_sequences",
    "replace": "modifying_sequences",
    "replace_copy": "modifying_sequences",
    "replace_copy_if": "modifying_sequences",
    "replace_if": "modifying_sequences",
    "reverse": "modifying_sequences",
    "reverse_copy": "modifying_sequences",
    "rotate": "modifying_sequences",
    "rotate_copy": "modifying_sequences",
    "sample": "permutations",
    "shift_left": "modifying_sequences",
    "shift_right": "modifying_sequences",
    "shuffle": "permutations",
    "random_shuffle": "permutations",
    "unique": "modifying_sequences",
    "unique_copy": "modifying_sequences",
    "for_each": "modifying_sequences",
    "for_each_n": "modifying_sequences",
    "transform": "modifying_sequences",
    "sort": "sorting_ordering",
    "stable_sort": "sorting_ordering",
    "nth_element": "sorting_ordering",
    "partial_sort": "sorting_ordering",
    "partial_sort_copy": "sorting_ordering",
    "sort_heap": "heap",
    "make_heap": "heap",
    "push_heap": "heap",
    "pop_heap": "heap",
    "partition": "partitioning",
    "partition_copy": "partitioning",
    "partition_point": "partitioning",
    "stable_partition": "partitioning",
    "inplace_merge": "set_operations",
    "merge": "set_operations",
    "set_difference": "set_operations",
    "set_intersection": "set_operations",
    "set_symmetric_difference": "set_operations",
    "set_union": "set_operations",
    "next_permutation": "permutations",
    "prev_permutation": "permutations",
    "accumulate": "numeric",
    "adjacent_difference": "numeric",
    "exclusive_scan": "numeric",
    "inclusive_scan": "numeric",
    "inner_product": "numeric",
    "iota": "numeric",
    "partial_sum": "numeric",
    "reduce": "numeric",
    "transform_exclusive_scan": "numeric",
    "transform_inclusive_scan": "numeric",
    "transform_reduce": "numeric",
    "fold_left": "numeric",
    "fold_left_first": "numeric",
    "fold_left_first_with_iter": "numeric",
    "fold_left_with_iter": "numeric",
    "fold_right": "numeric",
    "fold_right_last": "numeric",
    "bsearch": "c_compat",
    "qsort": "c_compat",
}


@dataclass(frozen=True)
class PageMeta:
    rel: str
    url: str
    title: str
    since: str | None
    family: str
    has_execution_policy: bool
    names: tuple[str, ...]


def parse_front_matter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    match = FRONT_MATTER_RE.match(text)
    if not match:
        return {}

    values: dict[str, str] = {}
    for raw in match.group(1).splitlines():
        raw = raw.strip()
        if not raw or raw.startswith("#"):
            continue
        parsed = KV_RE.match(raw)
        if not parsed:
            continue
        key, value = parsed.group(1), parsed.group(2).strip()
        if value.startswith('"') and value.endswith('"') and len(value) >= 2:
            value = value[1:-1]
        values[key] = value
    return values


def default_url(rel: str) -> str:
    no_ext = rel[:-3] if rel.endswith(".md") else rel
    return f"/cpp/algorithm/{no_ext}/"


def normalize_name(name: str) -> str:
    value = name.strip()
    for prefix in ("std::ranges::", "std::execution::", "std::"):
        if value.startswith(prefix):
            value = value[len(prefix) :]
            break
    return value.strip()


def extract_entity_names(title: str) -> list[str]:
    out: list[str] = []
    for part in title.split(","):
        original = part.strip()
        normalized = normalize_name(original)
        if not normalized:
            continue
        if normalized in IGNORE_NAMES:
            continue
        if any(normalized.endswith(suffix) for suffix in IGNORE_NAME_SUFFIXES):
            continue
        if "(" in normalized or ")" in normalized:
            continue
        out.append(original)
    return out


def page_family(rel: str) -> str:
    if rel.startswith("ranges/"):
        return "ranges"
    return "classic"


def load_overrides(path: Path) -> dict[str, dict]:
    if not path.exists():
        return {}
    payload = json.loads(path.read_text(encoding="utf-8"))
    return payload.get("overrides", {})


def load_pages() -> list[PageMeta]:
    pages: list[PageMeta] = []
    for path in sorted(CONTENT_ROOT.rglob("*.md")):
        rel = path.relative_to(CONTENT_ROOT).as_posix()
        if path.name == "_index.md":
            continue
        if rel in SKIP_PATHS:
            continue
        if rel.startswith(SKIP_PREFIXES):
            continue

        front_matter = parse_front_matter(path)
        title = front_matter.get("title", rel)
        names = tuple(extract_entity_names(title))
        if not names:
            continue

        text = path.read_text(encoding="utf-8", errors="replace")
        pages.append(
            PageMeta(
                rel=rel,
                url=front_matter.get("url", default_url(rel)),
                title=title,
                since=front_matter.get("since"),
                family=page_family(rel),
                has_execution_policy="ExecutionPolicy" in text,
                names=names,
            )
        )
    return pages


def preferred_display_name(variants: list[PageMeta], entity_key: str) -> str:
    classic_names: list[str] = []
    ranges_names: list[str] = []
    for variant in variants:
        source = classic_names if variant.family == "classic" else ranges_names
        for name in variant.names:
            if normalize_name(name) == entity_key:
                source.append(name)
    if classic_names:
        return classic_names[0]
    if ranges_names:
        return ranges_names[0]
    return f"std::{entity_key}"


def canonical_variant(variants: list[PageMeta], entity_key: str, override: dict | None = None) -> PageMeta:
    override = override or {}
    forced_url = str(override.get("canonical_url", "")).strip()
    if forced_url:
        for variant in variants:
            if variant.url == forced_url:
                return variant

    def score(variant: PageMeta) -> tuple[int, int, str]:
        direct = 0 if variant.rel.split("/")[-1] == f"{entity_key}.md" else 1
        family_rank = 0 if variant.family == "classic" else 1
        return (direct, family_rank, variant.url)

    return sorted(variants, key=score)[0]


def category_for_key(entity_key: str, override: dict | None = None) -> str:
    override = override or {}
    if override.get("category"):
        return str(override["category"])
    return CATEGORY_BY_KEY.get(entity_key, "other")


def entity_sort_key(entity: dict) -> tuple[str, str]:
    return (entity["category"], entity["entity_key"])


def build_entities(pages: list[PageMeta], overrides: dict[str, dict]) -> list[dict]:
    bucket: dict[str, list[PageMeta]] = defaultdict(list)
    for page in pages:
        for name in page.names:
            key = normalize_name(name)
            if key in IGNORE_NAMES:
                continue
            bucket[key].append(page)

    entities: list[dict] = []
    for entity_key in sorted(bucket):
        override = overrides.get(entity_key, {})
        variants = sorted(
            {variant.rel: variant for variant in bucket[entity_key]}.values(),
            key=lambda variant: (variant.family, variant.url, variant.rel),
        )
        canonical = canonical_variant(variants, entity_key, override)
        display_name = preferred_display_name(variants, entity_key)
        variant_rows = []
        for variant in variants:
            matched_names = sorted(
                name for name in variant.names if normalize_name(name) == entity_key
            )
            variant_rows.append(
                {
                    "family": variant.family,
                    "url": variant.url,
                    "title": variant.title,
                    "source_path": variant.rel,
                    "since": variant.since or "",
                    "execution_policy": variant.has_execution_policy,
                    "matched_names": matched_names,
                }
            )

        related_urls = sorted({variant["url"] for variant in variant_rows if variant["url"] != canonical.url})
        for related_entity in override.get("related_entities", []):
            related_override = overrides.get(str(related_entity), {})
            related_url = str(related_override.get("canonical_url", "")).strip()
            if related_url and related_url != canonical.url and related_url not in related_urls:
                related_urls.append(related_url)
        for supporting_url in override.get("supporting_urls", []):
            url = str(supporting_url).strip()
            if url and url != canonical.url and url not in related_urls:
                related_urls.append(url)
        since_values = [variant.since for variant in variants if variant.since]
        since = canonical.since or (min(since_values) if since_values else "")
        full_names = []
        for variant in variants:
            for name in variant.names:
                if normalize_name(name) == entity_key and name not in full_names:
                    full_names.append(name)

        entities.append(
            {
                "entity_key": entity_key,
                "display_name": display_name,
                "canonical_url": canonical.url,
                "related_urls": related_urls,
                "category": category_for_key(entity_key, override),
                "variants": variant_rows,
                "since": since,
                "full_names": full_names,
            }
        )

    entities.sort(key=entity_sort_key)
    return entities


def build_index(overrides_path: Path = DEFAULT_OVERRIDES) -> dict:
    pages = load_pages()
    overrides = load_overrides(overrides_path)
    entities = build_entities(pages, overrides)
    return {
        "schema_version": 2,
        "source_root": str(CONTENT_ROOT),
        "entity_count": len(entities),
        "category_counts": dict(sorted(Counter(entity["category"] for entity in entities).items())),
        "entities": entities,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate conceptual algorithm entity data")
    parser.add_argument("--out", default=str(DEFAULT_OUTPUT), help="Output JSON path")
    parser.add_argument("--overrides", default=str(DEFAULT_OVERRIDES), help="Override JSON path")
    args = parser.parse_args()

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    payload = build_index(Path(args.overrides))
    out_path.write_text(json.dumps(payload, indent=2, sort_keys=False) + "\n", encoding="utf-8")
    print(f"wrote={out_path}")
    print(f"entity_count={payload['entity_count']}")
    print(f"category_counts={payload['category_counts']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
