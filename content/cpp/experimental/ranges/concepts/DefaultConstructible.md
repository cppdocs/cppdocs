---
title: "std::experimental::ranges::DefaultConstructible"
source_path: "cpp/experimental/ranges/concepts/DefaultConstructible"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The DefaultConstructible concept provides a shorthand for the common case when the question is whether a type can be constructed with no arguments.

## Declarations
```cpp
template< class T >
concept bool DefaultConstructible = Constructible<T>;
```
_(ranges TS)_

## See also
- [Constructible](/cpp/experimental/ranges/concepts/constructible/)
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
