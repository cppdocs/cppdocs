---
title: "std::cyl_neumann, std::cyl_neumannf, std::cyl_neumannl"
source_path: "cpp/numeric/special_functions/cyl_neumann"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [cylindrical Neumann function](https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1) (also known as Bessel function of the second kind or Weber function) of nu and x.The library provides overloads of std::cyl_neumann for all cv-unqualified floating-point types as the type of the parameters nu and x.(since C++23)

## Declarations
```cpp
float cyl_neumann ( float nu, float x );
double cyl_neumann ( double nu, double x );
long double cyl_neumann ( long double nu, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ cyl_neumann( /* floating-point-type */ nu,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float cyl_neumannf( float nu, float x );
```
_(since C++17)_

```cpp
long double cyl_neumannl( long double nu, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
cyl_neumann( Arithmetic1 nu, Arithmetic2 x );
```
_(since C++17)_

## Parameters
- `nu`: the order of the function
- `x`: the argument of the function

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also available in [boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/bessel/bessel_first.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::cyl_neumann(num1, num2) has the same effect as std::cyl_neumann(static_cast</* common-floating-point-type */>(num1),static_cast</* common-floating-point-type */>(num2)), where /* common-floating-point-type */ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cassert>
#include <cmath>
#include <iostream>
#include <numbers>
 
const double π = std::numbers::pi; // or std::acos(-1) in pre C++20
 
// To calculate the cylindrical Neumann function via cylindrical Bessel function of the
// first kind we have to implement J, because the direct invocation of the
// std::cyl_bessel_j(nu, x), per formula above,
// for negative nu raises 'std::domain_error': Bad argument in __cyl_bessel_j.
 
double J_neg(double nu, double x)
{
    return std::cos(-nu * π) * std::cyl_bessel_j(-nu, x)
          -std::sin(-nu * π) * std::cyl_neumann(-nu, x);
}
 
double J_pos(double nu, double x)
{
    return std::cyl_bessel_j(nu, x);
}
 
double J(double nu, double x)
{
    return nu < 0.0 ? J_neg(nu, x) : J_pos(nu, x);
}
 
int main()
{
    std::cout << "spot checks for nu == 0.5\n" << std::fixed << std::showpos;
    const double nu = 0.5;
    for (double x = 0.0; x <= 2.0; x += 0.333)
    {
        const double n = std::cyl_neumann(nu, x);
        const double j = (J(nu, x) * std::cos(nu * π) - J(-nu, x)) / std::sin(nu * π);
        std::cout << "N_.5(" << x << ") = " << n << ", calculated via J = " << j << '\n';
        assert(n == j);
    }
}
```

## See also
- [cyl_bessel_icyl_bessel_ifcyl_bessel_il](/cpp/numeric/special_functions/cyl_bessel_i/)
- [cyl_bessel_jcyl_bessel_jfcyl_bessel_jl](/cpp/numeric/special_functions/cyl_bessel_j/)
- [cyl_bessel_kcyl_bessel_kfcyl_bessel_kl](/cpp/numeric/special_functions/cyl_bessel_k/)
