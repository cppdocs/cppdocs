---
title: "std::experimental::reflect::Namespace"
source_path: "cpp/experimental/reflect/Namespace"
header: "<experimental/reflect>"
category: "experimental"
---

The Namespace concept is satisfied if and only if T reflects a namespace including the global namespace (Note: Any such T that does not reflect the global namespace also satisfies ScopeMember).

## Declarations
```cpp
template< class T >
concept Namespace = Scope<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
