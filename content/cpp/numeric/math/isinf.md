---
title: "std::isinf"
source_path: "cpp/numeric/math/isinf"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the given floating-point number num is a positive or negative infinity.The library provides overloads for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
bool isinf( float num );
bool isinf( double num );
bool isinf( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isinf( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr typename /*deduced-simd-t*/<V>::mask_type
isinf ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
bool isinf( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `v_num`: a data-parallel object of std::basic_simd specialization where its element type is a floating-point type

## Notes
[GCC](https://gcc.gnu.org/wiki/FloatingPointMath) and [Clang](https://clang.llvm.org/docs/UsersManual.html#controlling-floating-point-behavior) support a -ffinite-math option (additionally implied by -ffast-math), which allows the respective compiler to assume the nonexistence of special IEEE-754 floating point values such as NaN, infinity, or negative zero. In other words, std::isinf is assumed to always return false under this option.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::isinf(num) has the same effect as std::isinf(static_cast<double>(num)).

## Example
```cpp
#include <cfloat>
#include <cmath>
#include <iostream>
#include <limits>
 
int main()
{
    const double max = std::numeric_limits<double>::max();
    const double inf = std::numeric_limits<double>::infinity();
 
    std::cout << std::boolalpha
              << "isinf(NaN) = " << std::isinf(NAN) << '\n'
              << "isinf(Inf) = " << std::isinf(INFINITY) << '\n'
              << "isinf(max) = " << std::isinf(max) << '\n'
              << "isinf(inf) = " << std::isinf(inf) << '\n'
              << "isinf(0.0) = " << std::isinf(0.0) << '\n'
              << "isinf(exp(800)) = " << std::isinf(std::exp(800)) << '\n'
              << "isinf(DBL_MIN/2.0) = " << std::isinf(DBL_MIN / 2.0) << '\n';
}
```

## See also
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [isfinite](/cpp/numeric/math/isfinite/)
- [isnan](/cpp/numeric/math/isnan/)
- [isnormal](/cpp/numeric/math/isnormal/)
- [C documentation](/c/numeric/math/isinf/)
