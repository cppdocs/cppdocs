#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path


DEFAULT_REQUIRED_FILES = [
    "public/index.html",
    "public/cpp/index.html",
    "public/c/index.html",
    "public/reference-map/index.html",
    "static/search-index.json",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Minimal post-build smoke checks for key site outputs.",
    )
    parser.add_argument(
        "--required",
        nargs="*",
        default=DEFAULT_REQUIRED_FILES,
        help="Files that must exist after generation/build.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    missing: list[str] = []

    for raw in args.required:
        path = Path(raw)
        if not path.exists():
            missing.append(raw)

    if missing:
        print("SMOKE_CHECK_FAILED: required outputs are missing")
        for item in missing:
            print(f"- {item}")
        return 1

    print("SMOKE_CHECK_OK: required outputs exist")
    for raw in args.required:
        print(f"- {raw}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
