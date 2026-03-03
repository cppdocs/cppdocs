---
title: "operator==,<,>,<=,>=,<=>(ranges::concat_view::iterator)"
source_path: "cpp/ranges/concat_view/iterator/operator_cmp"
category: "ranges"
since: "C++26"
---

Compares the iterator with another iterator or a sentinel.

## Declarations
```cpp
friend constexpr bool operator==
( const /*iterator*/& x, std::default_sentinel_t );
```
_(since C++26)_

```cpp
friend constexpr bool operator==
( const /*iterator*/& x, const /*iterator*/& y )
requires (std::equality_comparable<ranges::iterator_t<
std::conditional_t<Const, const Views, Views>>> && ...);
```
_(since C++26)_

```cpp
friend constexpr bool operator<
( const /*iterator*/& x, const /*iterator*/& y )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr bool operator>
( const /*iterator*/& x, const /*iterator*/& y )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr bool operator<=
( const /*iterator*/& x, const /*iterator*/& y )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr bool operator>=
( const /*iterator*/& x, const /*iterator*/& y )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
friend constexpr auto operator<=>
( const /*iterator*/& x, const /*iterator*/& y )
requires (/*all-random-access*/<Const, Views...> &&
(std::three_way_comparable<ranges::iterator_t<
std::conditional_t<Const, const Views, Views>>> && ...));
```
_(since C++26)_

## Parameters
- `x, y`: iterators to compare

## Return value
x.[it_](/cpp/ranges/concat_view/iterator/#it) ﻿.index() == (sizeof...(Views) - 1) &&
x.[get-iter](/cpp/ranges/concat_view/iterator/helpers/#get-iter) ﻿<sizeof...(Views) - 1>() == x.[get-end](/cpp/ranges/concat_view/iterator/helpers/#get-end) ﻿<sizeof...(Views) - 1>()

## Example
This section is incompleteReason: no example
