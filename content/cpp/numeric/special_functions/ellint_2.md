---
title: "std::ellint_2, std::ellint_2f, std::ellint_2l"
source_path: "cpp/numeric/special_functions/ellint_2"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [incomplete elliptic integral of the second kind](https://en.wikipedia.org/wiki/Elliptic_integral#Incomplete_elliptic_integral_of_the_second_kind) of k and phi.The library provides overloads of std::ellint_2 for all cv-unqualified floating-point types as the type of the parameters k and phi.(since C++23)

## Declarations
```cpp
float ellint_2 ( float k, float phi );
double ellint_2 ( double k, double phi );
long double ellint_2 ( long double k, long double phi );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ ellint_2( /* floating-point-type */ k,
/* floating-point-type */ phi );
```
_(since C++23)_

```cpp
float ellint_2f( float k, float phi );
```
_(since C++17)_

```cpp
long double ellint_2l( long double k, long double phi );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */
ellint_2( Arithmetic1 k, Arithmetic2 phi );
```
_(since C++17)_

## Parameters
- `k`: elliptic modulus or eccentricity (a floating-point or integer value)
- `phi`: Jacobi amplitude (a floating-point or integer value, measured in radians)

## Return value
If no errors occur, value of the incomplete elliptic integral of the second kind of k and phi, that is ∫phi0√1-k2sin2θdθ, is returned.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also available in [boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/ellint/ellint_2.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::ellint2(num1, num2) has the same effect as std::ellint2(static_cast</* common-floating-point-type */>(num1),static_cast</* common-floating-point-type */>(num2)), where /* common-floating-point-type */ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
 
int main()
{
    const double hpi = std::numbers::pi / 2.0;
 
    std::cout << "E(0,π/2)  = " << std::ellint_2(0, hpi) << '\n'
              << "E(0,-π/2) = " << std::ellint_2(0, -hpi) << '\n'
              << "π/2       = " << hpi << '\n'
              << "E(0.7,0)  = " << std::ellint_2(0.7, 0) << '\n'
              << "E(1,π/2)  = " << std::ellint_2(1, hpi) << '\n';
}
```

## See also
- [comp_ellint_2comp_ellint_2fcomp_ellint_2l](/cpp/numeric/special_functions/comp_ellint_2/)
