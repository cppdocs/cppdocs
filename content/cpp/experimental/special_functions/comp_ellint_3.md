---
title: "std::comp_ellint_3, std::comp_ellint_3f, std::comp_ellint_3l"
source_path: "cpp/experimental/special_functions/comp_ellint_3"
category: "experimental"
---

1) Computes the [complete elliptic integral of the third kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_third_kind) of arg.

## Declarations
```cpp
double comp_ellint_3( double k, double nu );
float comp_ellint_3( float k, float nu );
long double comp_ellint_3( long double k, long double nu );
float comp_ellint_3f( float k, float nu );
long double comp_ellint_3l( long double k, long double nu );
```

```cpp
double comp_ellint_3( IntegralType k, IntegralType nu );
```

## Parameters
- `nu`: value of a floating-point or integral type
- `k`: value of a floating-point or integral type

## Return value
If no errors occur, value of the complete elliptic integral of the second kind of arg, that is ellint_3(k, nu, π/2), is returned.

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/1_60_0/libs/math/doc/html/math_toolkit/ellint/ellint_3.html).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
int main()
{
    double hpi = std::acos(-1) / 2;
    std::cout << "Π(0, 0.75) = " << std::comp_ellint_3(0, 0.75) << '\n'
              << "π/2 = " << hpi << '\n'
              << "Π(0.5, 0.75) = " << std::comp_ellint_3(0.5, 0.75) << '\n'
              << "Π(0.5, 0.75, π/2) = " << std::ellint_3(0.5, 0.75, hpi) << '\n';
}
```
