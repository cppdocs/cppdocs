---
title: "std::experimental::reflect::Scope"
source_path: "cpp/experimental/reflect/Scope"
header: "<experimental/reflect>"
category: "experimental"
---

The Scope concept is satisfied if and only if T reflects a namespace (including the global namespace), class, enumeration, function, or closure-type (Note: Any such T that does not reflect the global namespace also satisfies ScopeMember).

## Declarations
```cpp
template< class T >
concept Scope = Object<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
