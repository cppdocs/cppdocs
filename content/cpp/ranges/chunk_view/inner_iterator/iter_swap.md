---
title: "iter_swap(ranges::chunk_view::inner-iterator)"
source_path: "cpp/ranges/chunk_view/inner_iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Applies [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/) to the underlying cached iterators.

## Declarations
```cpp
friend constexpr void iter_swap( const /*inner-iterator*/& x,
const /*inner-iterator*/& y )
noexcept(noexcept(ranges::iter_swap(*x.parent_->current_,
*y.parent_->current_)))
requires std::indirectly_swappable<ranges::iterator_t<V>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to the elements to swap

## Return value
(none)

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
