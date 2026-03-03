---
title: "std::experimental::ranges::Semiregular"
source_path: "cpp/experimental/ranges/concepts/Semiregular"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The Semiregular concept specifies that a type is both copyable and default constructible. It is satisfied by types that behave similarly to built-in types like int, except that they need not support comparison with ==.

## Declarations
```cpp
template< class T >
concept bool Semiregular = Copyable<T> && DefaultConstructible<T>;
```
_(ranges TS)_
