---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::extents"
source_path: "cpp/container/mdspan/extents_mfun"
category: "container"
since: "C++23"
---

Returns a const reference to the extents of the layout mapping [map_](/cpp/container/mdspan/#Data_members). Equivalent to return map_.extents();.

## Declarations
```cpp
constexpr const extents_type& extents() const noexcept;
```
_(since C++23)_

## Return value
A const reference to the extents.

## Example
This section is incompleteReason: no example
