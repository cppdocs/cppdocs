---
title: "std::experimental::reflect::Callable"
source_path: "cpp/experimental/reflect/Callable"
header: "<experimental/reflect>"
category: "experimental"
---

The Callable concept is satisfied if and only if T reflects a function, including constructors and destructors.

## Declarations
```cpp
template< class T >
concept Callable = ScopeMember<T> && Scope<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
