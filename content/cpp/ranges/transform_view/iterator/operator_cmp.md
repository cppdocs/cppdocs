---
title: "operator==,<,>,<=,>=,<=>(ranges::transform_view::iterator)"
source_path: "cpp/ranges/transform_view/iterator/operator_cmp"
category: "ranges"
since: "C++20"
---

Compares the underlying iterators.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires std::equality_comparable<ranges::iterator_t<Base>>;
```
_(since C++20)_

```cpp
friend constexpr bool operator<( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr bool operator>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr bool operator<=( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr bool operator>=( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr auto operator<=>( const /*iterator*/& x, const /*iterator*/& y )
requires ranges::random_access_range<Base> &&
std::three_way_comparable<ranges::iterator_t<Base>>;
```
_(since C++20)_

## Parameters
- `x, y`: iterators to compare

## Return value
result of comparison

## See also
- [operator==](/cpp/ranges/transform_view/sentinel/operator_cmp/)
- [transform_view::begin](/cpp/ranges/transform_view/begin/)
