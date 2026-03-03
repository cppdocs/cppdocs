---
title: "std::legendre, std::legendref, std::legendrel"
source_path: "cpp/numeric/special_functions/legendre"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the unassociated [Legendre polynomials](https://en.wikipedia.org/wiki/Legendre_polynomials) of the degree n and argument x.The library provides overloads of std::legendre for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
float legendre ( unsigned int n, float x );
double legendre ( unsigned int n, double x );
long double legendre ( unsigned int n, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ legendre( unsigned int n,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float legendref( unsigned int n, float x );
```
_(since C++17)_

```cpp
long double legendrel( unsigned int n, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double legendre ( unsigned int n, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the degree of the polynomial
- `x`: the argument, a floating-point or integer value

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/legendre.html).

The first few Legendre polynomials are:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::legendre(int_num, num) has the same effect as std::legendre(int_num, static_cast<double>(num)).

## Example
```cpp
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
- [laguerrelaguerreflaguerrel](/cpp/numeric/special_functions/laguerre/)
- [hermitehermitefhermitel](/cpp/numeric/special_functions/hermite/)
