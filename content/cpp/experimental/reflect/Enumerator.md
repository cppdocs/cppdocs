---
title: "std::experimental::reflect::Enumerator"
source_path: "cpp/experimental/reflect/Enumerator"
header: "<experimental/reflect>"
category: "experimental"
---

The Enumerator concept is satisfied if and only if T reflects an enumerator (Note: The Scope of an Enumerator is its type also for enumerations that are unscoped enumeration types).

## Declarations
```cpp
template< class T >
concept Enumerator = Typed<T> && ScopeMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
