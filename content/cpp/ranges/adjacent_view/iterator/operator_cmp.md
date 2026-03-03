---
title: "operator==,<,>,<=,>=,<=>(ranges::adjacent_view::iterator)"
source_path: "cpp/ranges/adjacent_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators. Let [current_](/cpp/ranges/adjacent_view/iterator/#Data_members) be an underlying array of iterators.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y );
```
_(since C++23)_

```cpp
friend constexpr bool operator<( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr bool operator>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr bool operator<=( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr bool operator>=( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr auto operator<=>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base> &&
std::three_way_comparable<ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
Result of comparison.

## See also
- [operator==](/cpp/ranges/adjacent_view/sentinel/operator_cmp/)
- [adjacent_view::begin](/cpp/ranges/adjacent_view/begin/)
