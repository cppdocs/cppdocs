---
title: "operator==(std::layout_right::mapping)"
source_path: "cpp/container/mdspan/layout_right/mapping/operator"
category: "container"
since: "C++23"
---

Compares two layout mappings of the same layout type based on their underlying extents.

## Declarations
```cpp
template< class OtherExtents >
friend constexpr bool operator==( const mapping& lhs,
const mapping<OtherExtents>& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: layout mappings whose extents to compare

## Return value
true if lhs.extents() == rhs.extents() is true, false otherwise

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/container/mdspan/layout_left/mapping/operator/)
- [operator==](/cpp/container/mdspan/layout_stride/mapping/operator/)
- [operator==](/cpp/container/mdspan/extents/operator/)
