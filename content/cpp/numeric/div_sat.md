---
title: "std::div_sat"
source_path: "cpp/numeric/div_sat"
header: "<numeric>"
category: "numeric"
since: "C++26"
---

Computes the [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) division x / y. If T is a signed integer type, x is the smallest (most negative) value of T, and y == -1, returns the greatest value of T; otherwise, returns x / y.

## Declarations
```cpp
template< class T >
constexpr T div_sat( T x, T y ) noexcept;
```
_(since C++26)_

## Parameters
- `x, y`: integer values

## Return value
Saturated x / y.

## Notes
Unlike the built-in arithmetic operators on integers, the [integral promotion](/cpp/language/implicit_cast/#Integral_promotion) does not apply to the x and y arguments.

If two arguments of different type are passed, the call fails to compile, i.e. the behavior relative to [template argument deduction](/cpp/language/template_argument_deduction/) is the same as for [std::min](/cpp/algorithm/min/) or [std::max](/cpp/algorithm/max/).

Most modern hardware architectures have efficient support for saturation arithmetic on SIMD vectors, including SSE2 for x86 and NEON for ARM.

## Example
```cpp
#include <climits>
#include <numeric>
 
static_assert
(""
    && (std::div_sat<int>(6, 3) == 2) // not saturated
    && (std::div_sat<int>(INT_MIN, -1) == INT_MAX) // saturated
    && (std::div_sat<unsigned>(6, 3) == 2) // not saturated
);
 
int main() {}
```

## See also
- [add_sat](/cpp/numeric/add_sat/)
- [sub_sat](/cpp/numeric/sub_sat/)
- [mul_sat](/cpp/numeric/mul_sat/)
- [saturate_cast](/cpp/numeric/saturate_cast/)
- [clamp](/cpp/algorithm/clamp/)
- [in_range](/cpp/utility/in_range/)
- [min](/cpp/types/numeric_limits/min/)
- [max](/cpp/types/numeric_limits/max/)
