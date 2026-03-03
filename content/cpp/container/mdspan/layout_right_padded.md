---
title: "std::layout_right_padded"
source_path: "cpp/container/mdspan/layout_right_padded"
header: "<mdspan>"
category: "container"
since: "C++26"
---

Every specialization of layout_right_padded is a [LayoutMappingPolicy](/cpp/named_req/layoutmappingpolicy/) which provides a layout mapping that is similar to [layout_right::mapping](/cpp/container/mdspan/layout_right/mapping/) except that it has a padding stride.

## Declarations
```cpp
template< std::size_t PaddingValue = std::dynamic_extent >
struct layout_right_padded;
```
_(since C++26)_

## Example
This section is incompleteReason: no example

## See also
- [layout_right](/cpp/container/mdspan/layout_right/)
- [layout_stride](/cpp/container/mdspan/layout_stride/)
