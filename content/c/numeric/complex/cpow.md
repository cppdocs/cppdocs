---
title: "cpowf, cpow, cpowl"
source_path: "c/numeric/complex/cpow"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex power function xy, with branch cut for the first parameter along the negative real axis.

## Declarations
```cpp
float complex cpowf( float complex x, float complex y );
```
_(since C99)_

```cpp
double complex cpow( double complex x, double complex y );
```
_(since C99)_

```cpp
long double complex cpowl( long double complex x, long double complex y );
```
_(since C99)_

```cpp
#define pow( x, y )
```
_(since C99)_

## Parameters
- `x, y`: complex argument

## Return value
If no errors occur, the complex power xy, is returned.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{    
    double complex z = cpow(1.0+2.0*I, 2);
    printf("(1+2i)^2 = %.1f%+.1fi\n", creal(z), cimag(z));
 
    double complex z2 = cpow(-1, 0.5);
    printf("(-1+0i)^0.5 = %.1f%+.1fi\n", creal(z2), cimag(z2));
 
    double complex z3 = cpow(conj(-1), 0.5); // other side of the cut
    printf("(-1-0i)^0.5 = %.1f%+.1fi\n", creal(z3), cimag(z3));
 
    double complex z4 = cpow(I, I); // i^i = exp(-pi/2)
    printf("i^i = %f%+fi\n", creal(z4), cimag(z4));
}
```

## See also
- [csqrtcsqrtfcsqrtl](/c/numeric/complex/csqrt/)
- [powpowfpowl](/c/numeric/math/pow/)
- [C++ documentation](/cpp/numeric/complex/pow/)
