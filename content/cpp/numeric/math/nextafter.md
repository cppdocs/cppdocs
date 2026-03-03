---
title: "std::nextafter, std::nextafterf, std::nextafterl, std::nexttoward, std::nexttowardf, std::nexttowardl"
source_path: "cpp/numeric/math/nextafter"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

Returns the next representable value of from in the direction of to.

## Declarations
```cpp
float nextafter ( float from, float to );
double nextafter ( double from, double to );
long double nextafter ( long double from, long double to );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
nextafter ( /* floating-point-type */ from,
/* floating-point-type */ to );
```
_(since C++23)_

```cpp
float nextafterf( float from, float to );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double nextafterl( long double from, long double to );
```
_(since C++11) (constexpr since C++23)_

```cpp
float nexttoward ( float from, long double to );
double nexttoward ( double from, long double to );
long double nexttoward ( long double from, long double to );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
nexttoward ( /* floating-point-type */ from,
long double to );
```
_(since C++23)_

```cpp
float nexttowardf( float from, long double to );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double nexttowardl( long double from, long double to );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
nextafter( Arithmetic1 from, Arithmetic2 to );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class Integer >
double nexttoward( Integer from, long double to );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `from, to`: floating-point or integer values

## Return value
If no errors occur, the next representable value of from in the direction of to. is returned. If from equals to, then to is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/nextafter.html) that the overflow and the underflow conditions are range errors ([errno](/cpp/error/errno/) may be set).

IEC 60559 recommends that from is returned whenever from == to. These functions return to instead, which makes the behavior around zero consistent: std::nextafter(-0.0, +0.0) returns +0.0 and std::nextafter(+0.0, -0.0) returns -0.0.

std::nextafter is typically implemented by manipulation of IEEE representation ([glibc](https://github.com/bminor/glibc/blob/master/math/s_nextafter.c), [musl](https://github.com/ifduyue/musl/blob/master/src/math/nextafter.c)).

The additional std::nextafter overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::nextafter(num1, num2) has the same effect as std::nextafter(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

The additional std::nexttoward overloads are not required to be provided exactly as (B). They only need to be sufficient to ensure that for their argument num of integer type, std::nexttoward(num) has the same effect as std::nexttoward(static_cast<double>(num)).

## Example
```cpp
#include <cfenv>
#include <cfloat>
#include <cmath>
#include <concepts>
#include <iomanip>
#include <iostream>
 
int main()
{
    float from1 = 0, to1 = std::nextafter(from1, 1.f);
    std::cout << "The next representable float after " << std::setprecision(20) << from1
              << " is " << to1
              << std::hexfloat << " (" << to1 << ")\n" << std::defaultfloat;
 
    float from2 = 1, to2 = std::nextafter(from2, 2.f);
    std::cout << "The next representable float after " << from2 << " is " << to2
              << std::hexfloat << " (" << to2 << ")\n" << std::defaultfloat;
 
    double from3 = std::nextafter(0.1, 0), to3 = 0.1;
    std::cout << "The number 0.1 lies between two valid doubles:\n"
              << std::setprecision(56) << "    " << from3
              << std::hexfloat << " (" << from3 << ')' << std::defaultfloat
              << "\nand " << to3 << std::hexfloat << "  (" << to3 << ")\n"
              << std::defaultfloat << std::setprecision(20);
 
    std::cout << "\nDifference between nextafter and nexttoward:\n";
    long double dir = std::nextafter(from1, 1.0L); // first subnormal long double
    float x = std::nextafter(from1, dir); // first converts dir to float, giving 0
    std::cout << "With nextafter, next float after " << from1 << " is " << x << '\n';
    x = std::nexttoward(from1, dir);
    std::cout << "With nexttoward, next float after " << from1 << " is " << x << '\n';
 
    std::cout << "\nSpecial values:\n";
    {
        // #pragma STDC FENV_ACCESS ON
        std::feclearexcept(FE_ALL_EXCEPT);
        double from4 = DBL_MAX, to4 = std::nextafter(from4, INFINITY);
        std::cout << "The next representable double after " << std::setprecision(6)
                  << from4 << std::hexfloat << " (" << from4 << ')'
                  << std::defaultfloat << " is " << to4
                  << std::hexfloat << " (" << to4 << ")\n" << std::defaultfloat;
 
        if (std::fetestexcept(FE_OVERFLOW))
            std::cout << "   raised FE_OVERFLOW\n";
        if (std::fetestexcept(FE_INEXACT))
            std::cout << "   raised FE_INEXACT\n";
    } // end FENV_ACCESS block
 
    float from5 = 0.0, to5 = std::nextafter(from5, -0.0);
    std::cout << "std::nextafter(+0.0, -0.0) gives " << std::fixed << to5 << '\n';
 
    auto precision_loss_demo = []<std::floating_point Fp>(const auto rem, const Fp start)
    {
        std::cout << rem;
        for (Fp from = start, to, Δ;
            (Δ = (to = std::nextafter(from, +INFINITY)) - from) < Fp(10.0);
            from *= Fp(10.0))
            std::cout << "nextafter(" << std::scientific << std::setprecision(0) << from 
                      << ", INF) gives " << std::fixed << std::setprecision(6) << to
                      << "; Δ = " << Δ << '\n';
    };
 
    precision_loss_demo("\nPrecision loss demo for float:\n", 10.0f);
    precision_loss_demo("\nPrecision loss demo for double:\n", 10.0e9);
    precision_loss_demo("\nPrecision loss demo for long double:\n", 10.0e17L);
}
```

## See also
- [C documentation](/c/numeric/math/nexttoward/)
