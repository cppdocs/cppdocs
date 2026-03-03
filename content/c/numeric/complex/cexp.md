---
title: "cexpf, cexp, cexpl"
source_path: "c/numeric/complex/cexp"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex base-e exponential of z.

## Declarations
```cpp
float complex cexpf( float complex z );
```
_(since C99)_

```cpp
double complex cexp( double complex z );
```
_(since C99)_

```cpp
long double complex cexpl( long double complex z );
```
_(since C99)_

```cpp
#define exp( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, e raised to the power of z, \(\small e^z\)ez is returned.

## Notes
The complex exponential function \(\small e^z\)ez for \(\small z = x + {\rm i}y\)z = x+iy equals \(\small e^x {\rm cis}(y)\)ex cis(y), or, \(\small e^x (\cos(y)+{\rm i}\sin(y))\)ex (cos(y) + i sin(y))

The exponential function is an entire function in the complex plane and has no branch cuts.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double PI = acos(-1);
    double complex z = cexp(I * PI); // Euler's formula
    printf("exp(i*pi) = %.1f%+.1fi\n", creal(z), cimag(z));
 
}
```

## See also
- [clogclogfclogl](/c/numeric/complex/clog/)
- [expexpfexpl](/c/numeric/math/exp/)
- [C++ documentation](/cpp/numeric/complex/exp/)
