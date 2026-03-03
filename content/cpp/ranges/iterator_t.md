---
title: "std::ranges::iterator_t, std::ranges::const_iterator_t, std::ranges::sentinel_t, std::ranges::const_sentinel_t"
source_path: "cpp/ranges/iterator_t"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) Used to obtain the iterator type of the type T.

## Declarations
```cpp
template< class T >
using iterator_t = decltype(ranges::begin(std::declval<T&>()));
```
_(since C++20)_

```cpp
template< ranges::range R >
using const_iterator_t = decltype(ranges::cbegin(std::declval<R&>()));
```
_(since C++23)_

```cpp
template< ranges::range R >
using sentinel_t = decltype(ranges::end(std::declval<R&>()));
```
_(since C++20)_

```cpp
template< ranges::range R >
using const_sentinel_t = decltype(ranges::cend(std::declval<R&>()));
```
_(since C++23)_

## Notes
iterator_t can be applied to non-range types, e.g. arrays with unknown bound.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3946 | C++23 | const_iterator_t and const_sentinel_t were inconsistentwith the result of ranges::cbegin and ranges::cend respectively | tweaked |

## See also
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [ranges::range_difference_tranges::range_size_tranges::range_value_t](/cpp/ranges/range_size_t/)
- [ranges::range_reference_tranges::range_const_reference_tranges::range_rvalue_reference_tranges::range_common_reference_t](/cpp/ranges/range_reference_t/)
