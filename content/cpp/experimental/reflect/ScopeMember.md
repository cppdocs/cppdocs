---
title: "std::experimental::reflect::ScopeMember"
source_path: "cpp/experimental/reflect/ScopeMember"
header: "<experimental/reflect>"
category: "experimental"
---

The ScopeMember concept is satisfied if and only if T satisfies RecordMember, Enumerator, or Variable, or if T reflects a namespace that is not the global namespace (Note: The scope of members of an unnamed union is the unnamed union; the scope of enumerators is their type).

## Declarations
```cpp
template< class T >
concept ScopeMember = Named<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
