---
title: "std::experimental::reflect::Lambda"
source_path: "cpp/experimental/reflect/Lambda"
header: "<experimental/reflect>"
category: "experimental"
---

The Lambda concept is satisfied if and only if T reflects a closure object (excluding generic lambdas).

## Declarations
```cpp
template< class T >
concept Lambda = Type<T> && Scope<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
