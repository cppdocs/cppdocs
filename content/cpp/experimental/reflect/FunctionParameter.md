---
title: "std::experimental::reflect::FunctionParameter"
source_path: "cpp/experimental/reflect/FunctionParameter"
header: "<experimental/reflect>"
category: "experimental"
---

The FunctionParameter concept is satisfied if and only if T reflects a function parameter (Note: A FunctionParameter does not satisfy Variable, and thus does not offer an interface for getting the pointer to a parameter).

## Declarations
```cpp
template< class T >
concept FunctionParameter = Typed<T> && ScopeMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
