#!/usr/bin/env bash
set -euo pipefail

# Safe cleanup helper for local build artifacts.
# Default mode is dry-run; pass --apply to actually remove paths.

APPLY=0
if [[ "${1:-}" == "--apply" ]]; then
  APPLY=1
elif [[ $# -gt 0 ]]; then
  echo "Usage: $0 [--apply]"
  exit 2
fi

ARTIFACTS=(
  "public"
  ".hugo_build.lock"
  "static/c"
)

if [[ $APPLY -eq 0 ]]; then
  echo "Mode: dry-run (no files removed). Use --apply to delete."
else
  echo "Mode: apply"
fi

for path in "${ARTIFACTS[@]}"; do
  if [[ -e "$path" ]]; then
    if [[ $APPLY -eq 1 ]]; then
      rm -rf -- "$path"
      echo "removed: $path"
    else
      echo "would remove: $path"
    fi
  else
    echo "skip (missing): $path"
  fi
done
