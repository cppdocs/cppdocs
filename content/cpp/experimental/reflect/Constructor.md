---
title: "std::experimental::reflect::Constructor"
source_path: "cpp/experimental/reflect/Constructor"
header: "<experimental/reflect>"
category: "experimental"
---

The Constructor concept is satisfied if and only if T reflects a constructor (Note: Some types that satisfy Constructor also satisfy SpecialMemberFunction).

## Declarations
```cpp
template< class T >
concept Constructor = Callable<T> && RecordMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
