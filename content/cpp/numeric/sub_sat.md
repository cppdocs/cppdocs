---
title: "std::sub_sat"
source_path: "cpp/numeric/sub_sat"
header: "<numeric>"
category: "numeric"
since: "C++26"
---

Computes the [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) subtraction x - y. This operation (unlike built-in [arithmetic operations on integers](/cpp/language/operator_arithmetic/#Overflows)) behaves as-if it is a mathematical operation with an infinite range. Let q denote the result of such operation.
Returns:

## Declarations
```cpp
template< class T >
constexpr T sub_sat( T x, T y ) noexcept;
```
_(since C++26)_

## Parameters
- `x, y`: integer values

## Return value
Saturated x - y.

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
    && (std::sub_sat<int>(INT_MIN + 4, 3) == INT_MIN + 1) // not saturated
    && (std::sub_sat<int>(INT_MIN + 4, 5) == INT_MIN) // saturated
    && (std::sub_sat<int>(INT_MAX - 4, -3) == INT_MAX - 1) // not saturated
    && (std::sub_sat<int>(INT_MAX - 4, -5) == INT_MAX) // saturated
    && (std::sub_sat<unsigned>(4, 3) == 1) // not saturated
    && (std::sub_sat<unsigned>(4, 5) == 0) // saturated
);
 
int main() {}
```

## See also
- [add_sat](/cpp/numeric/add_sat/)
- [mul_sat](/cpp/numeric/mul_sat/)
- [div_sat](/cpp/numeric/div_sat/)
- [saturate_cast](/cpp/numeric/saturate_cast/)
- [clamp](/cpp/algorithm/clamp/)
- [in_range](/cpp/utility/in_range/)
- [min](/cpp/types/numeric_limits/min/)
- [max](/cpp/types/numeric_limits/max/)
