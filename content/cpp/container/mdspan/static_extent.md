---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::static_extent"
source_path: "cpp/container/mdspan/static_extent"
category: "container"
since: "C++23"
---

Statically determines the extent of a mdspan at the rank index r. If the rank index r corresponds to a dynamic extent, returns std::dynamic_extent. Equivalent to return Extents::static_extent(r);.

## Declarations
```cpp
static constexpr std::size_t static_extent( rank_type r ) noexcept;
```
_(since C++23)_

## Parameters
- `r`: The rank index to get the static extent size of

## Return value
The static extent size, or std::dynamic_extent.

## Example
This section is incompleteReason: no example

## See also
- [static_extent](/cpp/container/mdspan/extents/static_extent/)
- [extent](/cpp/container/mdspan/extent/)
