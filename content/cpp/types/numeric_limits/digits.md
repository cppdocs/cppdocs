---
title: "std::numeric_limits<T>::digits"
source_path: "cpp/types/numeric_limits/digits"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::digits is the number of digits in base-[radix](/cpp/types/numeric_limits/radix/) that can be represented by the type T without change. For integer types, this is the number of bits not counting the sign bit and the padding bits (if any). For floating-point types, this is the digits of the mantissa (for [IEC 559/IEEE 754](/cpp/types/numeric_limits/is_iec559/) implementations, this is the number of digits stored for the mantissa plus one, because the mantissa has an implicit leading 1 and binary point).

## Declarations
```cpp
static const int digits;
```
_(until C++11)_

```cpp
static constexpr int digits;
```
_(since C++11)_

## See also
- [radix](/cpp/types/numeric_limits/radix/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
