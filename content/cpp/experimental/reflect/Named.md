---
title: "std::experimental::reflect::Named"
source_path: "cpp/experimental/reflect/Named"
header: "<experimental/reflect>"
category: "experimental"
---

The Named concept is satisfied if and only if T has an associated (possibly empty) name.

## Declarations
```cpp
template< class T >
concept Named = Object<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
