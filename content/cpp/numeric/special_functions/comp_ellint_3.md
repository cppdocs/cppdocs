---
title: "std::comp_ellint_3, std::comp_ellint_3f, std::comp_ellint_3l"
source_path: "cpp/numeric/special_functions/comp_ellint_3"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [complete elliptic integral of the third kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_third_kind) of the arguments k and nu.The library provides overloads of std::comp_ellint_3 for all cv-unqualified floating-point types as the type of the parameters k and nu.(since C++23)

## Declarations
```cpp
float comp_ellint_3 ( float k, float nu );
double comp_ellint_3 ( double k, double nu );
long double comp_ellint_3 ( long double k, long double nu );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ comp_ellint_3( /* floating-point-type */ k,
/* floating-point-type */ nu );
```
_(since C++23)_

```cpp
float comp_ellint_3f( float k, float nu );
```
_(since C++17)_

```cpp
long double comp_ellint_3l( long double k, long double nu );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
comp_ellint_3( Arithmetic1 k, Arithmetic2 nu );
```
_(since C++17)_

## Parameters
- `k`: elliptic modulus or eccentricity (a floating-point or integer value)
- `nu`: elliptic characteristic (a floating-point or integer value)

## Return value
If no errors occur, value of the complete elliptic integral of the third kind of k and nu, that is [std::ellint_3](/cpp/numeric/special_functions/ellint_3/)(k, nu, π/2), is returned.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also available in [boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/ellint/ellint_3.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::comp_ellint_3(num1, num2) has the same effect as std::comp_ellint_3(static_cast</* common-floating-point-type */>(num1),static_cast</* common-floating-point-type */>(num2)), where /* common-floating-point-type */ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::fixed
              << "Π(0.5,0) = " << std::comp_ellint_3(0.5, 0) << '\n'
              << "K(0.5)   = " << std::comp_ellint_1(0.5) << '\n'
              << "Π(0,0)   = " << std::comp_ellint_3(0, 0) << '\n'
              << "π/2      = " << std::acos(-1) / 2 << '\n'
              << "Π(0.5,1) = " << std::comp_ellint_3(0.5, 1) << '\n';
}
```

## See also
- [ellint_3ellint_3fellint_3l](/cpp/numeric/special_functions/ellint_3/)
