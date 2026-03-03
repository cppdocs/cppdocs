---
title: "std::riemann_zeta, std::riemann_zetaf, std::riemann_zetal"
source_path: "cpp/experimental/special_functions/riemann_zeta"
category: "experimental"
---

1) Computes the [Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function) of arg.

## Declarations
```cpp
double riemann_zeta( double arg );
double riemann_zeta( float arg );
double riemann_zeta( long double arg );
float riemann_zetaf( float arg );
long double riemann_zetal( long double arg );
```

```cpp
double riemann_zeta( IntegralType arg );
```

## Parameters
- `arg`: value of a floating-point or integral type

## Return value
If no errors occur, value of the Riemann zeta function of arg, ζ(arg), defined for the entire real axis:

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/1_60_0/libs/math/doc/html/math_toolkit/zetas/zeta.html).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
int main()
{
    // spot checks for well-known values
    std::cout << "ζ(-1) = " << std::riemann_zeta(-1) << '\n'
              << "ζ(0) = " << std::riemann_zeta(0) << '\n'
              << "ζ(1) = " << std::riemann_zeta(1) << '\n'
              << "ζ(0.5) = " << std::riemann_zeta(0.5) << '\n'
              << "ζ(2) = " << std::riemann_zeta(2) << ' '
              << "(π²/6 = " << std::pow(std::acos(-1), 2) / 6 << ")\n";
}
```
