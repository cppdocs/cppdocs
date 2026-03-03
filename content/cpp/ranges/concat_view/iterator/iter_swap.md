---
title: "iter_swap(ranges::concat_view::iterator)"
source_path: "cpp/ranges/concat_view/iterator/iter_swap"
category: "ranges"
since: "C++26"
---

Swaps the objects pointed to by the underlying iterators of x and y. Equivalent to [std::visit](/cpp/utility/variant/visit/)
(
[&](const auto& it1, const auto& it2)
{
if constexpr ([std::is_same_v](/cpp/types/is_same/)<decltype(it1), decltype(it2)>)
[ranges::iter_swap](/cpp/iterator/ranges/iter_swap/)(it1, it2);
else
[ranges::swap](http://en.cppreference.com/w/cpp/ranges-utility-placeholder/swap)(*x, *y);
},
x.[it_](/cpp/ranges/concat_view/iterator/#it) ﻿,
y.[it_](/cpp/ranges/concat_view/iterator/#it)
);

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
noexcept( /* see description */ ) requires ( /* see description */ );
```
_(since C++26)_

## Parameters
- `x, y`: iterators

## Example
This section is incompleteReason: no example

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
