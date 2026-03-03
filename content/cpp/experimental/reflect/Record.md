---
title: "std::experimental::reflect::Record"
source_path: "cpp/experimental/reflect/Record"
header: "<experimental/reflect>"
category: "experimental"
---

The Record concept is satisfied if and only if T reflects a class type.

## Declarations
```cpp
template< class T >
concept Record = Type<T> && Scope<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
