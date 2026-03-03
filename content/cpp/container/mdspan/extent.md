---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::extent"
source_path: "cpp/container/mdspan/extent"
category: "container"
since: "C++23"
---

Returns the extent of a mdspan at the rank index r. Equivalent to return extents().extent(r);.

## Declarations
```cpp
constexpr index_type extent( rank_type r ) const noexcept;
```
_(since C++23)_

## Parameters
- `r`: The rank index to get the extent size of

## Return value
The extent at the given rank index.

## Example
This section is incompleteReason: no example

## See also
- [extent](/cpp/container/mdspan/extents/extent/)
- [static_extent](/cpp/container/mdspan/static_extent/)
