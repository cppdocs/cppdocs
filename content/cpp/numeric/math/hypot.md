---
title: "std::hypot, std::hypotf, std::hypotl"
source_path: "cpp/numeric/math/hypot"
header: "<cmath>"
category: "numeric"
since: "C++17"
---

1-3) Computes the square root of the sum of the squares of x and y, without undue overflow or underflow at intermediate stages of the computation.The library provides overloads of std::hypot for all cv-unqualified floating-point types as the type of the parameters x and y.(since C++23)

## Declarations
```cpp
float hypot ( float x, float y );
double hypot ( double x, double y );
long double hypot ( long double x, long double y );
```
_(since C++11) (until C++23)_

```cpp
/*floating-point-type*/
hypot ( /*floating-point-type*/ x,
/*floating-point-type*/ y );
```
_(since C++23) (constexpr since C++26)_

```cpp
float hypotf( float x, float y );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double hypotl( long double x, long double y );
```
_(since C++11) (constexpr since C++26)_

```cpp
float hypot ( float x, float y, float z );
double hypot ( double x, double y, double z );
long double hypot ( long double x, long double y, long double z );
```
_(since C++17) (until C++23)_

```cpp
/*floating-point-type*/
hypot ( /*floating-point-type*/ x,
/*floating-point-type*/ y,
/*floating-point-type*/ z );
```
_(since C++23) (constexpr since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, Arithmetic2 >
/*common-floating-point-type*/
hypot ( Arithmetic1 x, Arithmetic2 y );
```
_(since C++11) (constexpr since C++26)_

```cpp
template< class Arithmetic1, Arithmetic2, Arithmetic3 >
/*common-floating-point-type*/
hypot ( Arithmetic1 x, Arithmetic2 y, Arithmetic3 z );
```
_(since C++17)_

## Parameters
- `x, y, z`: floating-point or integer values

## Return value
If a range error due to overflow occurs, [+HUGE_VAL](/cpp/numeric/math/huge_val/), +HUGE_VALF, or +HUGE_VALL is returned.

## Notes
Implementations usually guarantee precision of less than 1 [ulp](https://en.wikipedia.org/wiki/Unit_in_the_last_place) (Unit in the Last Place — Unit of Least Precision): [GNU](https://sourceware.org/git/?p=glibc.git;a=blob_plain;f=sysdeps/ieee754/dbl-64/e_hypot.c), [BSD](https://www.freebsd.org/cgi/cvsweb.cgi/src/lib/msun/src/e_hypot.c).

std::hypot(x, y) is equivalent to std::abs([std::complex](/cpp/numeric/complex/)<double>(x, y)).

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9799919799/functions/hypot.html) that underflow may only occur when both arguments are subnormal and the correct result is also subnormal (this forbids naive implementations).

Distance between two points (x1, y1, z1) and (x2, y2, z2) on 3D space can be calculated using 3-argument overload of std::hypot as std::hypot(x2 - x1, y2 - y1, z2 - z1).

The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their first argument num1, second argument num2 and the optional third argument num3:

If num1, num2 and num3 have arithmetic types, then

where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) among the types of num1, num2 and num3, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cfloat>
#include <cmath>
#include <cstring>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
struct Point3D { float x, y, z; };
 
int main()
{
    // typical usage
    std::cout << "(1,1) cartesian is (" << std::hypot(1, 1)
              << ',' << std::atan2(1,1) << ") polar\n";
 
    Point3D a{3.14, 2.71, 9.87}, b{1.14, 5.71, 3.87};
    // C++17 has 3-argument hypot overload:
    std::cout << "distance(a,b) = "
              << std::hypot(a.x - b.x, a.y - b.y, a.z - b.z) << '\n';
 
    // special values
    std::cout << "hypot(NAN,INFINITY) = " << std::hypot(NAN, INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "hypot(DBL_MAX,DBL_MAX) = " << std::hypot(DBL_MAX, DBL_MAX) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno = ERANGE " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [powpowfpowl](/cpp/numeric/math/pow/)
- [sqrtsqrtfsqrtl](/cpp/numeric/math/sqrt/)
- [cbrtcbrtfcbrtl](/cpp/numeric/math/cbrt/)
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [C documentation](/c/numeric/math/hypot/)
