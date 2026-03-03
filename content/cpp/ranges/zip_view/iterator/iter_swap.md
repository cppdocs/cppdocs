---
title: "iter_swap(ranges::zip_view::iterator)"
source_path: "cpp/ranges/zip_view/iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Performs [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/)(std::get<i>(x.current_), std::get<i>(y.current_)) for every integer i in [0,sizeof...(Views)), where current_ denotes the underlying tuple-like object that holds iterators to elements of adapted views.

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
noexcept(/* see below */)
requires (std::indirectly_swappable<ranges::iterator_t<
/*maybe-const*/<Const, Views>>> && ...);
```
_(since C++23)_

## Parameters
- `x, y`: iterators to the elements to swap

## Return value
(none)
