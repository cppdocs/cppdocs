---
title: "std::ranges::less"
source_path: "cpp/utility/functional/ranges/less"
header: "<functional>"
category: "utility"
since: "C++20"
---

Function object for performing comparisons. Deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
struct less;
```
_(since C++20)_

## Notes
Unlike [std::less](/cpp/utility/functional/less/), std::ranges::less requires all six comparison operators <, <=, >, >=, == and != to be valid (via the [totally_ordered_with](/cpp/concepts/totally_ordered/) constraint).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3530 | C++20 | syntactic checks were relaxed while comparing pointers | only semantic requirements are relaxed |

## See also
- [less](/cpp/utility/functional/less/)
