---
title: "std::experimental::reflect::Base"
source_path: "cpp/experimental/reflect/Base"
header: "<experimental/reflect>"
category: "experimental"
---

The Base concept is satisfied if and only if T reflects a direct base class, as returned by the template .

## Declarations
```cpp
template< class T >
concept Base = Object<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
