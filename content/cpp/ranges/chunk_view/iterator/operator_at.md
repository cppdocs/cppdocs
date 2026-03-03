---
title: "std::ranges::chunk_view<V>::iterator<Const>::operator[]"
source_path: "cpp/ranges/chunk_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location.

## Declarations
```cpp
constexpr value_type operator[]( difference_type pos ) const
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `pos`: position relative to current location

## Return value
The element (of type [value_type](/cpp/ranges/chunk_view/iterator/#Member_types)) at displacement pos relative to the current location.

## Example
This section is incompleteReason: no example

## See also
- [operator*](/cpp/ranges/chunk_view/iterator/operator/)
