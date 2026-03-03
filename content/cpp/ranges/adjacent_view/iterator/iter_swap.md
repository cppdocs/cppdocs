---
title: "iter_swap(ranges::adjacent_view::iterator)"
source_path: "cpp/ranges/adjacent_view/iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Swaps the objects pointed to by two underlying arrays of iterators (denoted as [current_](/cpp/ranges/adjacent_view/iterator/#Data_members)).

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
noexcept( /*see below*/ )
requires std::indirectly_swappable<ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators

## Return value
(none)

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
