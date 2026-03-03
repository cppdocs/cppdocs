---
title: "std::assoc_laguerre, std::assoc_laguerref, std::assoc_laguerrel"
source_path: "cpp/numeric/special_functions/assoc_laguerre"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [associated Laguerre polynomials](https://en.wikipedia.org/wiki/Laguerre_polynomials#Generalized_Laguerre_polynomials) of the degree n, order m, and argument x.The library provides overloads of std::assoc_laguerre for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
float assoc_laguerre ( unsigned int n, unsigned int m, float x );
double assoc_laguerre ( unsigned int n, unsigned int m, double x );
long double assoc_laguerre ( unsigned int n, unsigned int m, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ assoc_laguerre( unsigned int n, unsigned int m,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float assoc_laguerref( unsigned int n, unsigned int m, float x );
```
_(since C++17)_

```cpp
long double assoc_laguerrel( unsigned int n, unsigned int m, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double assoc_laguerre ( unsigned int n, unsigned int m, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the degree of the polynomial, an unsigned integer value
- `m`: the order of the polynomial, an unsigned integer value
- `x`: the argument, a floating-point or integer value

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/laguerre.html).

The associated Laguerre polynomials are the polynomial solutions of the equation \(x\ddot{y} + (m+1-x)\dot{y} + ny = 0\)xy,,+(m+1-x)y,+ny = 0.

The first few are:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::assoc_laguerre(int_num1, int_num2, num) has the same effect as std::assoc_laguerre(int_num1, int_num2, static_cast<double>(num)).

## Example
```cpp
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
- [laguerrelaguerreflaguerrel](/cpp/numeric/special_functions/laguerre/)
