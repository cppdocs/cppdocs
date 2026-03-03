---
title: "std::layout_left::mapping<Extents>::stride"
source_path: "cpp/container/mdspan/layout_left/mapping/stride"
category: "container"
since: "C++23"
---

Returns the stride of the mapping at a rank index i. Equivalent to return extents().fwd-prod-of-extents(i);.

## Declarations
```cpp
constexpr index_type stride(rank_type i) const noexcept;
```
_(since C++23)_

## Parameters
- `i`: a rank index in the range [0, extents_type::rank())

## Return value
The stride at a specified rank index.

## Example
This section is incompleteReason: no example

## See also
- [stride](/cpp/container/mdspan/layout_stride/mapping/stride/)
- [stride](/cpp/container/mdspan/stride/)
