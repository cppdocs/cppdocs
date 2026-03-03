---
title: "std::cyl_bessel_k, std::cyl_bessel_kf, std::cyl_bessel_kl"
source_path: "cpp/numeric/special_functions/cyl_bessel_k"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [irregular modified cylindrical Bessel function](https://en.wikipedia.org/wiki/Bessel_function#Modified_Bessel_functions:_I.CE.B1_.2C_K.CE.B1) (also known as modified Bessel function of the second kind) of nu and x.The library provides overloads of std::cyl_bessel_k for all cv-unqualified floating-point types as the type of the parameters nu and x.(since C++23)

## Declarations
```cpp
float cyl_bessel_k ( float nu, float x );
double cyl_bessel_k ( double nu, double x );
long double cyl_bessel_k ( long double nu, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ cyl_bessel_k( /* floating-point-type */ nu,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float cyl_bessel_kf( float nu, float x );
```
_(since C++17)_

```cpp
long double cyl_bessel_kl( long double nu, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
cyl_bessel_k( Arithmetic1 nu, Arithmetic2 x );
```
_(since C++17)_

## Parameters
- `nu`: the order of the function
- `x`: the argument of the function

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/bessel/mbessel.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::cyl_bessel_k(num1, num2) has the same effect as std::cyl_bessel_k(static_cast</* common-floating-point-type */>(num1),static_cast</* common-floating-point-type */>(num2)), where /* common-floating-point-type */ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
 
int main()
{
    double pi = std::numbers::pi;
    const double x = 1.2345;
 
    // spot check for nu == 0.5
    std::cout << "K_.5(" << x << ") = " << std::cyl_bessel_k(.5, x) << '\n'
              << "calculated via I = "
              << (pi / 2) * (std::cyl_bessel_i(-.5, x)
                 - std::cyl_bessel_i(.5, x)) / std::sin(.5 * pi) << '\n';
}
```

## See also
- [cyl_bessel_icyl_bessel_ifcyl_bessel_il](/cpp/numeric/special_functions/cyl_bessel_i/)
- [cyl_bessel_jcyl_bessel_jfcyl_bessel_jl](/cpp/numeric/special_functions/cyl_bessel_j/)
