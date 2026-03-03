---
title: "deduction guides for std::experimental::unique_resource"
source_path: "cpp/experimental/unique_resource/deduction_guides"
header: "<experimental/scope>"
category: "experimental"
---

One [deduction guide](/cpp/language/ctad/) is provided for std::experimental::unique_resource to permit deduction from given resource handle and deleter.

## Declarations
```cpp
template< class R, class D >
unique_resource( R, D ) -> unique_resource<R, D>;
```
_(library fundamentals TS v3)_

## Example
This section is incompleteReason: no example
