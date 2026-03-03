---
title: "operator==,<,>,<=,>=,<=>(ranges::elements_view::iterator)"
source_path: "cpp/ranges/elements_view/iterator/operator_cmp"
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
Result of comparison.

## See also
- [operator==](/cpp/ranges/elements_view/sentinel/operator_cmp/)
- [elements_view::begin](/cpp/ranges/elements_view/begin/)
