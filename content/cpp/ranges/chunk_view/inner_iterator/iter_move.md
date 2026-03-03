---
title: "iter_move(ranges::chunk_view::inner-iterator)"
source_path: "cpp/ranges/chunk_view/inner_iterator/iter_move"
category: "ranges"
since: "C++23"
---

Returns the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the stored inner iterator.

## Declarations
```cpp
friend constexpr auto iter_move( const /*inner-iterator*/& i ) noexcept(/* see below */)
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
The result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the stored iterator of type [ranges::iterator_t](/cpp/ranges/iterator_t/)<V>.

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
