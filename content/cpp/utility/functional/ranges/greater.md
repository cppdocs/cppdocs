---
title: "std::ranges::greater"
source_path: "cpp/utility/functional/ranges/greater"
header: "<functional>"
category: "utility"
since: "C++20"
---

Function object for performing comparisons. Deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
struct greater;
```
_(since C++20)_

## Notes
Unlike [std::greater](/cpp/utility/functional/greater/), std::ranges::greater requires all six comparison operators <, <=, >, >=, == and != to be valid (via the [totally_ordered_with](/cpp/concepts/totally_ordered/) constraint) and is entirely defined in terms of
std::ranges::less.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3530 | C++20 | syntactic checks were relaxed while comparing pointers | only semantic requirements are relaxed |

## See also
- [greater](/cpp/utility/functional/greater/)
