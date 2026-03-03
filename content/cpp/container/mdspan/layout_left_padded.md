---
title: "std::layout_left_padded"
source_path: "cpp/container/mdspan/layout_left_padded"
header: "<mdspan>"
category: "container"
since: "C++26"
---

Every specialization of layout_left_padded is a [LayoutMappingPolicy](/cpp/named_req/layoutmappingpolicy/) which provides a layout mapping that is similar to [layout_left::mapping](/cpp/container/mdspan/layout_left/mapping/) except that it has a padding stride.

## Declarations
```cpp
template< std::size_t PaddingValue = std::dynamic_extent >
struct layout_left_padded;
```
_(since C++26)_

## Example
This section is incompleteReason: no example

## See also
- [layout_left](/cpp/container/mdspan/layout_left/)
- [layout_stride](/cpp/container/mdspan/layout_stride/)
