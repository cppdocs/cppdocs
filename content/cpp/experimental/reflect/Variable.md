---
title: "std::experimental::reflect::Variable"
source_path: "cpp/experimental/reflect/Variable"
header: "<experimental/reflect>"
category: "experimental"
---

The Variable concept is satisfied if and only if T reflects a variable or data member.

## Declarations
```cpp
template< class T >
concept Variable = Typed<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
