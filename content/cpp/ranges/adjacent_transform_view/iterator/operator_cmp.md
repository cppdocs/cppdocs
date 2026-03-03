---
title: "operator==,<,>,<=,>=,<=>(ranges::adjacent_transform_view::iterator)"
source_path: "cpp/ranges/adjacent_transform_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators: [inner_](/cpp/ranges/adjacent_transform_view/iterator/#Data_members).

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
requires ranges::random_access_range<Base> and
std::three_way_comparable<ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
Result of comparison.

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/ranges/adjacent_transform_view/sentinel/operator_cmp/)
- [adjacent_transform_view::begin](/cpp/ranges/adjacent_transform_view/begin/)
