---
title: "std::experimental::ranges::Movable"
source_path: "cpp/experimental/ranges/concepts/Movable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Movable<T> specifies that T is an object type that can moved (that is, it can be move constructed, move assigned, and lvalues of type T can be swapped).

## Declarations
```cpp
template< class T >
concept bool Movable =
std::is_object<T>::value &&
MoveConstructible<T> &&
Assignable<T&, T> &&
Swappable<T>;
```
_(ranges TS)_

## See also
- [Copyable](/cpp/experimental/ranges/concepts/copyable/)
