---
title: "std::round, std::roundf, std::roundl, std::lround, std::lroundf, std::lroundl, std::llround, std::llroundf"
source_path: "cpp/numeric/math/round"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the nearest integer value to num (in floating-point format), rounding halfway cases away from zero, regardless of the current rounding mode.The library provides overloads of std::round for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
Rounding to floating-point types
```

```cpp
float round ( float num );
double round ( double num );
long double round ( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
round ( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float roundf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double roundl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
Rounding to long
```

```cpp
long lround ( float num );
long lround ( double num );
long lround ( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr long lround( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
long lroundf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long lroundl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
Rounding to long long
```

```cpp
long long llround ( float num );
long long llround ( double num );
long long llround ( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr long long llround( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
long long llroundf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long long llroundl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double round( Integer num );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class Integer >
long lround( Integer num );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class Integer >
long long llround( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the nearest integer value to num, rounding halfway cases away from zero, is returned.

## Notes
[FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) may be (but is not required to be) raised by std::round when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so std::round never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable.

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lround.html) that all cases where std::lround or std::llround raise [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) are domain errors.

The double version of std::round behaves as if implemented as follows:

The additional overloads are not required to be provided exactly as (A-C). They only need to be sufficient to ensure that for their argument num of integer type:

## Example
```cpp
#include <cassert>
#include <cfenv>
#include <cfloat>
#include <climits>
#include <cmath>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
double custom_round(double x)
{
    const int save_round = std::fegetround();
    std::fesetround(FE_TOWARDZERO);
    const double result = std::rint(std::copysign(0.5 + std::fabs(x), x));
    std::fesetround(save_round);
    return result;
}
 
void test_custom_round()
{
    for (const double x :
        {
            0.0, 0.3,
            0.5 - DBL_EPSILON / 2,
            0.5,
            0.5 + DBL_EPSILON / 2,
            0.7, 1.0, 2.3, 2.5, 2.7, 3.0,
            static_cast<double>(INFINITY)
        })
        assert(round(+x) == custom_round(+x) && round(-x) == custom_round(-x));
}
 
int main()
{
    test_custom_round();
 
    std::cout << std::showpos;
 
    // round
    std::cout << "round(+2.3) = " << std::round(2.3)
              << "  round(+2.5) = " << std::round(2.5)
              << "  round(+2.7) = " << std::round(2.7) << '\n'
              << "round(-2.3) = " << std::round(-2.3)
              << "  round(-2.5) = " << std::round(-2.5)
              << "  round(-2.7) = " << std::round(-2.7) << '\n';
 
    std::cout << "round(-0.0) = " << std::round(-0.0)  << '\n'
              << "round(-Inf) = " << std::round(-INFINITY) << '\n';
 
    // lround
    std::cout << "lround(+2.3) = " << std::lround(2.3)
              << "  lround(+2.5) = " << std::lround(2.5)
              << "  lround(+2.7) = " << std::lround(2.7) << '\n'
              << "lround(-2.3) = " << std::lround(-2.3)
              << "  lround(-2.5) = " << std::lround(-2.5)
              << "  lround(-2.7) = " << std::lround(-2.7) << '\n';
 
    std::cout << "lround(-0.0) = " << std::lround(-0.0)  << '\n'
              << "lround(-Inf) = " << std::lround(-INFINITY) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "std::lround(LONG_MAX+1.5) = "
              << std::lround(LONG_MAX + 1.5) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID was raised\n";
}
```

## See also
- [floorfloorffloorl](/cpp/numeric/math/floor/)
- [ceilceilfceill](/cpp/numeric/math/ceil/)
- [trunctruncftruncl](/cpp/numeric/math/trunc/)
- [C documentation](/c/numeric/math/round/)
