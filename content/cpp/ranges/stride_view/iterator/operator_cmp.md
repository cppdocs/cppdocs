---
title: "operator==,<,>,<=,>=,<=>(ranges::stride_view::iterator)"
source_path: "cpp/ranges/stride_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators/sentinels.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, std::default_sentinel_t );
```
_(since C++23)_

```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires std::equality_comparable<ranges::iterator_t<Base>>;
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
result of comparison

## Example
This section is incompleteReason: no example
