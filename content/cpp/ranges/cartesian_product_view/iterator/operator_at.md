---
title: "std::ranges::cartesian_product_view<First, Vs...>::iterator<Const>::operator[]"
source_path: "cpp/ranges/cartesian_product_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location. Equivalent to: return *((*this) + n);.

## Declarations
```cpp
constexpr reference operator[]( difference_type n ) const
requires /*cartesian-product-is-random-access*/<Const, First, Vs...>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
This section is incompleteReason: no example

## See also
- [operator*](/cpp/ranges/cartesian_product_view/iterator/operator/)
