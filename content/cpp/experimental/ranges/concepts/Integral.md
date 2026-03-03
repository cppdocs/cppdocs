---
title: "std::experimental::ranges::Integral"
source_path: "cpp/experimental/ranges/concepts/Integral"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Integral<T> is satisfied if and only if T is an integral type.

## Declarations
```cpp
template< class T >
concept bool Integral = std::is_integral<T>::value;
```
_(ranges TS)_

## See also
- [is_integral](/cpp/types/is_integral/)
