---
title: "std::ranges::zip_view<Views...>::iterator<Const>::operator*"
source_path: "cpp/ranges/zip_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Returns a [std::tuple](/cpp/utility/tuple/) that consists of underlying pointed-to elements.

## Declarations
```cpp
constexpr auto operator*() const;
```
_(since C++23)_

## Return value
The current tuple-like element.

## Notes
operator-> is not provided.

## Example
This section is incompleteReason: no example
