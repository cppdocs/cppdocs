---
title: "std::experimental::ranges::Copyable"
source_path: "cpp/experimental/ranges/concepts/Copyable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Copyable<T> specifies that T is an [Movable](/cpp/experimental/ranges/concepts/movable/) object type that can also copied (that is, it supports copy construction and copy assignment).

## Declarations
```cpp
template< class T >
concept bool Copyable =
CopyConstructible<T> &&
Movable<T> &&
Assignable<T&, const T&>;
```
_(ranges TS)_

## Notes
It is intended that Copyable<T> also requires Assignable<T&, const T> (assignment from const rvalue) and Assignable<T&, T&> (assignment from non-const lvalue) to be satisfied.

## See also
- [Movable](/cpp/experimental/ranges/concepts/movable/)
