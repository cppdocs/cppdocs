---
title: "Complex number arithmetic"
source_path: "c/numeric/complex"
category: "c"
---

The C programming language, as of C99, supports complex number math with the three built-in types double _Complex, float _Complex, and long double _Complex (see [_Complex](/c/keyword/_Complex/)). When the header <complex.h> is included, the three complex number types are also accessible as double [complex](/c/numeric/complex/complex/), float [complex](/c/numeric/complex/complex/), long double [complex](/c/numeric/complex/complex/).

## Notes
The following function names are potentially(since C23) reserved for future addition to <complex.h> and are not available for use in the programs that include that header: cerf, cerfc, cexp2, cexpm1, clog10, clog1p, clog2, clgamma, ctgamma, csinpi, ccospi, ctanpi, casinpi, cacospi, catanpi, ccompoundn, cpown, cpowr, crootn, crsqrt, cexp10m1, cexp10, cexp2m1, clog10p1, clog2p1, clogp1(since C23), along with their -f and -l suffixed variants.

Although the C standard names the inverse hyperbolic with "complex arc hyperbolic sine" etc., the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct names are "complex inverse hyperbolic sine" etc. Some authors use "complex area hyperbolic sine" etc.

A complex or imaginary number is infinite if one of its parts is infinite, even if the other part is NaN.

A complex or imaginary number is finite if both parts are neither infinities nor NaNs.

A complex or imaginary number is a zero if both parts are positive or negative zeroes.

While MSVC does provide a [<complex.h>](https://learn.microsoft.com/en-us/cpp/c-runtime-library/complex-math-support) header, it does not implement complex numbers as native types, but as structs, which are incompatible with standard C complex types and do not support the +, -, *, / operators.

## Example
```cpp
#include <complex.h>
#include <stdio.h>
#include <tgmath.h>
 
int main(void)
{
    double complex z1 = I * I;     // imaginary unit squared
    printf("I * I = %.1f%+.1fi\n", creal(z1), cimag(z1));
 
    double complex z2 = pow(I, 2); // imaginary unit squared
    printf("pow(I, 2) = %.1f%+.1fi\n", creal(z2), cimag(z2));
 
    double PI = acos(-1);
    double complex z3 = exp(I * PI); // Euler's formula
    printf("exp(I*PI) = %.1f%+.1fi\n", creal(z3), cimag(z3));
 
    double complex z4 = 1 + 2 * I, z5 = 1 - 2 * I; // conjugates
    printf("(1+2i)*(1-2i) = %.1f%+.1fi\n", creal(z4 * z5), cimag(z4 * z5));
}
```

## See also
- [C++ documentation](/cpp/numeric/complex/)
