---
title: "std::comp_ellint_2, std::comp_ellint_2f, std::comp_ellint_2l"
source_path: "cpp/experimental/special_functions/comp_ellint_2"
category: "experimental"
---

1) Computes the [complete elliptic integral of the second kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_second_kind) of arg.

## Declarations
```cpp
double comp_ellint_2( double arg );
double comp_ellint_2( float arg );
double comp_ellint_2( long double arg );
float comp_ellint_2f( float arg );
long double comp_ellint_2l( long double arg );
```

```cpp
double comp_ellint_2( IntegralType arg );
```

## Parameters
- `arg`: value of a floating-point or integral type

## Return value
If no errors occur, value of the complete elliptic integral of the second kind of arg, that is ellint_2(arg, π/2), is returned.

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/1_60_0/libs/math/doc/html/math_toolkit/ellint/ellint_2.html).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
int main()
{
    double hpi = std::acos(-1) / 2;
    std::cout << "E(0) = " << std::comp_ellint_2(0) << '\n'
              << "π/2 = " << hpi << '\n'
              << "E(0.5) = " << std::comp_ellint_2(0.5) << '\n'
              << "E(0.5, π/2) = " << std::ellint_2(0.5, hpi) << '\n';
}
```
