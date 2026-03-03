#!/bin/sh
set -eu

echo "[qa] 1/5 build reference map"
python3 tools/build_reference_map.py

echo "[qa] 2/5 build ranges index"
python3 tools/ranges_categorizer.py --out data/ranges_index.json

echo "[qa] 3/5 build algorithm index"
python3 tools/algorithm_categorizer.py --out data/algorithm_index.json

echo "[qa] 4/5 build search index"
python3 tools/build_search_index.py

echo "[qa] 5/5 hugo -D"
hugo -D

echo "[qa] done"
