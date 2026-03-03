---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::mapping"
source_path: "cpp/container/mdspan/mapping"
category: "container"
since: "C++23"
---

Returns the layout mapping. Equivalent to return[map_](/cpp/container/mdspan/#Data_members);.

## Declarations
```cpp
constexpr const mapping_type& mapping() const noexcept;
```
_(since C++23)_

## Return value
A const reference to the underlying layout mapping object of [mapping_type](/cpp/container/mdspan/#Member_types).

## Example
This section is incompleteReason: no example
