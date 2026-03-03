# Contributing

This repository is a Hugo-based reference site. Most contributions should be small, focused Markdown edits under `content/`.

## Core Rules

1. Preserve working routes.
2. Prefer small changes over broad rewrites.
3. Do not guess metadata.
4. Keep curated hubs curated.
5. Regenerate committed generated files when your change affects them.

If you are making a one-page content fix, you usually do not need to touch templates, generators, or data files.

## Repository Structure

- `content/`
  - Source of truth for page content.
- `layouts/`
  - Hugo templates. Change only for cross-page presentation or behavior.
- `static/`
  - CSS, JS, images, and generated search output.
- `data/`
  - Generated structured data used by curated navigation surfaces.
- `tools/`
  - Build helpers and small generators.

## Typical Safe Changes

- fix wording in an existing page
- improve links in a page
- add or correct front matter
- add a missing page under the correct section
- improve a curated overview page

## Changes That Need Extra Care

- changing route structure
- mass-renaming files
- changing layout behavior
- editing generated JSON by hand
- changing `ranges` or `algorithm` layouts without understanding their custom navigation

## Where New Pages Go

Add new pages under the correct section in `content/`.

Examples:

- C++ language pages: `content/cpp/language/...`
- C++ library pages: `content/cpp/container/...`, `content/cpp/string/...`, `content/cpp/io/...`
- C pages: `content/c/...`

Use:

- `foo.md` for a normal leaf page
- `foo/_index.md` for a section landing page

Examples:

- `content/cpp/container/vector.md`
- `content/cpp/container/_index.md`

## Critical Routing Rule

Do not create both of these unless you are intentionally handling route shadowing:

- `content/cpp/foo.md`
- `content/cpp/foo/_index.md`

In Hugo, they can compete for the same route.

If `/cpp/foo/` should be a curated landing page, the usual preferred shape is:

- keep `content/cpp/foo/_index.md`
- do not also keep `content/cpp/foo.md`

Before adding a new `_index.md`, check whether a sibling `foo.md` already exists.

## Front Matter

Common fields:

- `title`
  - Required for meaningful pages.
- `description`
  - Recommended for hubs and major entry pages.
- `source_path`
  - Use when the page maps to cppreference-derived source material.
  - Keep it accurate.
- `since`
  - Use only when supported by clear evidence.
  - Valid values in current practice:
    - `C++11`
    - `C++14`
    - `C++17`
    - `C++20`
    - `C++23`
    - `C++26`
- `header`
  - Use only when the page maps to a specific standard header such as `<vector>`.
- `layout`
  - Use only when the page intentionally relies on a custom layout.

## `since` Policy

Do not guess `since`.

Allowed basis for adding or changing it:

- explicit evidence on the corresponding cppreference page
- clearly established metadata already present in the repo

Not allowed:

- “this feels like C++20”
- inference from nearby pages alone
- bulk edits without evidence

If unsure, leave `since` out.

This matters because `since` affects search, the `Min standard` filter, and some curated navigation surfaces.

## Hubs vs Leaf Pages

There are two broad page types in this repo:

1. Leaf reference pages
   - specific types, functions, members, headers, and keywords
2. Curated hubs
   - section landing pages and overview pages

For leaf pages:

- keep the page direct
- avoid unnecessary visual structure

For hubs:

- optimize for navigation clarity
- use compact summaries, tables, and cards where they help
- avoid repeating the same navigation in multiple sections

## Special Cases

These areas have custom UX and should not be casually normalized into generic overview pages:

- `/cpp/ranges/`
- `/cpp/algorithm/`

If you touch them:

- preserve their existing navigation model
- do not flatten their structure without a clear reason

## Generated Files

Common generated files:

- `static/search-index.json`
- `data/reference_map.json`
- other generated hub data under `data/`

If your change affects generated output, regenerate and commit the updated file. Do not leave generated data stale.

## Minimal Validation Before Opening a PR

For normal content work:

```bash
python3 tools/build_reference_map.py
python3 tools/build_search_index.py
hugo -D
```

If you touched ranges hub generation:

```bash
python3 tools/ranges_categorizer.py --out data/ranges_index.json
hugo -D
```

If you touched algorithm hub generation:

```bash
python3 tools/algorithm_categorizer.py --out data/algorithm_index.json
hugo -D
```

## CI Expectations

CI is intentionally lightweight. It should confirm that the generated data and site build still work.

Do not assume every possible quality check runs automatically. If your change affects routing or other sensitive behavior, run the relevant local checks before opening a PR.

## Commit Guidance

- keep commits scoped
- use short imperative commit messages
- include generated files only when relevant

Good examples:

- `Fix code block spacing in light theme`
- `Update adjacent transform page metadata`
- `Add curated links to the string hub`

## What Not To Commit

Do not commit local or temporary files such as:

- editor state
- scratch files
- temporary reports
- exported notes

If a file is not part of the site, build, or agreed repository documentation, it probably should not be committed.

## Contributor Checklist

Before opening a PR, verify:

1. The route is correct.
2. No route shadowing was introduced.
3. Front matter is accurate.
4. `since` was not guessed.
5. Required generated files were rebuilt.
6. `hugo -D` passes.
7. The change is scoped and reviewable.
