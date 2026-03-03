---
title: "iter_move(ranges::join_view::iterator)"
source_path: "cpp/ranges/join_view/iterator/iter_move"
category: "ranges"
since: "C++20"
---

Casts the result of dereferencing the underlying iterator i.[inner_](/cpp/ranges/join_view/iterator/#Data_members) to its associated rvalue reference type.

## Declarations
```cpp
friend constexpr decltype(auto) iter_move( const /*iterator*/& i )
noexcept( /*see below*/ );
```
_(since C++20)_

## Parameters
- `i`: iterator

## Return value
Equivalent to: [ranges::iter_move](/cpp/iterator/ranges/iter_move/)(i.inner_).

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
