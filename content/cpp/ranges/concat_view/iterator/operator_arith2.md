---
title: "operator+,-(ranges::concat_view::iterator)"
source_path: "cpp/ranges/concat_view/iterator/operator"
category: "ranges"
since: "C++26"
---

Increments or decrements the [iterator](/cpp/ranges/concat_view/iterator/iterator/).

## Declarations
```cpp
friend constexpr /*iterator*/
operator+( const /*iterator*/& it, difference_type n )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr /*iterator*/
operator+( difference_type n, const /*iterator*/& it )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr /*iterator*/
operator-( const /*iterator*/& it, difference_type n )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr difference_type
operator-( const /*iterator*/& x, const /*iterator*/& y )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr difference_type
operator-( const /*iterator*/& x, std::default_sentinel_t )
requires /* see description */;
```
_(since C++26)_

```cpp
friend constexpr difference_type
operator-( std::default_sentinel_t, const /*iterator*/& x )
requires /* see description */;
```
_(since C++26)_

## Parameters
- `it, x, y`: the iterators
- `n`: a position relative to current location

## Return value
As described above.

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/concat_view/iterator/operator_arith/)
