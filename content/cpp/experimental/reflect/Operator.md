---
title: "std::experimental::reflect::Operator"
source_path: "cpp/experimental/reflect/Operator"
header: "<experimental/reflect>"
category: "experimental"
---

The Operator concept is satisfied if and only if T reflects an operator function or a conversion function (Note: Some types that satisfy Operator also satisfy MemberFunction or SpecialMemberFunction).

## Declarations
```cpp
template< class T >
concept Operator = Function<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
