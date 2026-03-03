---
title: "iter_move(ranges::stride_view::iterator)"
source_path: "cpp/ranges/stride_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Returns the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the underlying iterator [current_](/cpp/ranges/stride_view/iterator/#Data_members).

## Declarations
```cpp
friend constexpr ranges::range_rvalue_reference_t<Base>
iter_move( const /*iterator*/& i ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
The result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the stored iterator.

## Example
This section is incompleteReason: no example

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
