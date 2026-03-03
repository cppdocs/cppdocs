---
title: "operator==,<,>,<=,>=,<=>(ranges::chunk_view::iterator)"
source_path: "cpp/ranges/chunk_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators (or the underlying iterator and the default sentinel (2)).

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y );
```
_(since C++23)_

```cpp
friend constexpr bool operator==( const /*iterator*/& x, std::default_sentinel_t );
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
- `x, y`: the iterators to compare

## Return value
The result of comparison.

## Example
This section is incompleteReason: no example
