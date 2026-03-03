---
title: "std::experimental::reflect::SpecialMemberFunction"
source_path: "cpp/experimental/reflect/SpecialMemberFunction"
header: "<experimental/reflect>"
category: "experimental"
---

The SpecialMemberFunction concept is satisfied if and only if T reflects a [special member function](/cpp/language/member_functions/#Special_member_functions).

## Declarations
```cpp
template< class T >
concept SpecialMemberFunction = RecordMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
