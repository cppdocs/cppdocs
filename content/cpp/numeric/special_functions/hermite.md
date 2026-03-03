---
title: "std::hermite, std::hermitef, std::hermitel"
source_path: "cpp/numeric/special_functions/hermite"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the (physicist's) [Hermite polynomials](https://en.wikipedia.org/wiki/Hermite_polynomials) of the degree n and argument x.The library provides overloads of std::hermite for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
double hermite ( unsigned int n, double x );
float hermite ( unsigned int n, float x );
long double hermite ( unsigned int n, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ hermite( unsigned int n,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float hermitef( unsigned int n, float x );
```
_(since C++17)_

```cpp
long double hermitel( unsigned int n, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double hermite ( unsigned int n, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the degree of the polynomial
- `x`: the argument, a floating-point or integer value

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/hermite.html).

The Hermite polynomials are the polynomial solutions of the equation
u,,-2xu, = -2nu.

The first few are:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::hermite(int_num, num) has the same effect as std::hermite(int_num, static_cast<double>(num)).

## Example
```cpp
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
- [laguerrelaguerreflaguerrel](/cpp/numeric/special_functions/laguerre/)
- [legendrelegendreflegendrel](/cpp/numeric/special_functions/legendre/)
