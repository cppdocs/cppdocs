---
title: "std::ranges::transform_view<V,F>::iterator<Const>::operator[]"
source_path: "cpp/ranges/transform_view/iterator/operator_at"
category: "ranges"
since: "C++20"
---

Returns the element at specified relative location, after transformation.

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type n ) const
requires ranges::random_access_range<Base>;
```
_(since C++20)_

## Parameters
- `n`: position relative to current location.

## Return value
the transformed element

## Example
This section is incompleteReason: no example
