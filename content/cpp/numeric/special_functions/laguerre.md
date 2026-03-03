---
title: "std::laguerre, std::laguerref, std::laguerrel"
source_path: "cpp/numeric/special_functions/laguerre"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the non-associated [Laguerre polynomials](https://en.wikipedia.org/wiki/Laguerre_polynomials) of the degree n and argument x.The library provides overloads of std::laguerre for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
float laguerre ( unsigned int n, float x );
double laguerre ( unsigned int n, double x );
long double laguerre ( unsigned int n, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ laguerre( unsigned int n,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float laguerref( unsigned int n, float x );
```
_(since C++17)_

```cpp
long double laguerrel( unsigned int n, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double laguerre ( unsigned int n, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the degree of the polynomial, an unsigned integer value
- `x`: the argument, a floating-point or integer value

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/laguerre.html).

The Laguerre polynomials are the polynomial solutions of the equation .

The first few are:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::laguerre(int_num, num) has the same effect as std::laguerre(int_num, static_cast<double>(num)).

## Example
```cpp
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
              << std::laguerre(2, 0.5) << '=' << L2(0.5) << '\n'
              << std::laguerre(3, 0.0) << '=' << 1.0 << '\n';
}
```

## See also
- [assoc_laguerreassoc_laguerrefassoc_laguerrel](/cpp/numeric/special_functions/assoc_laguerre/)
