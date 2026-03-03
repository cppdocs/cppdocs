---
title: "operator+,-(ranges::adjacent_view::iterator)"
source_path: "cpp/ranges/adjacent_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Let [current_](/cpp/ranges/adjacent_view/iterator/#Data_members) be the underlying array of iterators, and [Base](/cpp/ranges/adjacent_view/iterator/#Member_types) be the type (possibly const-qualified) of underlying view.

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( const /*iterator*/& i,
difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type n,
const /*iterator*/& i )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator-( const /*iterator*/& i,
difference_type n )
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

## Parameters
- `i, j`: the iterators
- `n`: position relative to current location

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/adjacent_view/iterator/operator_arith/)
