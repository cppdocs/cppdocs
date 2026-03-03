---
title: "std::fma, std::fmaf, std::fmal"
source_path: "cpp/numeric/math/fma"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes x * y + z as if to infinite precision and rounded only once to fit the result type.The library provides overloads of std::fma for all cv-unqualified floating-point types as the type of the parameters x, y and z.(since C++23)

## Declarations
```cpp
float fma ( float x, float y, float z );
double fma ( double x, double y, double z );
long double fma ( long double x, long double y, long double z );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
fma ( /* floating-point-type */ x,
/* floating-point-type */ y,
/* floating-point-type */ z );
```
_(since C++23)_

```cpp
float fmaf( float x, float y, float z );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double fmal( long double x, long double y, long double z );
```
_(since C++11) (constexpr since C++23)_

```cpp
#define FP_FAST_FMA /* implementation-defined */
```
_(since C++11)_

```cpp
#define FP_FAST_FMAF /* implementation-defined */
```
_(since C++11)_

```cpp
#define FP_FAST_FMAL /* implementation-defined */
```
_(since C++11)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2, class Arithmetic3 >
/* common-floating-point-type */
fma( Arithmetic1 x, Arithmetic2 y, Arithmetic3 z );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `x, y, z`: floating-point or integer values

## Return value
If successful, returns the value of x * y + z as if calculated to infinite precision and rounded once to fit the result type (or, alternatively, calculated as a single ternary floating-point operation).

## Notes
This operation is commonly implemented in hardware as [fused multiply-add](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation) CPU instruction. If supported by hardware, the appropriate FP_FAST_FMA? macros are expected to be defined, but many implementations make use of the CPU instruction even when the macros are not defined.

POSIX [(fma, fmaf, fmal)](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fma.html) additionally specifies that the situations specified to return [FE_INVALID](/cpp/numeric/fenv/fe_exceptions/) are domain errors.

Due to its infinite intermediate precision, std::fma is a common building block of other correctly-rounded mathematical operations, such as [std::sqrt](/cpp/numeric/math/sqrt/) or even the division (where not provided by the CPU, e.g. [Itanium](https://en.wikipedia.org/wiki/Itanium)).

As with all floating-point expressions, the expression x * y + z may be compiled as a fused multiply-add unless the [#pragma](/cpp/preprocessor/impl/) STDC FP_CONTRACT is off.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1, second argument num2 and third argument num3:

If num1, num2 and num3 have arithmetic types, then std::fma(num1, num2, num3) has the same effect as std::fma(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2),static_cast</*common-floating-point-type*/>(num3)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) among the types of num1, num2 and num3, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iomanip>
#include <iostream>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
int main()
{
    // demo the difference between fma and built-in operators
    const double in = 0.1;
    std::cout << "0.1 double is " << std::setprecision(23) << in
              << " (" << std::hexfloat << in << std::defaultfloat << ")\n"
              << "0.1*10 is 1.0000000000000000555112 (0x8.0000000000002p-3), "
              << "or 1.0 if rounded to double\n";
 
    const double expr_result = 0.1 * 10 - 1;
    const double fma_result = std::fma(0.1, 10, -1);
    std::cout << "0.1 * 10 - 1 = " << expr_result
              << " : 1 subtracted after intermediate rounding\n"
              << "fma(0.1, 10, -1) = " << std::setprecision(6) << fma_result << " ("
              << std::hexfloat << fma_result << std::defaultfloat << ")\n\n";
 
    // fma is used in double-double arithmetic
    const double high = 0.1 * 10;
    const double low = std::fma(0.1, 10, -high);
    std::cout << "in double-double arithmetic, 0.1 * 10 is representable as "
              << high << " + " << low << "\n\n";
 
    // error handling 
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "fma(+Inf, 10, -Inf) = " << std::fma(INFINITY, 10, -INFINITY) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [remainderremainderfremainderl](/cpp/numeric/math/remainder/)
- [remquoremquofremquol](/cpp/numeric/math/remquo/)
- [C documentation](/c/numeric/math/fma/)
