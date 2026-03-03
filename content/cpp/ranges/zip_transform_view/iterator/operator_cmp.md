---
title: "operator==,<=>(ranges::zip_transform_view::iterator)"
source_path: "cpp/ranges/zip_transform_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators. Let [inner_](/cpp/ranges/zip_transform_view/iterator/#Data_members) denote the underlying iterator.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires std::equality_comparable</*ziperator*/<Const>>;
```
_(since C++23)_

```cpp
friend constexpr auto operator<=>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base> &&
std::three_way_comparable</*ziperator*/<Const>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
The result of comparison

## See also
- [operator==](/cpp/ranges/zip_transform_view/sentinel/operator_cmp/)
- [zip_transform_view::begin](/cpp/ranges/zip_transform_view/begin/)
