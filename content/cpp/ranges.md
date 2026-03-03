---
title: "Ranges library (since C++20)"
source_path: "cpp/ranges"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The ranges library is an extension and generalization of the algorithms and iterator libraries that makes them more powerful by making them composable and less error-prone.

## Declarations
```cpp
namespace std {
namespace views = ranges::views;
}
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generator
202207L
(C++23)
std::generator – synchronous coroutine generator for ranges
__cpp_lib_ranges
201911L
(C++20)
Ranges library and constrained algorithms
202106L
(C++23)(DR20)
Non-default-initializable views
202110L
(C++23)(DR20)
Views with ownership
202202L
(C++23)
ranges::range_adaptor_closure
202207L
(C++23)
Relaxing range adaptors to allow for move-only types
202211L
(C++23)
Removing "poison pills" (P2602) overloads in ranges::begin etc
202302L
(C++23)
Relaxing ranges to allow certain projections
202406L
(C++26)(DR20)
Removing the common reference requirement from the indirectly invocable concepts
__cpp_lib_ranges_as_const
202207L
(C++23)
std::const_iterator, ranges::as_const_view
__cpp_lib_ranges_as_rvalue
202207L
(C++23)
ranges::as_rvalue_view
__cpp_lib_ranges_cache_latest
202411L
(C++26)
ranges::cache_latest_view
__cpp_lib_ranges_cartesian_product
202207L
(C++23)
ranges::cartesian_product_view
__cpp_lib_ranges_chunk
202202L
(C++23)
ranges::chunk_view
__cpp_lib_ranges_chunk_by
202202L
(C++23)
ranges::chunk_by_view
__cpp_lib_ranges_concat
202403L
(C++26)
ranges::concat_view
__cpp_lib_ranges_enumerate
202302L
(C++23)
ranges::enumerate_view
__cpp_lib_ranges_join_with
202202L
(C++23)
ranges::join_with_view
__cpp_lib_ranges_repeat
202207L
(C++23)
ranges::repeat_view
__cpp_lib_ranges_slide
202202L
(C++23)
ranges::slide_view
__cpp_lib_ranges_stride
202207L
(C++23)
ranges::stride_view
__cpp_lib_ranges_to_container
202202L
(C++23)
ranges::to
__cpp_lib_ranges_zip
202110L
(C++23)
ranges::zip_view,ranges::zip_transform_view,ranges::adjacent_view,ranges::adjacent_transform_view

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    auto const ints = {0, 1, 2, 3, 4, 5};
    auto even = [](int i) { return 0 == i % 2; };
    auto square = [](int i) { return i * i; };
 
    // the "pipe" syntax of composing the views:
    for (int i : ints | std::views::filter(even) | std::views::transform(square))
        std::cout << i << ' ';
 
    std::cout << '\n';
 
    // a traditional "functional" composing syntax:
    for (int i : std::views::transform(std::views::filter(ints, even), square))
        std::cout << i << ' ';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3509(P2281R1) | C++20 | it was unclear how range adaptor objects bound trailing arguments | they are boundby value |
| LWG 3948 | C++23 | possibly-const-range and as-const-pointerwere not declared noexcept | declared noexcept |
| LWG 4027 | C++23 | possibly-const-range would not add const-qualificationfor ranges that has already modeled constant_range | adds const-qualificationfor such ranges |

## See also
- [Iterator library](/cpp/iterator/)
- [Constrained algorithms](/cpp/algorithm/ranges/)
