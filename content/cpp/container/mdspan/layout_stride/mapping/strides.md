---
title: "std::layout_stride::mapping<Extents>::strides"
source_path: "cpp/container/mdspan/layout_stride/mapping/strides"
category: "container"
since: "C++23"
---

Returns an array of strides of the mapping. Equivalent to return strides_;.

## Declarations
```cpp
constexpr std::array<index_type, rank_> strides() const noexcept;
```
_(since C++23)_

## Return value
Array of strides

## Example
This section is incompleteReason: no example

## See also
- [stride](/cpp/container/mdspan/layout_stride/mapping/stride/)
- [stride](/cpp/container/mdspan/stride/)
