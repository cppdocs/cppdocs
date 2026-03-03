# cppdocs.dev

`cppdocs.dev` is a static C and C++ reference site built with Hugo.

The project builds on top of the cppreference offline dump and reorganizes the content into a structured, usability-focused reference layer. It adds curated navigation hubs, cross-cutting entry points, fast search, and bookmark support to make it easier to discover APIs even when you don’t know exactly what you’re looking for.

## What This Repository Contains

- `content/`
  - Reference pages and curated hub pages.
- `layouts/`
  - Hugo templates for page rendering and navigation surfaces.
- `static/`
  - CSS, JavaScript, images, and generated search output.
- `data/`
  - Generated data used by curated navigation features.
- `tools/`
  - Small build helpers for search and hub data generation.

## Local Build

Prerequisites:

- Hugo Extended
- Python 3

Typical local build:

```bash
python3 tools/build_reference_map.py
python3 tools/build_search_index.py
hugo -D
```

If you changed ranges hub generation:

```bash
python3 tools/ranges_categorizer.py --out data/ranges_index.json
hugo -D
```

If you changed algorithm hub generation:

```bash
python3 tools/algorithm_categorizer.py --out data/algorithm_index.json
hugo -D
```

## Project Notes

- The repository is Markdown-first. Most changes should happen in `content/`.
- Generated files such as the search index and reference-map data are part of the normal build flow.
- Some areas, especially `/cpp/ranges/` and `/cpp/algorithm/`, use more specialized navigation and layout logic than generic overview pages.
- Some metadata is still incomplete and is being filled in gradually.
- Some pages are still being refined and should be treated as work in progress.
- This project does not aim to mirror the formal wording or structure of the ISO standard. 
- Simpler, clearer examples are welcome when they improve readability and remain technically correct.

## Contributing

Contribution guidance lives in [CONTRIBUTING.md](CONTRIBUTING.md).

Read it before making changes to routing, metadata, generated files, or custom hub layouts.
