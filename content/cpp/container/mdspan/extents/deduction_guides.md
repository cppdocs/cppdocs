---
title: "deduction guides for std::extents"
source_path: "cpp/container/mdspan/extents/deduction_guides"
header: "<mdspan>"
category: "container"
since: "C++23"
---

A [deduction guide](/cpp/language/ctad/) is provided for std::extents to allow deduction from integral arguments.

## Declarations
```cpp
template< class... Integrals >
explicit extents( Integrals... ) -> /* see below */;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/container/mdspan/extents/extents/)
