---
title: "std::experimental::ranges::MoveConstructible"
source_path: "cpp/experimental/ranges/concepts/MoveConstructible"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept MoveConstructible is satisfied if T is a reference type, or if it is an object type where an object of that type can constructed from an rvalue of that type in both direct- and copy-initialization contexts, with the usual semantics.

## Declarations
```cpp
template< class T >
concept bool MoveConstructible =
Constructible<T, T> && ConvertibleTo<T, T>;
```
_(ranges TS)_

## See also
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
