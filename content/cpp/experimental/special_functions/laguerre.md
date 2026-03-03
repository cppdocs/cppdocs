---
title: "std::laguerre, std::laguerref, std::laguerrel"
source_path: "cpp/experimental/special_functions/laguerre"
category: "experimental"
---

1) Computes the non-associated [Laguerre polynomials](https://en.wikipedia.org/wiki/Laguerre_polynomials) of the degree n and argument x.

## Declarations
```cpp
double laguerre( unsigned int n, double x );
double laguerre( unsigned int n, float x );
double laguerre( unsigned int n, long double x );
float laguerref( unsigned int n, float x );
long double laguerrel( unsigned int n, long double x );
```

```cpp
double laguerre( unsigned int n, IntegralType x );
```

## Parameters
- `n`: the degree of the polynomial, a value of unsigned integer type
- `x`: the argument, a value of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/laguerre.html).

The Laguerre polynomials are the polynomial solutions of the equation xy,, + (1 - x)y, + ny = 0.

The first few are:

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
double L1(double x)
{
    return -x + 1;
}
 
double L2(double x)
{
    return 0.5 * (x * x - 4 * x + 2);
}
 
int main()
{
    // spot-checks
    std::cout << std::laguerre(1, 0.5) << '=' << L1(0.5) << '\n'
              << std::laguerre(2, 0.5) << '=' << L2(0.5) << '\n';
}
```

## See also
- [assoc_laguerreassoc_laguerrefassoc_laguerrel](/cpp/experimental/special_functions/assoc_laguerre/)
