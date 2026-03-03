---
title: "std::movable"
source_path: "cpp/concepts/movable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept movable<T> specifies that T is an object type that can be moved (that is, it can be move constructed, move assigned, and lvalues of type T can be swapped).

## Declarations
```cpp
template< class T >
concept movable =
std::is_object_v<T> &&
std::move_constructible<T> &&
std::assignable_from<T&, T> &&
std::swappable<T>;
```
_(since C++20)_

## See also
- [copyable](/cpp/concepts/copyable/)
