---
title: "std::copy_constructible"
source_path: "cpp/concepts/copy_constructible"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept copy_constructible is satisfied if T is an lvalue reference type, or if it is a [move_constructible](/cpp/concepts/move_constructible/) object type where an object of that type can constructed from a (possibly const) lvalue or const rvalue of that type in both direct- and copy-initialization contexts with the usual semantics (a copy is constructed with the source unchanged).

## Declarations
```cpp
template< class T >
concept copy_constructible =
std::move_constructible<T> &&
std::constructible_from<T, T&> && std::convertible_to<T&, T> &&
std::constructible_from<T, const T&> && std::convertible_to<const T&, T> &&
std::constructible_from<T, const T> && std::convertible_to<const T, T>;
```
_(since C++20)_

## See also
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
