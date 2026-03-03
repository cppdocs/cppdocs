---
title: "operator+,-(ranges::cartesian_product_view::iterator)"
source_path: "cpp/ranges/cartesian_product_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Performs [iterator](/cpp/ranges/cartesian_product_view/iterator/) arithmetic or calculates the distance.

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( const /*iterator*/& i,
difference_type n )
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type n,
const /*iterator*/& i )
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator-( const /*iterator*/& i,
difference_type n )
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
const /*iterator*/& j )
requires
/*cartesian-is-sized-sentinel*/<Const, iterator_t, First, Vs...>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
std::default_sentinel_t )
requires
/*cartesian-is-sized-sentinel*/<Const, ranges::sentinel_t, First, Vs...>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( std::default_sentinel_t s,
const /*iterator*/& i )
requires
/*cartesian-is-sized-sentinel*/<Const, ranges::sentinel_t, First, Vs...>;
```
_(since C++23)_

## Parameters
- `i, j`: the iterators
- `n`: the position relative to current location
- `s`: the sentinel

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/cartesian_product_view/iterator/operator_arith/)
