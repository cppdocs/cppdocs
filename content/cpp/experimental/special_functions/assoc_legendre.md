---
title: "std::assoc_legendre, std::assoc_legendref, std::assoc_legendrel"
source_path: "cpp/experimental/special_functions/assoc_legendre"
category: "experimental"
---

1) Computes the [associated Legendre polynomials](https://en.wikipedia.org/wiki/Associated_Legendre_polynomials) of the degree n, order m, and argument x.

## Declarations
```cpp
double assoc_legendre( unsigned int n, unsigned int m, double x );
double assoc_legendre( unsigned int n, unsigned int m, float x );
double assoc_legendre( unsigned int n, unsigned int m, long double x );
float assoc_legendref( unsigned int n, unsigned int m, float x );
long double assoc_legendrel( unsigned int n, unsigned int m, long double x );
```

```cpp
double assoc_legendre( unsigned int n, unsigned int m, IntegralType x );
```

## Parameters
- `n`: the degree of the polynomial, a value of unsigned integer type
- `m`: the order of the polynomial, a value of unsigned integer type
- `x`: the argument, a value of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/legendre.html).

The first few associated Legendre polynomials are:

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
double P20(double x)
{
    return 0.5 * (3 * x * x - 1);
}
 
double P21(double x)
{
    return -3.0 * x * std::sqrt(1 - x * x);
}
 
double P22(double x)
{
    return 3 * (1 - x * x);
}
 
int main()
{
    // spot-checks
    std::cout << std::assoc_legendre(2, 0, 0.5) << '=' << P20(0.5) << '\n'
              << std::assoc_legendre(2, 1, 0.5) << '=' << P21(0.5) << '\n'
              << std::assoc_legendre(2, 2, 0.5) << '=' << P22(0.5) << '\n';
}
```

## See also
- [legendrelegendreflegendrel](/cpp/experimental/special_functions/legendre/)
