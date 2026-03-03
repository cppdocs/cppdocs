---
title: "std::numeric_limits<T>::digits10"
source_path: "cpp/types/numeric_limits/digits10"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::digits10 is the number of base-10 digits that can be represented by the type T without change, that is, any number with this many significant decimal digits can be converted to a value of type T and back to decimal form, without change due to rounding or overflow. For base-[radix](/cpp/types/numeric_limits/radix/) types, it is the value of [digits()](/cpp/types/numeric_limits/digits/) (digits - 1 for floating-point types) multiplied by \(\small \log_{10}{radix}\)log10(radix) and rounded down.

## Declarations
```cpp
static const int digits10;
```
_(until C++11)_

```cpp
static constexpr int digits10;
```
_(since C++11)_

## Example
An 8-bit binary type can represent any two-digit decimal number exactly, but 3-digit decimal numbers 256..999 cannot be represented. The value of digits10 for an 8-bit type is 2 (8 * [std::log10](/cpp/numeric/math/log10/)(2) is 2.41)

## See also
- [max_digits10](/cpp/types/numeric_limits/max_digits10/)
- [radix](/cpp/types/numeric_limits/radix/)
- [digits](/cpp/types/numeric_limits/digits/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
