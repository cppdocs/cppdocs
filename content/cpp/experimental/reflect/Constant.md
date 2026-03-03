---
title: "std::experimental::reflect::Constant"
source_path: "cpp/experimental/reflect/Constant"
header: "<experimental/reflect>"
category: "experimental"
---

The Constant concept is satisfied if and only if T reflects a [constant expression](/cpp/language/constant_expression/).

## Declarations
```cpp
template< class T >
concept Constant = ScopeMember<T> && Typed<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
