---
title: "std::experimental::reflect::Typed"
source_path: "cpp/experimental/reflect/Typed"
header: "<experimental/reflect>"
category: "experimental"
---

The Typed concept is satisfied if and only if T reflects an entity with a type.

## Declarations
```cpp
template< class T >
concept Typed = Named<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
