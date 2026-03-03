---
title: "std::layout_left::mapping"
source_path: "cpp/container/mdspan/layout_left/mapping"
header: "<mdspan>"
category: "container"
since: "C++23"
---

The class template layout_left::mapping controls how multidimensional indices are mapped in a column-major manner to a one-dimensional value representing the offset. The mapping has stride 1 at leftmost extent and strides increase left-to-right as the products of extents.

## Declarations
```cpp
template< class Extents >
class layout_left::mapping;
```
_(since C++23)_

## See also
- [mapping](/cpp/container/mdspan/layout_right/mapping/)
- [mapping](/cpp/container/mdspan/layout_stride/mapping/)
