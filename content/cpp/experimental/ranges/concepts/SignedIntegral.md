---
title: "std::experimental::ranges::SignedIntegral"
source_path: "cpp/experimental/ranges/concepts/SignedIntegral"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept SignedIntegral<T> is satisfied if and only if T is an integral type and [std::is_signed](/cpp/types/is_signed/)<T>::value is true.

## Declarations
```cpp
template< class T >
concept bool SignedIntegral = Integral<T> && std::is_signed<T>::value;
```
_(ranges TS)_

## Notes
SignedIntegral<T> may be satisfied by a type that is not a [signed integer type](/cpp/language/type-id/#Type_classification), for example, char (on a system where char is signed).

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_signed](/cpp/types/is_signed/)
