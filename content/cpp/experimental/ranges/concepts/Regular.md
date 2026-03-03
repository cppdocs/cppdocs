---
title: "std::experimental::ranges::Regular"
source_path: "cpp/experimental/ranges/concepts/Regular"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The Regular concept specifies that a type is regular, that is, it is copyable, default constructible, and equality comparable. It is satisfied by types that behave similarly to built-in types like int, and that are comparable with ==.

## Declarations
```cpp
template< class T >
concept bool Regular = Semiregular<T> && EqualityComparable<T>;
```
_(ranges TS)_
