---
title: "std::assoc_laguerre, std::assoc_laguerref, std::assoc_laguerrel"
source_path: "cpp/experimental/special_functions/assoc_laguerre"
category: "experimental"
---

1) Computes the [associated Laguerre polynomials](https://en.wikipedia.org/wiki/Laguerre_polynomials#Generalized_Laguerre_polynomials) of the degree n, order m, and argument x.

## Declarations
```cpp
double assoc_laguerre ( unsigned int n, unsigned int m, double x );
double assoc_laguerre ( unsigned int n, unsigned int m, float x );
double assoc_laguerre ( unsigned int n, unsigned int m, long double x );
float assoc_laguerref( unsigned int n, unsigned int m, float x );
long double assoc_laguerrel( unsigned int n, unsigned int m, long double x );
```

```cpp
double assoc_laguerre ( unsigned int n, unsigned int m, IntegralType x );
```

## Parameters
- `n`: the degree of the polynomial, a value of unsigned integer type
- `m`: the order of the polynomial, a value of unsigned integer type
- `x`: the argument, a value of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/laguerre.html).

The associated Laguerre polynomials are the polynomial solutions of the equation xy,, + (m + 1 - x)y, + ny = 0.

The first few are:

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
double L1(unsigned m, double x)
{
    return -x + m + 1;
}
 
double L2(unsigned m, double x)
{
    return 0.5 * (x * x - 2 * (m + 2) * x + (m + 1) * (m + 2));
}
 
int main()
{
    // spot-checks
    std::cout << std::assoc_laguerre(1, 10, 0.5) << '=' << L1(10, 0.5) << '\n'
              << std::assoc_laguerre(2, 10, 0.5) << '=' << L2(10, 0.5) << '\n';
}
```

## See also
- [laguerrelaguerreflaguerrel](/cpp/experimental/special_functions/laguerre/)
