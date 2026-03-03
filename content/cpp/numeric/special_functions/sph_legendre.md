---
title: "std::sph_legendre, std::sph_legendref, std::sph_legendrel"
source_path: "cpp/numeric/special_functions/sph_legendre"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [spherical associated Legendre function](https://en.wikipedia.org/wiki/Spherical_harmonics#Orthogonality_and_normalization) of degree l, order m, and polar angle theta.The library provides overloads of std::sph_legendre for all cv-unqualified floating-point types as the type of the parameter theta.(since C++23)

## Declarations
```cpp
float sph_legendre ( unsigned l, unsigned m, float theta );
double sph_legendre ( unsigned l, unsigned m, double theta );
long double sph_legendre ( unsigned l, unsigned m, long double theta );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ sph_legendre( unsigned l, unsigned m,
/* floating-point-type */ theta );
```
_(since C++23)_

```cpp
float sph_legendref( unsigned l, unsigned m, float theta );
```
_(since C++17)_

```cpp
long double sph_legendrel( unsigned l, unsigned m, long double theta );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double sph_legendre ( unsigned l, unsigned m, Integer theta );
```
_(since C++17)_

## Parameters
- `l`: degree
- `m`: order
- `theta`: polar angle, measured in radians

## Return value
Note that the [Condon-Shortley phase term](https://mathworld.wolfram.com/Condon-ShortleyPhase.html) (-1)m is included in this definition because it is omitted from the definition of Pml in [std::assoc_legendre](/cpp/numeric/special_functions/assoc_legendre/).

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of the spherical harmonic function is available in [boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_poly/sph_harm.html), and it reduces to this function when called with the parameter phi set to zero.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::sph_legendre(int_num1, int_num2, num) has the same effect as std::sph_legendre(int_num1, int_num2, static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
 
int main()
{
    // spot check for l=3, m=0
    double x = 1.2345;
    std::cout << "Y_3^0(" << x << ") = " << std::sph_legendre(3, 0, x) << '\n';
 
    // exact solution
    std::cout << "exact solution = "
              << 0.25 * std::sqrt(7 / std::numbers::pi)
                  * (5 * std::pow(std::cos(x), 3) - 3 * std::cos(x))
              << '\n';
}
```

## See also
- [assoc_legendreassoc_legendrefassoc_legendrel](/cpp/numeric/special_functions/assoc_legendre/)
