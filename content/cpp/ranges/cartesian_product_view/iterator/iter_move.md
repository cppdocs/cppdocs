---
title: "iter_move(ranges::cartesian_product_view::iterator)"
source_path: "cpp/ranges/cartesian_product_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Let [current_](/cpp/ranges/cartesian_product_view/iterator/#Data_members) be the underlying tuple of iterators.

## Declarations
```cpp
friend constexpr auto iter_move( const /*iterator*/& i ) noexcept(/* see below */)
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
A tuple that contains the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the stored underlying iterators converted to the return type, as described above.

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
