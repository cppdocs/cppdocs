---
title: "operator==,<=>(ranges::enumerate_view::iterator)"
source_path: "cpp/ranges/enumerate_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying [iterators](/cpp/ranges/enumerate_view/iterator/). Let [pos_](/cpp/ranges/enumerate_view/iterator/#Data_members) be the underlying index.

## Declarations
```cpp
friend constexpr bool
operator==( const /*iterator*/& x, const /*iterator*/& y ) noexcept;
```
_(since C++23)_

```cpp
friend constexpr std::strong_ordering
operator<=>( const /*iterator*/& x, const /*iterator*/& y ) noexcept;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
Result of comparison.

## See also
- [operator==](/cpp/ranges/enumerate_view/sentinel/operator_cmp/)
- [enumerate_view::begin](/cpp/ranges/enumerate_view/begin/)
