---
title: "std::cos, std::cosf, std::cosl"
source_path: "cpp/numeric/math/cos"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the cosine of num (measured in radians).The library provides overloads of std::cos for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float cos ( float num );
double cos ( double num );
long double cos ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
cos ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float cosf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double cosl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
cos ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double cos ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value representing angle in radians

## Return value
If no errors occur, the cosine of num (cos(num)) in the range [-1.0,+1.0], is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C, but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/cos.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::cos(num) has the same effect as std::cos(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <numbers>
 
// #pragma STDC FENV_ACCESS ON
 
constexpr double pi = std::numbers::pi; // or std::acos(-1) before C++20
 
constexpr double your_cos(double x)
{
    double cos{1}, pow{x};
    for (auto fac{1ull}, n{1ull}; n != 19; fac *= ++n, pow *= x)
        if ((n & 1) == 0)
            cos += (n & 2 ? -pow : pow) / fac;
    return cos;
}
 
int main()
{
    std::cout << std::setprecision(10) << std::showpos
              << "Typical usage:\n"
              << "std::cos(pi/3) = " << std::cos(pi / 3) << '\n'
              << "your cos(pi/3) = " << your_cos(pi / 3) << '\n'
              << "std::cos(pi/2) = " << std::cos(pi / 2) << '\n'
              << "your cos(pi/2) = " << your_cos(pi / 2) << '\n'
              << "std::cos(-3*pi/4) = " << std::cos(-3 * pi / 4) << '\n'
              << "your cos(-3*pi/4) = " << your_cos(-3 * pi / 4) << '\n'
              << "Special values:\n"
              << "std::cos(+0) = " << std::cos(0.0) << '\n'
              << "std::cos(-0) = " << std::cos(-0.0) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "cos(INFINITY) = " << std::cos(INFINITY) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [sinsinfsinl](/cpp/numeric/math/sin/)
- [tantanftanl](/cpp/numeric/math/tan/)
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [cos(std::complex)](/cpp/numeric/complex/cos/)
- [cos(std::valarray)](/cpp/numeric/valarray/cos/)
- [C documentation](/c/numeric/math/cos/)
