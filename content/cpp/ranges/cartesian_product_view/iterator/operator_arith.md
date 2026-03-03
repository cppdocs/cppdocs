---
title: "std::ranges::cartesian_product_view<First, Vs...>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/cartesian_product_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the [iterator](/cpp/ranges/cartesian_product_view/iterator/iterator/).

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++23)_

```cpp
constexpr void operator++( int );
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator++( int )
requires ranges::forward_range</*maybe-const*/<Const, First>>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--()
requires /*cartesian-product-is-bidirectional*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--( int )
requires /*cartesian-product-is-bidirectional*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Example
This section is incompleteReason: no example

## See also
- [operator+operator-](/cpp/ranges/cartesian_product_view/iterator/operator_arith2/)
