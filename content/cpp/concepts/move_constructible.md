---
title: "std::move_constructible"
source_path: "cpp/concepts/move_constructible"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept move_constructible is satisfied if T is a reference type, or if it is an object type where an object of that type can be constructed from an rvalue of that type in both direct- and copy-initialization contexts, with the usual semantics.

## Declarations
```cpp
template< class T >
concept move_constructible = std::constructible_from<T, T> && std::convertible_to<T, T>;
```
_(since C++20)_

## See also
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
