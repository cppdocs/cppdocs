---
title: "std::ranges::adjacent_transform_view<V,F,N>::iterator<Const>::operator[]"
source_path: "cpp/ranges/adjacent_transform_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location.

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type n ) const
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
This section is incompleteReason: no example

## See also
- [operator*](/cpp/ranges/adjacent_transform_view/iterator/operator/)
