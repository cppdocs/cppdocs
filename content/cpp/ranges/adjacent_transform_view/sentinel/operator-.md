---
title: "operator-(ranges::adjacent_transform_view::sentinel)"
source_path: "cpp/ranges/adjacent_transform_view/sentinel/operator"
category: "ranges"
since: "C++23"
---

Computes the distance between the [iterator](/cpp/ranges/adjacent_transform_view/iterator/) x and the [sentinel](/cpp/ranges/adjacent_transform_view/sentinel/) y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sized_sentinel_for</*inner-sentinel*/<Const>,
/*inner-iterator*/<OtherConst>>
friend constexpr
ranges::range_difference_t</*maybe-const*/<OtherConst, InnerView>>
operator-( const /*iterator*/<OtherConst>& x, const /*sentinel*/& y );
```
_(since C++23)_

```cpp
template< bool OtherConst >
requires std::sized_sentinel_for</*inner-sentinel*/<Const>,
/*inner-iterator*/<OtherConst>>
friend constexpr
ranges::range_difference_t</*maybe-const*/<OtherConst, InnerView>>
operator-( const /*sentinel*/& y, const /*iterator*/<OtherConst>& x );
```
_(since C++23)_

## Parameters
- `x`: the iterator
- `y`: the sentinel

## Return value
The distance between iterator and sentinel.

## Example
This section is incompleteReason: no example
