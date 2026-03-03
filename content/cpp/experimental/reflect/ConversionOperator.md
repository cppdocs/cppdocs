---
title: "std::experimental::reflect::ConversionOperator"
source_path: "cpp/experimental/reflect/ConversionOperator"
header: "<experimental/reflect>"
category: "experimental"
---

The ConversionOperator concept is satisfied if and only if T reflects a conversion function.

## Declarations
```cpp
template< class T >
concept ConversionOperator = Operator<T> && MemberFunction<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
