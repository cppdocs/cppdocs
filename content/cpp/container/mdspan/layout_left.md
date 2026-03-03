---
title: "std::layout_left"
source_path: "cpp/container/mdspan/layout_left"
header: "<mdspan>"
category: "container"
since: "C++23"
---

layout_left is a [LayoutMappingPolicy](/cpp/named_req/layoutmappingpolicy/) which provides a layout mapping where the leftmost extent has stride 1, and strides increase left-to-right as the product of extents.

## Declarations
```cpp
struct layout_left;
```
_(since C++23)_

## See also
- [layout_left_padded](/cpp/container/mdspan/layout_left_padded/)
- [layout_right](/cpp/container/mdspan/layout_right/)
- [layout_stride](/cpp/container/mdspan/layout_stride/)
