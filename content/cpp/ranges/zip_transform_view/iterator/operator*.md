---
title: "std::ranges::zip_transform_view<F,Views...>::iterator<Const>::operator*"
source_path: "cpp/ranges/zip_transform_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Returns the transformed element obtained by application of the invocable object of type F to the underlying poined-to elements.

## Declarations
```cpp
constexpr decltype(auto) operator*() const
noexcept(/* see description */);
```
_(since C++23)_

## Return value
The element which is the result of transformation (mapping).

## Notes
operator-> is not provided.

The behavior is undefined if the parent_ pointer to parent ranges::zip_transform_view is null (e.g. if *this is default constructed).

## Example
This section is incompleteReason: no example
