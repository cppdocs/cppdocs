---
title: "operator==,<,>,<=,>=,<=>(ranges::slide_view::iterator)"
source_path: "cpp/ranges/slide_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators.

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
The result of comparison.

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/ranges/slide_view/sentinel/operator_cmp/)
- [slide_view::begin](/cpp/ranges/slide_view/begin/)
