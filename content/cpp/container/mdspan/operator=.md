---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::operator="
source_path: "cpp/container/mdspan/operator"
header: "<mdspan>"
category: "container"
since: "C++23"
---

Assigns rhs to *this with

## Declarations
```cpp
constexpr mdspan& operator=( const mdspan& rhs ) = default;
```
_(since C++23)_

```cpp
constexpr mdspan& operator=( mdspan&& rhs ) = default;
```
_(since C++23)_

## Parameters
- `other`: another mdspan to copy or move from

## Return value
*this

## Example
This section is incompleteReason: no example
