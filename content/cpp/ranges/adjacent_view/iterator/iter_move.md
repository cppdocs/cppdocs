---
title: "iter_move(ranges::adjacent_view::iterator)"
source_path: "cpp/ranges/adjacent_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Returns the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the underlying iterators.

## Declarations
```cpp
friend constexpr auto iter_move( const /*iterator*/& i )
noexcept(/* see description */);
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
The result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the underlying iterators.

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
