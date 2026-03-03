---
title: "operator==(std::layout_stride::mapping)"
source_path: "cpp/container/mdspan/layout_stride/mapping/operator"
category: "container"
since: "C++23"
---

Compares two layout mappings of possibly different layout types based on their underlying extents and strides.

## Declarations
```cpp
template< class OtherMapping >
friend constexpr bool operator==( const mapping& lhs,
const OtherMapping& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: layout mappings whose extents and strides to compare

## Return value
true if lhs and rhs are both equal as specified above, false otherwise

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/container/mdspan/layout_left/mapping/operator/)
- [operator==](/cpp/container/mdspan/layout_right/mapping/operator/)
- [operator==](/cpp/container/mdspan/extents/operator/)
