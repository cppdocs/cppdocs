---
title: "std::sin, std::sinf, std::sinl"
source_path: "cpp/numeric/math/sin"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the sine of num (measured in radians).The library provides overloads of std::sin for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float sin ( float num );
double sin ( double num );
long double sin ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
sin ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float sinf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double sinl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
sin ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double sin ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value representing angle in radians

## Return value
If no errors occur, the sine of num (sin(num)) in the range [-1,+1], is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C (to which C++ defers), but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/sin.html).

POSIX also specifies that in case of underflow, num is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/cpp/types/climits/), [FLT_MIN](/cpp/types/climits/), and [LDBL_MIN](/cpp/types/climits/) is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::sin(num) has the same effect as std::sin(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <iomanip>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
const double pi = std::acos(-1); // or std::numbers::pi since C++20
 
constexpr double your_sin(double x)
{
    double sin{0}, pow{x};
    for (auto fac{1LLU}, n{1ULL}; n != 20; fac *= ++n, pow *= x)
        if (n & 1)
            sin += (n & 2 ? -pow : pow) / fac;
    return sin;
}
 
int main()
{
    std::cout << std::setprecision(10) << std::showpos
              << "Typical usage:\n"
              << "std::sin(pi/6) = " << std::sin(pi / 6) << '\n'
              << "your sin(pi/6) = " << your_sin(pi / 6) << '\n'
              << "std::sin(pi/2) = " << std::sin(pi / 2) << '\n'
              << "your sin(pi/2) = " << your_sin(pi / 2) << '\n'
              << "std::sin(-3*pi/4) = " << std::sin(-3 * pi / 4) << '\n'
              << "your sin(-3*pi/4) = " << your_sin(-3 * pi / 4) << '\n'
              << "Special values:\n"
              << "std::sin(+0) = " << std::sin(0.0) << '\n'
              << "std::sin(-0) = " << std::sin(-0.0) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "std::sin(INFINITY) = " << std::sin(INFINITY) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [coscosfcosl](/cpp/numeric/math/cos/)
- [tantanftanl](/cpp/numeric/math/tan/)
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [sin(std::complex)](/cpp/numeric/complex/sin/)
- [sin(std::valarray)](/cpp/numeric/valarray/sin/)
- [C documentation](/c/numeric/math/sin/)
