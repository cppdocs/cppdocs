---
title: "std::ranges::range_reference_t, std::ranges::range_const_reference_t, std::ranges::range_rvalue_reference_t, std::ranges::range_common_reference_t"
source_path: "cpp/ranges/range_reference_t"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) Used to obtain the reference type of the iterator type of range type R.

## Declarations
```cpp
template< ranges::range R >
using range_reference_t = std::iter_reference_t<ranges::iterator_t<R>>;
```
_(since C++20)_

```cpp
template< ranges::range R >
using range_const_reference_t =
std::iter_const_reference_t<ranges::iterator_t<R>>;
```
_(since C++23)_

```cpp
template< ranges::range R >
using range_rvalue_reference_t =
std::iter_rvalue_reference_t<ranges::iterator_t<R>>;
```
_(since C++20)_

```cpp
template< ranges::range R >
using range_common_reference_t =
std::iter_common_reference_t<ranges::iterator_t<R>>;
```
_(since C++20)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3860 | C++20 | range_common_reference_t was missing | added |

## See also
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [ranges::iterator_tranges::const_iterator_tranges::sentinel_tranges::const_sentinel_t](/cpp/ranges/iterator_t/)
- [ranges::range_difference_tranges::range_size_tranges::range_value_t](/cpp/ranges/range_size_t/)
