---
title: "std::hermite, std::hermitef, std::hermitel"
source_path: "cpp/experimental/special_functions/hermite"
category: "experimental"
---

1) Computes the (physicist's) [Hermite polynomials](https://en.wikipedia.org/wiki/Hermite_polynomials) of the degree n and argument x.

## Declarations
```cpp
double hermite( unsigned int n, double x );
double hermite( unsigned int n, float x );
double hermite( unsigned int n, long double x );
float hermitef( unsigned int n, float x );
long double hermitel( unsigned int n, long double x );
```

```cpp
double hermite( unsigned int n, IntegralType x );
```

## Parameters
- `n`: the degree of the polynomial
- `x`: the argument, a value of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/hermite.html).

The Hermite polynomials are the polynomial solutions of the equation
u,, - 2xu, = -2nu.

The first few are:

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
double H3(double x)
{
    return 8 * std::pow(x, 3) - 12 * x;
}
 
double H4(double x)
{
    return 16 * std::pow(x, 4) - 48 * x * x + 12;
}
 
int main()
{
    // spot-checks
    std::cout << std::hermite(3, 10) << '=' << H3(10) << '\n'
              << std::hermite(4, 10) << '=' << H4(10) << '\n';
}
```

## See also
- [laguerrelaguerreflaguerrel](/cpp/experimental/special_functions/laguerre/)
- [legendrelegendreflegendrel](/cpp/experimental/special_functions/legendre/)
