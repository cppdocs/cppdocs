---
title: "std::layout_right"
source_path: "cpp/container/mdspan/layout_right"
header: "<mdspan>"
category: "container"
since: "C++23"
---

layout_right is a [LayoutMappingPolicy](/cpp/named_req/layoutmappingpolicy/) which provides a layout mapping where the rightmost extent has stride 1, and strides increase right-to-left as the product of extents.

## Declarations
```cpp
struct layout_right;
```
_(since C++23)_

## See also
- [layout_right_padded](/cpp/container/mdspan/layout_right_padded/)
- [layout_left](/cpp/container/mdspan/layout_left/)
- [layout_stride](/cpp/container/mdspan/layout_stride/)
