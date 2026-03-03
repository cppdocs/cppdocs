---
title: "std::experimental::ranges::CopyConstructible"
source_path: "cpp/experimental/ranges/concepts/CopyConstructible"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept CopyConstructible is satisfied if T is an lvalue reference type, or if it is a [MoveConstructible](/cpp/experimental/ranges/concepts/moveconstructible/) object type where an object of that type can constructed from a (possibly const) lvalue or const rvalue of that type in both direct- and copy-initialization contexts with the usual semantics (a copy is constructed with the source unchanged).

## Declarations
```cpp
template< class T >
concept bool CopyConstructible =
MoveConstructible<T> &&
Constructible<T, T&> && ConvertibleTo<T&, T> &&
Constructible<T, const T&> && ConvertibleTo<const T&, T> &&
Constructible<T, const T> && ConvertibleTo<const T, T>;
```
_(ranges TS)_

## See also
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
