---
title: "std::ranges::equal_to"
source_path: "cpp/utility/functional/ranges/equal_to"
header: "<functional>"
category: "utility"
since: "C++20"
---

Function object for performing comparisons. The parameter types of the function call operator (but not the return type) are deduced from the arguments.

## Declarations
```cpp
struct equal_to;
```
_(since C++20)_

## Notes
Compared to [std::equal_to](/cpp/utility/functional/equal_to/), std::ranges::equal_to additionally requires != to be valid, and that both argument types are required to be (homogeneously) comparable with themselves (via the [equality_comparable_with](/cpp/concepts/equality_comparable/) constraint).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3530 | C++20 | syntactic checks were relaxed while comparing pointers | only semantic requirements are relaxed |

## See also
- [equal_to](/cpp/utility/functional/equal_to/)
