---
title: "Algorithms library"
source_path: "cpp/algorithm"
category: "algorithm"
---

The algorithms library defines functions for a variety of purposes (e.g. searching, sorting, counting, manipulating) that operate on ranges of elements. Note that a range is defined as [first,last) where last refers to the element past the last element to inspect or modify.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_iterator_requirements
202207L
(C++23)
Ranges iterators as inputs to non-Ranges algorithms
__cpp_lib_clamp
201603L
(C++17)
std::clamp
__cpp_lib_constexpr_algorithms
201806L
(C++20)
Constexpr for algorithms
202306L
(C++26)
Constexpr stable sorting
__cpp_lib_algorithm_default_value_type
202403L
(C++26)
List-initialization for algorithms
__cpp_lib_freestanding_algorithm
202311L
(C++26)
Freestanding facilities in <algorithm>
__cpp_lib_robust_nonmodifying_seq_ops
201304L
(C++14)
Making non-modifying sequence operations more robust (two-range overloads for std::mismatch, std::equal and std::is_permutation)
__cpp_lib_sample
201603L
(C++17)
std::sample
__cpp_lib_shift
201806L
(C++20)
std::shift_left and std::shift_right

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 193 | C++98 | heap required *first to be the largest element | there can be elementsequal to *first |
| LWG 2150 | C++98 | the definition of a sorted sequence was incorrect | corrected |
| LWG 2166 | C++98 | the heap requirement did not match thedefinition of max heap closely enough | requirement improved |

## See also
- [C documentation](/c/algorithm/)
