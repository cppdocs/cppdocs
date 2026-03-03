---
title: "std::ranges::range_size_t, std::ranges::range_difference_t, std::ranges::range_value_t"
source_path: "cpp/ranges/range_size_t"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) Used to obtain the size type of the [sized_range](/cpp/ranges/sized_range/) type R.

## Declarations
```cpp
template< ranges::sized_range R >
using range_size_t = decltype(ranges::size(std::declval<R&>()));
```
_(since C++20)_

```cpp
template< ranges::range R >
using range_difference_t = std::iter_difference_t<ranges::iterator_t<R>>;
```
_(since C++20)_

```cpp
template< ranges::range R >
using range_value_t = std::iter_value_t<ranges::iterator_t<R>>;
```
_(since C++20)_

## See also
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [ranges::iterator_tranges::const_iterator_tranges::sentinel_tranges::const_sentinel_t](/cpp/ranges/iterator_t/)
- [ranges::range_reference_tranges::range_const_reference_tranges::range_rvalue_reference_tranges::range_common_reference_t](/cpp/ranges/range_reference_t/)
