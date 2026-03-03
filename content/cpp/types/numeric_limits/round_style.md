---
title: "std::numeric_limits<T>::round_style"
source_path: "cpp/types/numeric_limits/round_style"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::round_style identifies the rounding style used by the floating-point type T whenever a value that is not one of the exactly repesentable values of T is stored in an object of that type.

## Declarations
```cpp
static const std::float_round_style round_style;
```
_(until C++11)_

```cpp
static constexpr std::float_round_style round_style;
```
_(since C++11)_

## Notes
These values are constants, and do not reflect the changes to the rounding made by [std::fesetround](/cpp/numeric/fenv/feround/). The changed values may be obtained from [FLT_ROUNDS](/cpp/types/climits/flt_rounds/) or [std::fegetround](/cpp/numeric/fenv/feround/).

## Example
```cpp
#include <iostream>
#include <limits>
 
auto print(std::float_round_style frs)
{
    switch (frs)
    {
        case std::round_indeterminate:
            return "Rounding style cannot be determined";
        case std::round_toward_zero:
            return "Rounding toward zero";
        case std::round_to_nearest:
            return "Rounding toward nearest representable value";
        case std::round_toward_infinity:
            return "Rounding toward positive infinity";
        case std::round_toward_neg_infinity:
            return "Rounding toward negative infinity";
    }
    return "unknown round style";
}
 
int main()
{
    std::cout << std::hexfloat
              << "The decimal 0.1 is stored in a double as "
              << 0.1 << '\n'
              << "The decimal 0.3 is stored in a double as "
              << 0.3 << '\n'
              << print(std::numeric_limits<double>::round_style) << '\n';
}
```

## See also
- [float_round_style](/cpp/types/numeric_limits/float_round_style/)
