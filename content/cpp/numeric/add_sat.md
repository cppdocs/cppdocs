---
title: "std::add_sat"
source_path: "cpp/numeric/add_sat"
header: "<numeric>"
category: "numeric"
since: "C++26"
---

Computes the [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) addition x + y. This operation (unlike built-in [arithmetic operations on integers](/cpp/language/operator_arithmetic/#Overflows)) behaves as-if it is a mathematical operation with an infinite range. Let q denote the result of such operation.
Returns:

## Declarations
```cpp
template< class T >
constexpr T add_sat( T x, T y ) noexcept;
```
_(since C++26)_

## Parameters
- `x, y`: integer values

## Return value
Saturated x + y.

## Notes
Unlike the built-in arithmetic operators on integers, the [integral promotion](/cpp/language/implicit_cast/#Integral_promotion) does not apply to the x and y arguments.

If two arguments of different type are passed, the call fails to compile, i.e. the behavior relative to [template argument deduction](/cpp/language/template_argument_deduction/) is the same as for [std::min](/cpp/algorithm/min/) or [std::max](/cpp/algorithm/max/).

Most modern hardware architectures have efficient support for saturation arithmetic on SIMD vectors, including SSE2 for x86 and NEON for ARM.

## Example
```cpp
#include <climits>
#include <limits>
#include <numeric>
 
static_assert(CHAR_BIT == 8);
static_assert(UCHAR_MAX == 255);
 
int main()
{
    constexpr int a = std::add_sat(3, 4); // no saturation occurs, T = int
    static_assert(a == 7);
 
    constexpr unsigned char b = std::add_sat<unsigned char>(UCHAR_MAX, 4); // saturated
    static_assert(b == UCHAR_MAX);
 
    constexpr unsigned char c = std::add_sat(UCHAR_MAX, 4); // not saturated, T = int
        // add_sat(int, int) returns int tmp == 259,
        // then assignment truncates 259 % 256 == 3
    static_assert(c == 3);
 
//  unsigned char d = std::add_sat(252, c); // Error: inconsistent deductions for T
 
    constexpr unsigned char e = std::add_sat<unsigned char>(251, a); // saturated
    static_assert(e == UCHAR_MAX);
        // 251 is of type T = unsigned char, `a` is converted to unsigned char value;
        // might yield an int -> unsigned char conversion warning for `a`
 
    constexpr signed char f = std::add_sat<signed char>(-123, -3); // not saturated
    static_assert(f == -126);
 
    constexpr signed char g = std::add_sat<signed char>(-123, -13); // saturated
    static_assert(g == std::numeric_limits<signed char>::min()); // g == -128
}
```

## See also
- [sub_sat](/cpp/numeric/sub_sat/)
- [mul_sat](/cpp/numeric/mul_sat/)
- [div_sat](/cpp/numeric/div_sat/)
- [saturate_cast](/cpp/numeric/saturate_cast/)
- [clamp](/cpp/algorithm/clamp/)
- [in_range](/cpp/utility/in_range/)
- [min](/cpp/types/numeric_limits/min/)
- [max](/cpp/types/numeric_limits/max/)
