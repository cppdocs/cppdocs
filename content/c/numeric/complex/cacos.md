---
title: "cacosf, cacos, cacosl"
source_path: "c/numeric/complex/cacos"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex arc cosine of z with branch cuts outside the interval [−1,+1] along the real axis.

## Declarations
```cpp
float complex cacosf( float complex z );
```
_(since C99)_

```cpp
double complex cacos( double complex z );
```
_(since C99)_

```cpp
long double complex cacosl( long double complex z );
```
_(since C99)_

```cpp
#define acos( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex arc cosine of z is returned, in the range a strip unbounded along the imaginary axis and in the interval [0; π] along the real axis.

## Notes
Inverse cosine (or arc cosine) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventially placed at the line segments (-∞,-1) and (1,∞) of the real axis.

For any z, acos(z) = π - acos(-z)

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = cacos(-2);
    printf("cacos(-2+0i) = %f%+fi\n", creal(z), cimag(z));
 
    double complex z2 = cacos(conj(-2)); // or CMPLX(-2, -0.0)
    printf("cacos(-2-0i) (the other side of the cut) = %f%+fi\n", creal(z2), cimag(z2));
 
    // for any z, acos(z) = pi - acos(-z)
    double pi = acos(-1);
    double complex z3 = ccos(pi-z2);
    printf("ccos(pi - cacos(-2-0i) = %f%+fi\n", creal(z3), cimag(z3));
}
```

## See also
- [casincasinfcasinl](/c/numeric/complex/casin/)
- [catancatanfcatanl](/c/numeric/complex/catan/)
- [ccosccosfccosl](/c/numeric/complex/ccos/)
- [acosacosfacosl](/c/numeric/math/acos/)
- [C++ documentation](/cpp/numeric/complex/acos/)
