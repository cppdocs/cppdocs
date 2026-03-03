---
title: "std::experimental::ranges::UnsignedIntegral"
source_path: "cpp/experimental/ranges/concepts/UnsignedIntegral"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept UnsignedIntegral<T> is satisfied if and only if T is an integral type and [std::is_signed](/cpp/types/is_signed/)<T>::value is false.

## Declarations
```cpp
template< class T >
concept bool UnsignedIntegral = Integral<T> && !SignedIntegral<T>;
```
_(ranges TS)_

## Notes
UnsignedIntegral<T> may be satisfied by a type that is not a [unsigned integer type](/cpp/language/type-id/#Type_classification), for example, bool.

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_signed](/cpp/types/is_signed/)
