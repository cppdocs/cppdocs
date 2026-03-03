---
title: "clogf, clog, clogl"
source_path: "c/numeric/complex/clog"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex natural (base-e) logarithm of z with branch cut along the negative real axis.

## Declarations
```cpp
float complex clogf( float complex z );
```
_(since C99)_

```cpp
double complex clog( double complex z );
```
_(since C99)_

```cpp
long double complex clogl( long double complex z );
```
_(since C99)_

```cpp
#define log( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex natural logarithm of z is returned, in the range of a strip in the interval [−iπ, +iπ] along the imaginary axis and mathematically unbounded along the real axis.

## Notes
The natural logarithm of a complex number z with polar coordinate components (r,θ) equals ln r + i(θ+2nπ), with the principal value ln r + iθ

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = clog(I); // r = 1, θ = pi/2
    printf("2*log(i) = %.1f%+fi\n", creal(2*z), cimag(2*z));
 
    double complex z2 = clog(sqrt(2)/2 + sqrt(2)/2*I); // r = 1, θ = pi/4
    printf("4*log(sqrt(2)/2+sqrt(2)i/2) = %.1f%+fi\n", creal(4*z2), cimag(4*z2));
 
    double complex z3 = clog(-1); // r = 1, θ = pi
    printf("log(-1+0i) = %.1f%+fi\n", creal(z3), cimag(z3));
 
    double complex z4 = clog(conj(-1)); // or clog(CMPLX(-1, -0.0)) in C11
    printf("log(-1-0i) (the other side of the cut) = %.1f%+fi\n", creal(z4), cimag(z4));
}
```

## See also
- [cexpcexpfcexpl](/c/numeric/complex/cexp/)
- [loglogflogl](/c/numeric/math/log/)
- [C++ documentation](/cpp/numeric/complex/log/)
