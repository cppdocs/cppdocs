---
title: "operator==(std::extents)"
source_path: "cpp/container/mdspan/extents/operator"
category: "container"
since: "C++23"
---

Compares two extents. Returns true if lhs.rank() equals rhs.rank() and lhs.extent(r) equals rhs.extent(r) for every rank index r of rhs; otherwise returns false.

## Declarations
```cpp
template< class OtherIndexType, std::size_t... OtherExtents >
friend constexpr bool operator==(
const extents& lhs, const extents<OtherIndexType, OtherExtents...>& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: extents whose values to compare

## Return value
true if the extents represented by lhs and rhs are equal, false otherwise

## Example
This section is incompleteReason: no example
