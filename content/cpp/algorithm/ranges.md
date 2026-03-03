---
title: "Constrained algorithms (since C++20)"
source_path: "cpp/algorithm/ranges"
category: "algorithm"
since: "C++20"
---

C++20 provides [constrained](/cpp/language/constraints/) versions of most algorithms in the namespace std::ranges. In these algorithms, a range can be specified as either an [iterator](/cpp/iterator/input_or_output_iterator/)-[sentinel](/cpp/iterator/sentinel_for/) pair or as a single [range](/cpp/ranges/range/) argument, and projections and pointer-to-member callables are supported. Additionally, the [return types](#Return_types) of most algorithms have been changed to return all potentially useful information computed during the execution of the algorithm.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403L
(C++26)
List-initialization for algorithms
__cpp_lib_ranges
201911L
(C++20)
Ranges library and constrained algorithms
__cpp_lib_ranges_contains
202207L
(C++23)
std::ranges::contains
__cpp_lib_ranges_find_last
202207L
(C++23)
std::ranges::find_last
__cpp_lib_ranges_fold
202207L
(C++23)
std::ranges fold algorithms
__cpp_lib_ranges_iota
202202L
(C++23)
std::ranges::iota
__cpp_lib_ranges_starts_ends_with
202106L
(C++23)
std::ranges::starts_with, std::ranges::ends_with
__cpp_lib_shift
201806L
(C++20)
std::shift_left, std::shift_right
202202L
(C++23)
std::ranges::shift_left, std::ranges::shift_right
__cpp_lib_ranges_generate_random
202403L
(C++26)
std::ranges::generate_random

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P3136R1 | C++20 | niebloids were allowed to be specified as special entitiesother than function objects | required to be specified as function objects |
