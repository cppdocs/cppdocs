---
title: "std::experimental::reflect::Class"
source_path: "cpp/experimental/reflect/Class"
header: "<experimental/reflect>"
category: "experimental"
---

The Class concept is satisfied if and only if T reflects a non-union class type.

## Declarations
```cpp
template< class T >
concept Class = Record<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
