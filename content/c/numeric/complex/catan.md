---
title: "catanf, catan, catanl"
source_path: "c/numeric/complex/catan"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex arc tangent of z with branch cuts outside the interval [−i,+i] along the imaginary axis.

## Declarations
```cpp
float complex catanf( float complex z );
```
_(since C99)_

```cpp
double complex catan( double complex z );
```
_(since C99)_

```cpp
long double complex catanl( long double complex z );
```
_(since C99)_

```cpp
#define atan( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex arc tangent of z is returned, in the range of a strip unbounded along the imaginary axis and in the interval [−π/2; +π/2] along the real axis.

## Notes
Inverse tangent (or arc tangent) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞i,-i) and (+i,+∞i) of the imaginary axis.

## Example
```cpp
#include <stdio.h>
#include <float.h>
#include <complex.h>
 
int main(void)
{
    double complex z = catan(2*I);
    printf("catan(+0+2i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = catan(-conj(2*I)); // or CMPLX(-0.0, 2)
    printf("catan(-0+2i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    double complex z3 = 2*catan(2*I*DBL_MAX); // or CMPLX(0, INFINITY)
    printf("2*catan(+0+i*Inf) = %f%+fi\n", creal(z3), cimag(z3));
}
```

## See also
- [casincasinfcasinl](/c/numeric/complex/casin/)
- [cacoscacosfcacosl](/c/numeric/complex/cacos/)
- [ctanctanfctanl](/c/numeric/complex/ctan/)
- [atanatanfatanl](/c/numeric/math/atan/)
- [C++ documentation](/cpp/numeric/complex/atan/)
