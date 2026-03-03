---
title: "Symbol Index (removed)"
source_path: "cpp/symbol_index/zombie_names"
category: "symbol_index"
---

This page tries to list all the symbols that were available from the [standard library](/cpp/standard_library/) in the namespace std or in the scope of a scoped enumeration or a class, but removed in following standards. The symbols are written as follows:

## Notes
The removed names are considered reserved and may be reused for other facilities in future Standard library revisions.

Names reserved as members for previous standardization may not be used as a name for object-like macros in portable code.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3885 | C++17 | “op” was not a reserved member name | it is |
