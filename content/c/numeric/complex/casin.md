---
title: "casinf, casin, casinl"
source_path: "c/numeric/complex/casin"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex arc sine of z with branch cuts outside the interval [−1,+1] along the real axis.

## Declarations
```cpp
float complex casinf( float complex z );
```
_(since C99)_

```cpp
double complex casin( double complex z );
```
_(since C99)_

```cpp
long double complex casinl( long double complex z );
```
_(since C99)_

```cpp
#define asin( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex arc sine of z is returned, in the range of a strip unbounded along the imaginary axis and in the interval [−π/2; +π/2] along the real axis.

## Notes
Inverse sine (or arc sine) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞,-1) and (1,∞) of the real axis.

The mathematical definition of the principal value of arc sine is \(\small \arcsin z = -{\rm i}\ln({\rm i}z+\sqrt{1-z^2})\)arcsin z = -iln(iz + √1-z2)

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = casin(-2);
    printf("casin(-2+0i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = casin(conj(-2)); // or CMPLX(-2, -0.0)
    printf("casin(-2-0i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    // for any z, asin(z) = acos(-z) - pi/2
    double pi = acos(-1);
    double complex z3 = csin(cacos(conj(-2))-pi/2);
    printf("csin(cacos(-2-0i)-pi/2) = %f%+fi\n", creal(z3), cimag(z3));
}
```

## See also
- [cacoscacosfcacosl](/c/numeric/complex/cacos/)
- [catancatanfcatanl](/c/numeric/complex/catan/)
- [csincsinfcsinl](/c/numeric/complex/csin/)
- [asinasinfasinl](/c/numeric/math/asin/)
- [C++ documentation](/cpp/numeric/complex/asin/)
