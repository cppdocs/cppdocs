---
title: "cprojf, cproj, cprojl"
source_path: "c/numeric/complex/cproj"
header: "<complex.h>"
category: "c"
---

1-3) Computes the projection of z on the Riemann sphere.

## Declarations
```cpp
float complex cprojf( float complex z );
```
_(since C99)_

```cpp
double complex cproj( double complex z );
```
_(since C99)_

```cpp
long double complex cprojl( long double complex z );
```
_(since C99)_

```cpp
#define cproj( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
The projection of z on the Riemann sphere.

## Notes
The cproj function helps model the Riemann sphere by mapping all infinities to one (give or take the sign of the imaginary zero), and should be used just before any operation, especially comparisons, that might give spurious results for any of the other infinities.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
#include <math.h>
 
int main(void)
{
    double complex z1 = cproj(1 + 2*I);
    printf("cproj(1+2i) = %.1f%+.1fi\n", creal(z1),cimag(z1));
 
    double complex z2 = cproj(INFINITY+2.0*I);
    printf("cproj(Inf+2i) = %.1f%+.1fi\n", creal(z2),cimag(z2));
 
    double complex z3 = cproj(INFINITY-2.0*I);
    printf("cproj(Inf-2i) = %.1f%+.1fi\n", creal(z3),cimag(z3));
}
```

## See also
- [C++ documentation](/cpp/numeric/complex/proj/)
