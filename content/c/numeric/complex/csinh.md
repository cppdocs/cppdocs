---
title: "csinhf, csinh, csinhl"
source_path: "c/numeric/complex/csinh"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex hyperbolic sine of z.

## Declarations
```cpp
float complex csinhf( float complex z );
```
_(since C99)_

```cpp
double complex csinh( double complex z );
```
_(since C99)_

```cpp
long double complex csinhl( long double complex z );
```
_(since C99)_

```cpp
#define sinh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex hyperbolic sine of z is returned

## Notes
Hyperbolic sine is an entire function in the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period 2πi

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = csinh(1);  // behaves like real sinh along the real line
    printf("sinh(1+0i) = %f%+fi (sinh(1)=%f)\n", creal(z), cimag(z), sinh(1));
 
    double complex z2 = csinh(I); // behaves like sine along the imaginary line
    printf("sinh(0+1i) = %f%+fi ( sin(1)=%f)\n", creal(z2), cimag(z2), sin(1));
}
```

## See also
- [ccoshccoshfccoshl](/c/numeric/complex/ccosh/)
- [ctanhctanhfctanhl](/c/numeric/complex/ctanh/)
- [casinhcasinhfcasinhl](/c/numeric/complex/casinh/)
- [sinhsinhfsinhl](/c/numeric/math/sinh/)
- [C++ documentation](/cpp/numeric/complex/sinh/)
