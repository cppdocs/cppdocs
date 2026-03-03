---
title: "std::experimental::reflect::Destructor"
source_path: "cpp/experimental/reflect/Destructor"
header: "<experimental/reflect>"
category: "experimental"
---

The Destructor concept is satisfied if and only if T reflects a destructor.

## Declarations
```cpp
template< class T >
concept Destructor = Callable<T> && SpecialMemberFunction<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
