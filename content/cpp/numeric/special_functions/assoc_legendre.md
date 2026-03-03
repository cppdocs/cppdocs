---
title: "std::assoc_legendre, std::assoc_legendref, std::assoc_legendrel"
source_path: "cpp/numeric/special_functions/assoc_legendre"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [Associated Legendre polynomials](https://en.wikipedia.org/wiki/Associated_Legendre_polynomials) of the degree n, order m, and argument x.The library provides overloads of std::assoc_legendre for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
float assoc_legendre ( unsigned int n, unsigned int m, float x );
double assoc_legendre ( unsigned int n, unsigned int m, double x );
long double assoc_legendre ( unsigned int n, unsigned int m, long double x );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ assoc_legendre( unsigned int n, unsigned int m,
/* floating-point-type */ x );
```
_(since C++23)_

```cpp
float assoc_legendref( unsigned int n, unsigned int m, float x );
```
_(since C++17)_

```cpp
long double assoc_legendrel( unsigned int n, unsigned int m, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double assoc_legendre ( unsigned int n, unsigned int m, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the degree of the polynomial, an unsigned integer value
- `m`: the order of the polynomial, an unsigned integer value
- `x`: the argument, a floating-point or integer value

## Return value
Note that the [Condon-Shortley phase term](https://mathworld.wolfram.com/Condon-ShortleyPhase.html) \((-1)^m\)(-1)m is omitted from this definition.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/legendre.html) as boost::math::legendre_p, except that the boost.math definition includes the Condon-Shortley phase term.

The first few associated Legendre polynomials are:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::assoc_legendre(int_num1, int_num2, num) has the same effect as std::assoc_legendre(int_num1, int_num2, static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
double P20(double x)
{
    return 0.5 * (3 * x * x - 1);
}
 
double P21(double x)
{
    return 3.0 * x * std::sqrt(1 - x * x);
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
- [legendrelegendreflegendrel](/cpp/numeric/special_functions/legendre/)
