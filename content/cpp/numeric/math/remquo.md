---
title: "std::remquo, std::remquof, std::remquol"
source_path: "cpp/numeric/math/remquo"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the floating-point remainder of the division operation x / y as the [std::remainder()](/cpp/numeric/math/remainder/) function does. Additionally, the sign and at least the three of the last bits of x / y will be stored in quo, sufficient to determine the octant of the result within a period.The library provides overloads of std::remquo for all cv-unqualified floating-point types as the type of the parameters x and y.(since C++23)

## Declarations
```cpp
float remquo ( float x, float y, int* quo );
double remquo ( double x, double y, int* quo );
long double remquo ( long double x, long double y, int* quo );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
remquo ( /* floating-point-type */ x,
/* floating-point-type */ y, int* quo );
```
_(since C++23)_

```cpp
float remquof( float x, float y, int* quo );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double remquol( long double x, long double y, int* quo );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
remquo( Arithmetic1 x, Arithmetic2 y, int* quo );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values
- `quo`: pointer to int to store the sign and some bits of x / y

## Return value
If successful, returns the floating-point remainder of the division x / y as defined in [std::remainder](/cpp/numeric/math/remainder/), and stores, in *quo, the sign and at least three of the least significant bits of x / y (formally, stores a value whose sign is the sign of x / y and whose magnitude is congruent modulo 2n to the magnitude of the integral quotient of x / y, where n is an implementation-defined integer greater than or equal to 3).

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remquo.html) that a domain error occurs if x is infinite or y is zero.

This function is useful when implementing periodic functions with the period exactly representable as a floating-point value: when calculating sin(πx) for a very large x, calling [std::sin](/cpp/numeric/math/sin/) directly may result in a large error, but if the function argument is first reduced with std::remquo, the low-order bits of the quotient may be used to determine the sign and the octant of the result within the period, while the remainder may be used to calculate the value with high precision.

On some platforms this operation is supported by hardware (and, for example, on Intel CPUs, FPREM1 leaves exactly 3 bits of precision in the quotient when complete).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::remquo(num1, num2, quo) has the same effect as std::remquo(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2), quo), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
const double pi = std::acos(-1); // or std::numbers::pi since C++20
 
double cos_pi_x_naive(double x)
{
    return std::cos(pi * x);
}
 
// the period is 2, values are (0;0.5) positive, (0.5;1.5) negative, (1.5,2) positive
double cos_pi_x_smart(double x)
{
    int quadrant;
    double rem = std::remquo(x, 1, &quadrant);
    quadrant = static_cast<unsigned>(quadrant) % 2; // The period is 2.
    return quadrant == 0 ?  std::cos(pi * rem)
                         : -std::cos(pi * rem);
}
 
int main()
{
    std::cout << std::showpos
              << "naive:\n"
              << "  cos(pi * 0.25) = " << cos_pi_x_naive(0.25) << '\n'
              << "  cos(pi * 1.25) = " << cos_pi_x_naive(1.25) << '\n'
              << "  cos(pi * 2.25) = " << cos_pi_x_naive(2.25) << '\n'
              << "smart:\n"
              << "  cos(pi * 0.25) = " << cos_pi_x_smart(0.25) << '\n'
              << "  cos(pi * 1.25) = " << cos_pi_x_smart(1.25) << '\n'
              << "  cos(pi * 2.25) = " << cos_pi_x_smart(2.25) << '\n'
              << "naive:\n"
              << "  cos(pi * 1000000000000.25) = "
              << cos_pi_x_naive(1000000000000.25) << '\n'
              << "  cos(pi * 1000000000001.25) = "
              << cos_pi_x_naive(1000000000001.25) << '\n'
              << "smart:\n"
              << "  cos(pi * 1000000000000.25) = "
              << cos_pi_x_smart(1000000000000.25) << '\n'
              << "  cos(pi * 1000000000001.25) = "
              << cos_pi_x_smart(1000000000001.25) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    int quo;
    std::cout << "remquo(+Inf, 1) = " << std::remquo(INFINITY, 1, &quo) << '\n';
    if (fetestexcept(FE_INVALID))
        std::cout << "  FE_INVALID raised\n";
}
```

## See also
- [div(int)ldivlldiv](/cpp/numeric/math/div/)
- [fmodfmodffmodl](/cpp/numeric/math/fmod/)
- [remainderremainderfremainderl](/cpp/numeric/math/remainder/)
- [C documentation](/c/numeric/math/remquo/)
