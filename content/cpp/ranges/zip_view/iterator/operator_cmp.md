---
title: "operator==,<=>(ranges::zip_view::iterator)"
source_path: "cpp/ranges/zip_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires (std::equality_comparable<
ranges::iterator_t</*maybe-const*/<Const, Views>>> && ...);
```
_(since C++23)_

```cpp
friend constexpr auto operator<=>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
The result of comparison

## See also
- [operator==](/cpp/ranges/zip_view/sentinel/operator_cmp/)
- [zip_view::begin](/cpp/ranges/zip_view/begin/)
