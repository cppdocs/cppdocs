---
title: "std::experimental::ranges::ConvertibleTo"
source_path: "cpp/experimental/ranges/concepts/ConvertibleTo"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept ConvertibleTo<From, To> specifies that an expression of the type and value category specified by From can be implicitly and explicitly converted to the type To, and the two forms of conversion are equivalent.

## Declarations
```cpp
template< class From, class To >
concept bool ConvertibleTo =
std::is_convertible<From, To>::value &&
requires(From (&f)()) {
static_cast<To>(f());
};
```
_(ranges TS)_

## See also
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
