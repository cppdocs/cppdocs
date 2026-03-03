---
title: "operator-(ranges::enumerate_view::sentinel)"
source_path: "cpp/ranges/enumerate_view/sentinel/operator"
category: "ranges"
since: "C++23"
---

Computes the distance between the underlying [iterator](/cpp/ranges/enumerate_view/iterator/) of x and the underlying [sentinel](/cpp/ranges/enumerate_view/sentinel/) of y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sized_sentinel_for<
ranges::sentinel_t<Base>,
ranges::iterator_t</*maybe-const*/<OtherConst, V>>>
friend constexpr ranges::range_difference_t</*maybe-const*/<OtherConst, V>>
operator-( const /*iterator*/<OtherConst>& x, const /*sentinel*/& y );
```
_(since C++23)_

```cpp
template< bool OtherConst >
requires std::sized_sentinel_for<
ranges::sentinel_t<Base>,
ranges::iterator_t</*maybe-const*/<OtherConst, V>>>
friend constexpr ranges::range_difference_t</*maybe-const*/<OtherConst, V>>
operator-( const /*sentinel*/& y, const /*iterator*/<OtherConst>& x );
```
_(since C++23)_

## Parameters
- `x`: an iterator
- `y`: a sentinel

## Example
This section is incompleteReason: no example
