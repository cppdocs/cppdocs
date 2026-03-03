---
title: "std::fdim, std::fdimf, std::fdiml"
source_path: "cpp/numeric/math/fdim"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Returns the positive difference between x and y, that is, if x > y, returns x - y, otherwise (i.e. if x <= y) returns +0.The library provides overloads of std::fdim for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float fdim ( float x, float y );
double fdim ( double x, double y );
long double fdim ( long double x, long double y );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
fdim ( /*floating-point-type*/ x,
/*floating-point-type*/ y );
```
_(since C++23)_

```cpp
float fdimf( float x, float y );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double fdiml( long double x, long double y );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
fdim ( const V0& v_x, const V1& v_y );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double fdim ( Integer x, Integer y );
```
_(constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
If successful, returns the positive difference between x and y.

## Notes
Equivalent to [std::fmax](/cpp/numeric/math/fmax/)(x - y, 0), except for the NaN handling requirements.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::fdim(num1, num2) has the same effect as std::fdim(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
int main()
{
    std::cout << "fdim(4, 1) = " << std::fdim(4, 1) << '\n'
              << "fdim(1, 4) = " << std::fdim(1, 4) << '\n'
              << "fdim(4,-1) = " << std::fdim(4, -1) << '\n'
              << "fdim(1,-4) = " << std::fdim(1, -4) << '\n';
 
    // error handling 
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "fdim(1e308, -1e308) = " << std::fdim(1e308, -1e308) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [abs(int)labsllabs](/cpp/numeric/math/abs/)
- [fmaxfmaxffmaxl](/cpp/numeric/math/fmax/)
- [C documentation](/c/numeric/math/fdim/)
