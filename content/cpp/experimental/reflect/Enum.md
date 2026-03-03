---
title: "std::experimental::reflect::Enum"
source_path: "cpp/experimental/reflect/Enum"
header: "<experimental/reflect>"
category: "experimental"
---

The Enum concept is satisfied if and only if T reflects an enumeration type.

## Declarations
```cpp
template< class T >
concept Enum = Type<T> && Scope<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
