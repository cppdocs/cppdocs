---
title: "std::ranges::transform_view<V,F>::iterator<Const>::operator*"
source_path: "cpp/ranges/transform_view/iterator/operator"
category: "ranges"
since: "C++20"
---

Returns the transformed element.

## Declarations
```cpp
constexpr decltype(auto) operator*() const;
```
_(since C++20)_

## Return value
The transformed element.

## Notes
operator-> is not provided.

The behavior is undefined if the pointer to parent transform_view is null (e.g. if *this is default constructed).

If *current_ is a prvalue, its lifetime ends before this function returns. If the transformation function returns a reference or pointer to it, the result would dangle.

## Example
This section is incompleteReason: no example
