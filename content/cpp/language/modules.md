---
title: "Modules (since C++20)"
source_path: "cpp/language/modules"
category: "language"
since: "C++20"
---

Most C++ projects use multiple translation units, and so they need to share [declarations](/cpp/language/declarations/) and [definitions](/cpp/language/definition/) across those units. The usage of [headers](/cpp/standard_library/#Headers) is prominent for this purpose, an example being the [standard library](/cpp/standard_library/) whose declarations can be provided by [including the corresponding header](/cpp/standard_library/#Including_headers).

## Notes
Feature-test macro
Value
Std
Feature
__cpp_modules
201907L
(C++20)
Modules — core language support
__cpp_lib_modules
202207L
(C++23)
Standard library modules std and std.compat

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2732 | C++20 | it was unclear whether importable headers canreact to preprocessor state from the point of import | no reaction |
| P3034R1 | C++20 | module names and module partitions couldcontain identifiers defined as object-like macros | prohibited |
