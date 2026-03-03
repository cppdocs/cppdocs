---
title: "std::comp_ellint_2, std::comp_ellint_2f, std::comp_ellint_2l"
source_path: "cpp/numeric/special_functions/comp_ellint_2"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [complete elliptic integral of the second kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_second_kind) of k.The library provides overloads of std::comp_ellint_2 for all cv-unqualified floating-point types as the type of the parameter k.(since C++23)

## Declarations
```cpp
float comp_ellint_2 ( float k );
double comp_ellint_2 ( double k );
long double comp_ellint_2 ( long double k );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ comp_ellint_2( /* floating-point-type */ k );
```
_(since C++23)_

```cpp
float comp_ellint_2f( float k );
```
_(since C++17)_

```cpp
long double comp_ellint_2l( long double k );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double comp_ellint_2 ( Integer k );
```
_(since C++17)_

## Parameters
- `k`: elliptic modulus or eccentricity (a floating-point or integer value)

## Return value
If no errors occur, value of the complete elliptic integral of the second kind of k, that is std::ellint_2(k, π/2), is returned.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/ellint/ellint_2.html).

The perimeter of an ellipse with eccentricity k and semimajor axis a equals 4aE(k), where E is std::comp_ellint_2. When eccentricity equals 0, the ellipse degenerates to a circle with radius a and the perimeter equals 2πa, so E(0) = π/2. When eccentricity equals 1, the ellipse degenerates to a line of length 2a, whose perimeter is 4a, so E(1) = 1.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::comp_ellint_2(num) has the same effect as std::comp_ellint_2(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
 
int main()
{
    constexpr double hpi = std::numbers::pi / 2.0;
 
    std::cout << "E(0) = " << std::comp_ellint_2(0) << '\n'
              << "π/2 = " << hpi << '\n'
              << "E(1) = " << std::comp_ellint_2(1) << '\n'
              << "E(1, π/2) = " << std::ellint_2(1, hpi) << '\n';
}
```

## See also
- [ellint_2ellint_2fellint_2l](/cpp/numeric/special_functions/ellint_2/)
