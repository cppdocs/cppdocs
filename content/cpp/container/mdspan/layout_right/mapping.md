---
title: "std::layout_right::mapping"
source_path: "cpp/container/mdspan/layout_right/mapping"
header: "<mdspan>"
category: "container"
since: "C++23"
---

The class template layout_right::mapping controls how multidimensional indices are mapped in a row-major manner to a one-dimensional value representing the offset. The mapping has stride 1 at rightmost extent and strides increase right-to-left as the products of extents.

## Declarations
```cpp
template< class Extents >
class layout_right::mapping;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [mapping](/cpp/container/mdspan/layout_left/mapping/)
- [mapping](/cpp/container/mdspan/layout_stride/mapping/)
