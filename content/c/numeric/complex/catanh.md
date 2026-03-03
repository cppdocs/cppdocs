---
title: "catanhf, catanh, catanhl"
source_path: "c/numeric/complex/catanh"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex arc hyperbolic tangent of z with branch cuts outside the interval [−1; +1] along the real axis.

## Declarations
```cpp
float complex catanhf( float complex z );
```
_(since C99)_

```cpp
double complex catanh( double complex z );
```
_(since C99)_

```cpp
long double complex catanhl( long double complex z );
```
_(since C99)_

```cpp
#define atanh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex arc hyperbolic tangent of z is returned, in the range of a half-strip mathematically unbounded along the real axis and in the interval [−iπ/2; +iπ/2] along the imaginary axis.

## Notes
Although the C standard names this function "complex arc hyperbolic tangent", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic tangent", and, less common, "complex area hyperbolic tangent".

Inverse hyperbolic tangent is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segmentd (-∞,-1] and [+1,+∞) of the real axis.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = catanh(2);
    printf("catanh(+2+0i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = catanh(conj(2)); // or catanh(CMPLX(2, -0.0)) in C11
    printf("catanh(+2-0i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    // for any z, atanh(z) = atan(iz)/i
    double complex z3 = catanh(1+2*I);
    printf("catanh(1+2i) = %f%+fi\n", creal(z3), cimag(z3));
    double complex z4 = catan((1+2*I)*I)/I;
    printf("catan(i * (1+2i))/i = %f%+fi\n", creal(z4), cimag(z4));
}
```

## See also
- [casinhcasinhfcasinhl](/c/numeric/complex/casinh/)
- [cacoshcacoshfcacoshl](/c/numeric/complex/cacosh/)
- [ctanhctanhfctanhl](/c/numeric/complex/ctanh/)
- [atanhatanhfatanhl](/c/numeric/math/atanh/)
- [C++ documentation](/cpp/numeric/complex/atanh/)
