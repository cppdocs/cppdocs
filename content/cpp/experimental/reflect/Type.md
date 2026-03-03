---
title: "std::experimental::reflect::Type"
source_path: "cpp/experimental/reflect/Type"
header: "<experimental/reflect>"
category: "experimental"
---

The Type concept is satisfied if and only if T reflects a type.

## Declarations
```cpp
template< class T >
concept Type = Named<T> && ScopeMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
