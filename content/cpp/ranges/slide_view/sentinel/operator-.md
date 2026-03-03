---
title: "operator-(ranges::slide_view::sentinel)"
source_path: "cpp/ranges/slide_view/sentinel/operator"
category: "ranges"
since: "C++23"
---

Computes the distance between the underlying [iterator](/cpp/ranges/slide_view/iterator/) of x and the underlying [sentinel](/cpp/ranges/slide_view/sentinel/) of y.

## Declarations
```cpp
friend constexpr ranges::range_difference_t<V>
operator-( const /*iterator*/<false>& x, const /*sentinel*/& y )
requires std::sized_sentinel_for<ranges::sentinel_t<V>,
ranges::iterator_t<V>>;
```
_(since C++23)_

```cpp
friend constexpr ranges::range_difference_t<V>
operator-( const /*sentinel*/& y, const /*iterator*/<false>& x )
requires std::sized_sentinel_for<ranges::sentinel_t<V>,
ranges::iterator_t<V>>;
```
_(since C++23)_

## Parameters
- `x`: an iterator
- `y`: a sentinel

## Return value
The distance between the iterator and the sentinel.

## Example
This section is incompleteReason: no example
