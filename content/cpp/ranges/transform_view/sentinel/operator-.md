---
title: "operator-(ranges::transform_view::sentinel)"
source_path: "cpp/ranges/transform_view/sentinel/operator"
category: "ranges"
since: "C++20"
---

Computes the distance between the underlying iterator of x and the underlying sentinel of y.

## Declarations
```cpp
friend constexpr ranges::range_difference_t<Base>
operator-( const /*iterator*/<Const>& x, const /*sentinel*/& y )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++20)_

```cpp
friend constexpr ranges::range_difference_t<Base>
operator-( const /*sentinel*/& y, const /*iterator*/<Const>& x )
requires std::sized_sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++20)_

## Parameters
- `x`: an iterator
- `y`: a sentinel

## Return value
Let current_ denote the underlying iterator, end_ denote the underlying sentinel.
