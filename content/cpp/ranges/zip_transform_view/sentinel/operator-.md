---
title: "operator-(ranges::zip_transform_view::sentinel)"
source_path: "cpp/ranges/zip_transform_view/sentinel/operator"
category: "ranges"
since: "C++23"
---

Computes the distance between the underlying iterator of x and the underlying sentinel of y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sized_sentinel_for</*zentinel*/<Const>, /*ziperator*/<OtherConst>>
friend constexpr ranges::range_difference_t</*maybe-const*/<OtherConst, /*InnerView*/>>
operator-( const /*iterator*/<OtherConst>& x, const /*sentinel*/& y );
```
_(since C++23)_

```cpp
template< bool OtherConst >
requires std::sized_sentinel_for</*zentinel*/<Const>, /*ziperator*/<OtherConst>>
friend constexpr ranges::range_difference_t</*maybe-const*/<OtherConst, /*InnerView*/>>
operator-( const /*sentinel*/& y, const /*iterator*/<OtherConst>& x );
```
_(since C++23)_

## Parameters
- `x`: an iterator
- `y`: a sentinel

## Return value
Let inner_ denote the underlying iterator or sentinel respectively.
