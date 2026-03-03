---
title: "iter_swap(ranges::join_view::iterator)"
source_path: "cpp/ranges/join_view/iterator/iter_swap"
category: "ranges"
since: "C++20"
---

Swaps the objects pointed to by two underlying iterators (denoted as [inner_](/cpp/ranges/join_view/iterator/#Data_members)).

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
noexcept( /*see below*/ )
requires std::indirectly_swappable<InnerIter>;
```
_(since C++20)_

## Parameters
- `x, y`: iterators

## Return value
(none)

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
