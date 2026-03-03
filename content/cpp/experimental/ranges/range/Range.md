---
title: "std::experimental::ranges::Range"
source_path: "cpp/experimental/ranges/range/Range"
header: "<experimental/ranges/range>"
category: "experimental"
---

Given an lvalue t of type [std::remove_reference_t](/cpp/types/remove_reference/)<T>, Range<T> is satisfied only if

## Declarations
```cpp
template< class T >
concept bool Range =
requires(T&& t) {
ranges::begin(t); /* not necessarily equality-preserving (see below) */
ranges::end(t);
};
```
_(ranges TS)_
