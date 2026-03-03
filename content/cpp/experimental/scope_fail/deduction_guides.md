---
title: "deduction guides for std::experimental::scope_fail"
source_path: "cpp/experimental/scope_fail/deduction_guides"
header: "<experimental/scope>"
category: "experimental"
---

One [deduction guide](/cpp/language/ctad/) is provided for std::experimental::scope_fail to permit deduction from an argument of function or function object type.

## Declarations
```cpp
template< class EF >
scope_fail(EF) -> scope_fail<EF>;
```
_(library fundamentals TS v3)_

## Example
This section is incompleteReason: no example
