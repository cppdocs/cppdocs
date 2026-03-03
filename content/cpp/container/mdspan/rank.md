---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::rank"
source_path: "cpp/container/mdspan/rank"
category: "container"
since: "C++23"
---

Returns the number of dimensions in a mdspan. Equivalent to return Extents::rank().

## Declarations
```cpp
static constexpr rank_type rank() noexcept;
```
_(since C++23)_

## Return value
The number of dimensions.

## Example
This section is incompleteReason: no example

## See also
- [rank](/cpp/container/mdspan/extents/rank/)
- [rank_dynamic](/cpp/container/mdspan/rank_dynamic/)
