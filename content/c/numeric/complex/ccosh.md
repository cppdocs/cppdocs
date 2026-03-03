---
title: "ccoshf, ccosh, ccoshl"
source_path: "c/numeric/complex/ccosh"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex hyperbolic cosine of z.

## Declarations
```cpp
float complex ccoshf( float complex z );
```
_(since C99)_

```cpp
double complex ccosh( double complex z );
```
_(since C99)_

```cpp
long double complex ccoshl( long double complex z );
```
_(since C99)_

```cpp
#define cosh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex hyperbolic cosine of z is returned

## Notes
Hyperbolic cosine is an entire function in the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period 2πi

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = ccosh(1);  // behaves like real cosh along the real line
    printf("cosh(1+0i) = %f%+fi (cosh(1)=%f)\n", creal(z), cimag(z), cosh(1));
 
    double complex z2 = ccosh(I); // behaves like real cosine along the imaginary line
    printf("cosh(0+1i) = %f%+fi ( cos(1)=%f)\n", creal(z2), cimag(z2), cos(1));
}
```

## See also
- [csinhcsinhfcsinhl](/c/numeric/complex/csinh/)
- [ctanhctanhfctanhl](/c/numeric/complex/ctanh/)
- [cacoshcacoshfcacoshl](/c/numeric/complex/cacosh/)
- [coshcoshfcoshl](/c/numeric/math/cosh/)
- [C++ documentation](/cpp/numeric/complex/cosh/)
