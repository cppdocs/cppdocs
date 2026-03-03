---
title: "cacoshf, cacosh, cacoshl"
source_path: "c/numeric/complex/cacosh"
header: "<complex.h>"
category: "c"
---

1-3) Computes complex arc hyperbolic cosine of a complex value z with branch cut at values less than 1 along the real axis.

## Declarations
```cpp
float complex cacoshf( float complex z );
```
_(since C99)_

```cpp
double complex cacosh( double complex z );
```
_(since C99)_

```cpp
long double complex cacoshl( long double complex z );
```
_(since C99)_

```cpp
#define acosh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
The complex arc hyperbolic cosine of z in the interval [0; ∞) along the real axis and in the interval [−iπ; +iπ] along the imaginary axis.

## Notes
Although the C standard names this function "complex arc hyperbolic cosine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic cosine", and, less common, "complex area hyperbolic cosine".

Inverse hyperbolic cosine is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segment (-∞,+1) of the real axis.

The mathematical definition of the principal value of the inverse hyperbolic cosine is acosh z = ln(z + √z+1 √z-1)

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = cacosh(0.5);
    printf("cacosh(+0.5+0i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = conj(0.5); // or cacosh(CMPLX(0.5, -0.0)) in C11
    printf("cacosh(+0.5-0i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    // in upper half-plane, acosh(z) = i*acos(z) 
    double complex z3 = casinh(1+I);
    printf("casinh(1+1i) = %f%+fi\n", creal(z3), cimag(z3));
    double complex z4 = I*casin(1+I);
    printf("I*asin(1+1i) = %f%+fi\n", creal(z4), cimag(z4));
}
```

## See also
- [cacoscacosfcacosl](/c/numeric/complex/cacos/)
- [casinhcasinhfcasinhl](/c/numeric/complex/casinh/)
- [catanhcatanhfcatanhl](/c/numeric/complex/catanh/)
- [ccoshccoshfccoshl](/c/numeric/complex/ccosh/)
- [acoshacoshfacoshl](/c/numeric/math/acosh/)
- [C++ documentation](/cpp/numeric/complex/acosh/)
