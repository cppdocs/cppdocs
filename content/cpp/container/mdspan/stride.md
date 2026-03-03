---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::stride"
source_path: "cpp/container/mdspan/stride"
category: "container"
since: "C++23"
---

Returns the stride of the layout mapping [map_](/cpp/container/mdspan/#Data_members) in rth dimension. Equivalent to return map_.stride(r);.

## Declarations
```cpp
constexpr index_type stride( rank_type r ) const;
```
_(since C++23)_

## Parameters
- `r`: the index of the dimension

## Return value
The stride.

## Example
This section is incompleteReason: no example
