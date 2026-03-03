---
title: "cargf, carg, cargl"
source_path: "c/numeric/complex/carg"
header: "<complex.h>"
category: "c"
---

1-3) Computes the argument (also called phase angle) of z, with a branch cut along the negative real axis.

## Declarations
```cpp
float cargf( float complex z );
```
_(since C99)_

```cpp
double carg( double complex z );
```
_(since C99)_

```cpp
long double cargl( long double complex z );
```
_(since C99)_

```cpp
#define carg( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, returns the phase angle of z in the interval [−π; π].

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void) 
{
    double complex z1 = 1.0+0.0*I;
    printf("phase angle of %.1f%+.1fi is %f\n", creal(z1), cimag(z1), carg(z1));
 
    double complex z2 = 0.0+1.0*I;
    printf("phase angle of %.1f%+.1fi is %f\n", creal(z2), cimag(z2), carg(z2));
 
    double complex z3 = -1.0+0.0*I;
    printf("phase angle of %.1f%+.1fi is %f\n", creal(z3), cimag(z3), carg(z3));
 
    double complex z4 = conj(z3); // or CMPLX(-1, -0.0)
    printf("phase angle of %.1f%+.1fi (the other side of the cut) is %f\n",
             creal(z4), cimag(z4), carg(z4));
}
```

## See also
- [cabscabsfcabsl](/c/numeric/complex/cabs/)
- [atan2atan2fatan2l](/c/numeric/math/atan2/)
- [C++ documentation](/cpp/numeric/complex/arg/)
