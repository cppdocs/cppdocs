---
title: "std::ranges::zip_transform_view<F,Views...>::iterator<Const>::operator[]"
source_path: "cpp/ranges/zip_transform_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns the element at specified relative location, after transformation.

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type n ) const
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location.

## Return value
The element which is the result of transformation (mapping).

## Notes
The behavior is undefined if the parent_ pointer to parent ranges::zip_transform_view is null (e.g. if *this is default constructed).

## Example
This section is incompleteReason: no example
