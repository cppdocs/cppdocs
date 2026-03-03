---
title: "std::isnan"
source_path: "cpp/numeric/math/isnan"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the given floating point number num is a not-a-number (NaN) value.The library provides overloads for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
bool isnan( float num );
bool isnan( double num );
bool isnan( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isnan( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr typename /*deduced-simd-t*/<V>::mask_type
isnan ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
bool isnan( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `v_num`: a data-parallel object of std::basic_simd specialization where its element type is a floating-point type

## Notes
There are many different NaN values with different sign bits and payloads, see [std::nan](/cpp/numeric/math/nan/) and [std::numeric_limits::quiet_NaN](/cpp/types/numeric_limits/quiet_nan/).

NaN values never compare equal to themselves or to other NaN values. Copying a NaN is not required, by IEEE-754, to preserve its bit representation (sign and [payload](/cpp/numeric/math/nan/)), though most implementation do.

Another way to test if a floating-point value is NaN is to compare it with itself: bool is_nan(double x) { return x != x; }.

[GCC](https://gcc.gnu.org/wiki/FloatingPointMath) and [Clang](https://clang.llvm.org/docs/UsersManual.html#controlling-floating-point-behavior) support a -ffinite-math option (additionally implied by -ffast-math), which allows the respective compiler to assume the nonexistence of special IEEE-754 floating point values such as NaN, infinity, or negative zero. In other words, std::isnan is assumed to always return false under this option.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::isnan(num) has the same effect as std::isnan(static_cast<double>(num)).

## Example
```cpp
#include <cfloat>
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha
              << "isnan(NaN) = " << std::isnan(NAN) << '\n'
              << "isnan(Inf) = " << std::isnan(INFINITY) << '\n'
              << "isnan(0.0) = " << std::isnan(0.0) << '\n'
              << "isnan(DBL_MIN/2.0) = " << std::isnan(DBL_MIN / 2.0) << '\n'
              << "isnan(0.0 / 0.0)   = " << std::isnan(0.0 / 0.0) << '\n'
              << "isnan(Inf - Inf)   = " << std::isnan(INFINITY - INFINITY) << '\n';
}
```

## See also
- [nannanfnanl](/cpp/numeric/math/nan/)
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [isfinite](/cpp/numeric/math/isfinite/)
- [isinf](/cpp/numeric/math/isinf/)
- [isnormal](/cpp/numeric/math/isnormal/)
- [isunordered](/cpp/numeric/math/isunordered/)
- [C documentation](/c/numeric/math/isnan/)
