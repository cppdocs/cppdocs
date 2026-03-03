---
title: "operator==(ranges::zip_view::iterator, ranges::zip_view::sentinel)"
source_path: "cpp/ranges/zip_view/sentinel/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying tuple of iterators of x with the underlying tuple of sentinels of y.

## Declarations
```cpp
template< bool OtherConst >
requires (std::sentinel_for<
ranges::sentinel_t</*maybe-const*/<Const, Views>>,
ranges::iterator_t</*maybe-const*/<OtherConst, Views>>> && ...)
friend constexpr bool operator==( const /*iterator*/<OtherConst>& x,
const /*sentinel*/& y );
```
_(since C++23)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
Let x.current_ denote the underlying tuple of iterators, and y.end_ denote the underlying tuple of sentinels.

## Example
This section is incompleteReason: no example
