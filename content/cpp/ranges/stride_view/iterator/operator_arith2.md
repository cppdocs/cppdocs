---
title: "operator+,-(ranges::stride_view::iterator)"
source_path: "cpp/ranges/stride_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the [iterator](/cpp/ranges/stride_view/iterator/iterator/).

## Declarations
```cpp
friend constexpr /*iterator*/
operator+( const /*iterator*/& i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/
operator+( difference_type n, const /*iterator*/& i )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/
operator-( const /*iterator*/& i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr difference_type
operator-( const /*iterator*/& x, const /*iterator*/& y )
requires std::sized_sentinel_for<ranges::iterator_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

```cpp
friend constexpr difference_type
operator-( std::default_sentinel_t, const /*iterator*/& x )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

```cpp
friend constexpr difference_type
operator-( const /*iterator*/& x, std::default_sentinel_t s )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `x, y, i`: the iterators
- `s`: a sentinel

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/stride_view/iterator/operator_arith/)
