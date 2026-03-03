---
title: "iter_move(ranges::enumerate_view::iterator)"
source_path: "cpp/ranges/enumerate_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Let [current_](/cpp/ranges/enumerate_view/iterator/#Data_members) be the underlying iterator, [pos_](/cpp/ranges/enumerate_view/iterator/#Data_members) be the underlying index, and [Base](/cpp/ranges/enumerate_view/iterator/#Member_types) be the (possibly cv-qualified) type of the underlying sequence.

## Declarations
```cpp
friend constexpr auto iter_move( const /*iterator*/& i ) noexcept(/* see below */)
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
A tuple that contains an index and the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the stored iterator.

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
