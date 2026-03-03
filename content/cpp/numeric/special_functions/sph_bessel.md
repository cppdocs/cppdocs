---
title: "std::sph_bessel, std::sph_besself, std::sph_bessell"
source_path: "cpp/numeric/special_functions/sph_bessel"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [spherical Bessel function of the first kind](https://en.wikipedia.org/wiki/Bessel_function#Spherical_Bessel_functions:_jn.2C_yn) of n and x.The library provides overloads of std::sph_bessel for all cv-unqualified floating-point types as the type of the parameter x.(since C++23)

## Declarations
```cpp
float sph_bessel ( unsigned int n, float x );
double sph_bessel ( unsigned int n, double x );
long double sph_bessel ( unsigned int n, long double x );
```
_(since C++17) (until C++23)_

```cpp
/*floating-point-type*/ sph_bessel( unsigned int n,
/*floating-point-type*/ x );
```
_(since C++23)_

```cpp
float sph_besself( unsigned int n, float x );
```
_(since C++17)_

```cpp
long double sph_bessell( unsigned int n, long double x );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double sph_bessel ( unsigned int n, Integer x );
```
_(since C++17)_

## Parameters
- `n`: the order of the function
- `x`: the argument of the function

## Return value
If no errors occur, returns the value of the spherical Bessel function of the first kind of n and x, that is jn(x) = (π/2x)1/2Jn+1/2(x) where Jn(x) is [std::cyl_bessel_j](/cpp/numeric/special_functions/cyl_bessel_j/)(n, x) and x≥0.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also available in [boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/bessel/sph_bessel.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::sph_bessel(int_num, num) has the same effect as std::sph_bessel(int_num, static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    // spot check for n == 1
    double x = 1.2345;
    std::cout << "j_1(" << x << ") = " << std::sph_bessel(1, x) << '\n';
 
    // exact solution for j_1
    std::cout << "sin(x)/x² - cos(x)/x = "
              << std::sin(x) / (x * x) - std::cos(x) / x << '\n';
}
```

## See also
- [cyl_bessel_jcyl_bessel_jfcyl_bessel_jl](/cpp/numeric/special_functions/cyl_bessel_j/)
- [sph_neumannsph_neumannfsph_neumannl](/cpp/numeric/special_functions/sph_neumann/)
