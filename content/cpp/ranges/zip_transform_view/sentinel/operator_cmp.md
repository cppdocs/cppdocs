---
title: "operator==(ranges::zip_transform_view::sentinel)"
source_path: "cpp/ranges/zip_transform_view/sentinel/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterator of x with the underlying sentinel of y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sentinel_for</*zentinel*/<Const>, /*ziperator*/<OtherConst>>
friend constexpr bool operator==( const /*iterator*/<OtherConst>& x,
const /*sentinel*/& y );
```
_(since C++23)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
x.inner_ == y.inner_, where inner_ denotes the underlying iterator or sentinel respectively.

## Example
This section is incompleteReason: no example
