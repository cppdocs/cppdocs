---
title: "operator+,-(ranges::zip_view::iterator)"
source_path: "cpp/ranges/zip_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Let current_ denote the underlying tuple-like object of iterators to elements of adapted views.

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( const /*iterator*/& i, difference_type n )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type n, const /*iterator*/& i )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator-( const /*iterator*/& i, difference_type n )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
const /*iterator*/& j )
requires (std::sized_sentinel_for<
ranges::iterator_t</*maybe-const*/<Const, Views>>,
ranges::iterator_t</*maybe-const*/<Const, Views>>>
and ...);
```
_(since C++23)_

## Parameters
- `i, j`: the iterators.
- `n`: position relative to current location.

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/zip_view/iterator/operator_arith/)
