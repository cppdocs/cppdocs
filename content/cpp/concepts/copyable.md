---
title: "std::copyable"
source_path: "cpp/concepts/copyable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept copyable<T> specifies that T is a [movable](/cpp/concepts/movable/) object type that can also be copied (that is, it supports copy construction and copy assignment).

## Declarations
```cpp
template< class T >
concept copyable =
std::copy_constructible<T> &&
std::movable<T> &&
std::assignable_from<T&, T&> &&
std::assignable_from<T&, const T&> &&
std::assignable_from<T&, const T>;
```
_(since C++20)_

## See also
- [movable](/cpp/concepts/movable/)
