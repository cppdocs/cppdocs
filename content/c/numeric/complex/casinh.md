---
title: "casinhf, casinh, casinhl"
source_path: "c/numeric/complex/casinh"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex arc hyperbolic sine of z with branch cuts outside the interval [−i; +i] along the imaginary axis.

## Declarations
```cpp
float complex casinhf( float complex z );
```
_(since C99)_

```cpp
double complex casinh( double complex z );
```
_(since C99)_

```cpp
long double complex casinhl( long double complex z );
```
_(since C99)_

```cpp
#define asinh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex arc hyperbolic sine of z is returned, in the range of a strip mathematically unbounded along the real axis and in the interval [−iπ/2; +iπ/2] along the imaginary axis.

## Notes
Although the C standard names this function "complex arc hyperbolic sine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic sine", and, less common, "complex area hyperbolic sine".

Inverse hyperbolic sine is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-i∞,-i) and (i,i∞) of the imaginary axis.

The mathematical definition of the principal value of the inverse hyperbolic sine is asinh z = ln(z + √1+z2)

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = casinh(0+2*I);
    printf("casinh(+0+2i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = casinh(-conj(2*I)); // or casinh(CMPLX(-0.0, 2)) in C11
    printf("casinh(-0+2i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    // for any z, asinh(z) = asin(iz)/i
    double complex z3 = casinh(1+2*I);
    printf("casinh(1+2i) = %f%+fi\n", creal(z3), cimag(z3));
    double complex z4 = casin((1+2*I)*I)/I;
    printf("casin(i * (1+2i))/i = %f%+fi\n", creal(z4), cimag(z4));
}
```

## See also
- [cacoshcacoshfcacoshl](/c/numeric/complex/cacosh/)
- [catanhcatanhfcatanhl](/c/numeric/complex/catanh/)
- [csinhcsinhfcsinhl](/c/numeric/complex/csinh/)
- [asinhasinhfasinhl](/c/numeric/math/asinh/)
- [C++ documentation](/cpp/numeric/complex/asinh/)
