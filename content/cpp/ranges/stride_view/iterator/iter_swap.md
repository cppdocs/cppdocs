---
title: "iter_swap(ranges::stride_view::iterator)"
source_path: "cpp/ranges/stride_view/iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Swaps the objects pointed to by two underlying iterators (each denoted as [current_](/cpp/ranges/stride_view/iterator/#Data_members)).

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

## Example
This section is incompleteReason: no example

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
