---
title: "operator+,-(ranges::chunk_view::iterator)"
source_path: "cpp/ranges/chunk_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Performs [iterator](/cpp/ranges/chunk_view/iterator/) arithmetic or calculates the distance.

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( const /*iterator*/& i,
difference_type pos )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type pos,
const /*iterator*/& i )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator-( const /*iterator*/& i,
difference_type pos )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
const /*iterator*/& j )
requires std::sized_sentinel_for<ranges::iterator_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( std::default_sentinel_t,
const /*iterator*/& i )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
std::default_sentinel_t )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `i, j`: the iterators
- `pos`: the position relative to current location

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/chunk_view/iterator/operator_arith/)
