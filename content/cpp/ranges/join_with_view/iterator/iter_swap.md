---
title: "iter_swap(ranges::join_with_view::iterator)"
source_path: "cpp/ranges/join_with_view/iterator/iter_swap"
category: "ranges"
since: "C++23"
---

Applies [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/) to the inner iterators as if by [std::visit](/cpp/utility/variant/visit/)([ranges::iter_swap](/cpp/iterator/ranges/iter_swap/), x.[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it) ﻿, y.[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it) ﻿);.

## Declarations
```cpp
friend constexpr void iter_swap( const /*iterator*/& x, const /*iterator*/& y )
requires std::indirectly_swappable<ranges::iterator_t</*InnerBase*/>,
ranges::iterator_t</*PatternBase*/>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to the elements to swap

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
