---
title: "std::pow, std::powf, std::powl"
source_path: "cpp/numeric/math/pow"
header: "<cmath>"
category: "numeric"
---

1-4) Computes the value of base raised to the power exp.The library provides overloads of std::pow for all cv-unqualified floating-point types as the type of the parameters base and exp.(since C++23)

## Declarations
```cpp
float pow ( float base, float exp );
double pow ( double base, double exp );
long double pow ( long double base, long double exp );
```
_(until C++23)_

```cpp
/* floating-point-type */
pow ( /* floating-point-type */ base,
/* floating-point-type */ exp )
```
_(since C++23) (constexpr since C++26)_

```cpp
float pow ( float base, int exp );
double pow ( double base, int exp );
long double pow ( long double base, int exp );
```
_(until C++11)_

```cpp
float powf( float base, float exp );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double powl( long double base, long double exp );
```
_(since C++11) (constexpr since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
pow ( Arithmetic1 base, Arithmetic2 exp );
```
_(constexpr since C++26)_

## Parameters
- `base`: base as a floating-point or integer value
- `exp`: exponent as a floating-point or integer value

## Return value
If no errors occur, base raised to the power of exp (baseexp), is returned.

## Notes
C++98 added overloads where exp has type int on top of C [pow()](/c/numeric/math/pow/), and the return type of std::pow(float, int) was float. However, the additional overloads introduced in C++11 specify that std::pow(float, int) should return double. [LWG issue 550](https://cplusplus.github.io/LWG/issue550) was raised to target this conflict, and the resolution is to removed the extra int exp overloads.

Although std::pow cannot be used to obtain a root of a negative number, [std::cbrt](/cpp/numeric/math/cbrt/) is provided for the common case where exp is 1/3.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::pow(num1, num2) has the same effect as std::pow(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    // typical usage
    std::cout << "pow(2, 10) = " << std::pow(2, 10) << '\n'
              << "pow(2, 0.5) = " << std::pow(2, 0.5) << '\n'
              << "pow(-2, -3) = " << std::pow(-2, -3) << '\n';
 
    // special values
    std::cout << "pow(-1, NAN) = " << std::pow(-1, NAN) << '\n'
              << "pow(+1, NAN) = " << std::pow(+1, NAN) << '\n'
              << "pow(INFINITY, 2) = " << std::pow(INFINITY, 2) << '\n'
              << "pow(INFINITY, -1) = " << std::pow(INFINITY, -1) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "pow(-1, 1/3) = " << std::pow(-1, 1.0 / 3) << '\n';
    if (errno == EDOM)
        std::cout << "    errno == EDOM " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
 
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "pow(-0, -3) = " << std::pow(-0.0, -3) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [sqrtsqrtfsqrtl](/cpp/numeric/math/sqrt/)
- [cbrtcbrtfcbrtl](/cpp/numeric/math/cbrt/)
- [hypothypotfhypotl](/cpp/numeric/math/hypot/)
- [pow(std::complex)](/cpp/numeric/complex/pow/)
- [pow(std::valarray)](/cpp/numeric/valarray/pow/)
- [C documentation](/c/numeric/math/pow/)
