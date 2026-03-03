---
title: "std::comp_ellint_1, std::comp_ellint_1f, std::comp_ellint_1l"
source_path: "cpp/experimental/special_functions/comp_ellint_1"
category: "experimental"
---

1) Computes the [complete elliptic integral of the first kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind) of arg.

## Declarations
```cpp
double comp_ellint_1( double arg );
double comp_ellint_1( float arg );
double comp_ellint_1( long double arg );
float comp_ellint_1f( float arg );
long double comp_ellint_1l( long double arg );
```

```cpp
double comp_ellint_1( IntegralType arg );
```

## Parameters
- `arg`: value of a floating-point or integral type

## Return value
If no errors occur, value of the complete elliptic integral of the first kind of arg, that is ellint_1(arg, π/2), is returned.

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/1_60_0/libs/math/doc/html/math_toolkit/ellint/ellint_1.html).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
int main()
{
    double hpi = std::acos(-1) / 2;
    std::cout << "K(0) = " << std::comp_ellint_1(0) << '\n'
              << "π/2 = " << hpi << '\n'
              << "K(0.5) = " << std::comp_ellint_1(0.5) << '\n'
              << "F(0.5, π/2) = " << std::ellint_1(0.5, hpi) << '\n';
}
```
