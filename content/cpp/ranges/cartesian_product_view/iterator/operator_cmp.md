---
title: "operator==,<=>(ranges::cartesian_product_view::iterator)"
source_path: "cpp/ranges/cartesian_product_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares two [iterators](/cpp/ranges/cartesian_product_view/iterator/) or an iterator and a sentinel.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires std::equality_comparable<ranges::iterator_t</*maybe-const*/<Const, First>>>;
```
_(since C++23)_

```cpp
friend constexpr bool operator==( const /*iterator*/& x, std::default_sentinel_t );
```
_(since C++23)_

```cpp
friend constexpr auto operator<=>( const /*iterator*/& x, const /*iterator*/& y )
requires /*all-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators or sentinels to compare

## Return value
The result of comparison.

## Example
This section is incompleteReason: no example

## See also
- [cartesian_product_view::begin](/cpp/ranges/cartesian_product_view/begin/)
