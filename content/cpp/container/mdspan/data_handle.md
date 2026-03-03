---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::data_handle"
source_path: "cpp/container/mdspan/data_handle"
category: "container"
since: "C++23"
---

Returns the underlying data handle of [data_handle_type](/cpp/container/mdspan/#Member_types). Equivalent to return[ptr_](/cpp/container/mdspan/#Data_members);.

## Declarations
```cpp
constexpr const data_handle_type& data_handle() const noexcept;
```
_(since C++23)_

## Return value
A const reference to the underlying data handle.

## Example
This section is incompleteReason: no example
