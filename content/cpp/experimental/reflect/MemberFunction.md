---
title: "std::experimental::reflect::MemberFunction"
source_path: "cpp/experimental/reflect/MemberFunction"
header: "<experimental/reflect>"
category: "experimental"
---

The MemberFunction concept is satisfied if and only if T reflects a member function, excluding constructors and destructors.

## Declarations
```cpp
template< class T >
concept MemberFunction = RecordMember<T> && Function<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
