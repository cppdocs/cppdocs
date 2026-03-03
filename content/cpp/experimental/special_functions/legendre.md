---
title: "std::legendre, std::legendref, std::legendrel"
source_path: "cpp/experimental/special_functions/legendre"
category: "experimental"
---

1) Computes the unassociated [Legendre polynomials](https://en.wikipedia.org/wiki/Legendre_polynomials) of the degree n and argument x.

## Declarations
```cpp
double legendre( unsigned int n, double x );
double legendre( unsigned int n, float x );
double legendre( unsigned int n, long double x );
float legendref( unsigned int n, float x );
long double legendrel( unsigned int n, long double x );
```

```cpp
double legendre( unsigned int n, IntegralType x );
```

## Parameters
- `n`: the degree of the polynomial
- `x`: the argument, a value of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/legendre.html).

The first few Legendre polynomials are:

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
double P3(double x)
{
    return 0.5 * (5 * std::pow(x, 3) - 3 * x);
}
 
double P4(double x)
{
    return 0.125 * (35 * std::pow(x, 4) - 30 * x * x + 3);
}
 
int main()
{
    // spot-checks
    std::cout << std::legendre(3, 0.25) << '=' << P3(0.25) << '\n'
              << std::legendre(4, 0.25) << '=' << P4(0.25) << '\n';
}
```

## See also
- [laguerrelaguerreflaguerrel](/cpp/experimental/special_functions/laguerre/)
- [hermitehermitefhermitel](/cpp/experimental/special_functions/hermite/)
