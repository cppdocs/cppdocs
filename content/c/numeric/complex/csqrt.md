---
title: "csqrtf, csqrt, csqrtl"
source_path: "c/numeric/complex/csqrt"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex square root of z with branch cut along the negative real axis.

## Declarations
```cpp
float complex csqrtf( float complex z );
```
_(since C99)_

```cpp
double complex csqrt( double complex z );
```
_(since C99)_

```cpp
long double complex csqrtl( long double complex z );
```
_(since C99)_

```cpp
#define sqrt( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, returns the square root of z, in the range of the right half-plane, including the imaginary axis ([0; +∞) along the real axis and (−∞; +∞) along the imaginary axis.)

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z1 = csqrt(-4);
    printf("Square root of -4 is %.1f%+.1fi\n", creal(z1), cimag(z1));
 
    double complex z2 = csqrt(conj(-4)); // or, in C11, CMPLX(-4, -0.0)
    printf("Square root of -4-0i, the other side of the cut, is "
           "%.1f%+.1fi\n", creal(z2), cimag(z2));
}
```

## See also
- [cpowcpowfcpowl](/c/numeric/complex/cpow/)
- [sqrtsqrtfsqrtl](/c/numeric/math/sqrt/)
- [C++ documentation](/cpp/numeric/complex/sqrt/)
