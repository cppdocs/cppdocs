---
title: "std::experimental::reflect::RecordMember"
source_path: "cpp/experimental/reflect/RecordMember"
header: "<experimental/reflect>"
category: "experimental"
---

The RecordMember concept is satisfied if and only if T reflects a member-declaration.

## Declarations
```cpp
template< class T >
concept RecordMember = ScopeMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
