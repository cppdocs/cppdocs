---
title: "std::ranges::not_equal_to"
source_path: "cpp/utility/functional/ranges/not_equal_to"
header: "<functional>"
category: "utility"
since: "C++20"
---

Function object for performing comparisons. Deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
struct not_equal_to;
```
_(since C++20)_

## Notes
Unlike [std::not_equal_to](/cpp/utility/functional/not_equal_to/), std::ranges::not_equal_to requires both == and != to be valid (via the [equality_comparable_with](/cpp/concepts/equality_comparable/) constraint), and is entirely defined in terms of std::ranges::equal_to.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3530 | C++20 | syntactic checks were relaxed while comparing pointers | only semantic requirements are relaxed |

## See also
- [not_equal_to](/cpp/utility/functional/not_equal_to/)
