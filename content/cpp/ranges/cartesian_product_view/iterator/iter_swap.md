---
title: "iter_swap(ranges::cartesian_product_view::iterator)"
source_path: "cpp/ranges/cartesian_product_view/iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Applies [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/) to the stored underlying iterators. Formally, for every integer 0 ≤ i ≤ sizeof...(Vs), performs [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/)(std::get<i>(x.current_), std::get<i>(y.current_)), where [current_](/cpp/ranges/cartesian_product_view/iterator/#Data_members) is the underlying tuple of iterators.

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
noexcept (/* see description */)
requires (std::indirectly_swappable<
ranges::iterator_t</*maybe-const*/<Const, First>>> and ... and
std::indirectly_swappable<ranges::iterator_t</*maybe-const*/<Const, Vs>>>);
```
_(since C++23)_

## Parameters
- `x, y`: iterators to the elements to swap

## Return value
(none)

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
