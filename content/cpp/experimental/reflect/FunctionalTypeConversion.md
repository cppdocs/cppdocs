---
title: "std::experimental::reflect::FunctionalTypeConversion"
source_path: "cpp/experimental/reflect/FunctionalTypeConversion"
header: "<experimental/reflect>"
category: "experimental"
---

The FunctionalTypeConversion concept is satisfied if and only if T reflects a functional-type-conv-expression.

## Declarations
```cpp
template< class T >
concept FunctionalTypeConversion = Expression<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
