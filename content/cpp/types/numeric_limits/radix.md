---
title: "std::numeric_limits<T>::radix"
source_path: "cpp/types/numeric_limits/radix"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::radix is the base of the number system used in the representation of the type. It is 2 for all binary numeric types, but it may be, for example, 10 for IEEE 754 [decimal floating-point types](https://en.wikipedia.org/wiki/Decimal64_floating-point_format) or for third-party [binary-coded decimal](https://en.wikipedia.org/wiki/binary-coded_decimal) integers. This constant is meaningful for all specializations.

## Declarations
```cpp
static const int radix;
```
_(until C++11)_

```cpp
static constexpr int radix;
```
_(since C++11)_

## See also
- [digits](/cpp/types/numeric_limits/digits/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
