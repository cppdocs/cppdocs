---
title: "std::convertible_to"
source_path: "cpp/concepts/convertible_to"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept convertible_to<From, To> specifies that an expression of the same type and value category as those of [std::declval](/cpp/utility/declval/)<From>() can be implicitly and explicitly converted to the type To, and the two forms of conversion produce equal results.

## Declarations
```cpp
template< class From, class To >
concept convertible_to =
std::is_convertible_v<From, To> &&
requires {
static_cast<To>(std::declval<From>());
};
```
_(since C++20)_

## See also
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
