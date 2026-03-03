---
title: "ctanhf, ctanh, ctanhl"
source_path: "c/numeric/complex/ctanh"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex hyperbolic tangent of z.

## Declarations
```cpp
float complex ctanhf( float complex z );
```
_(since C99)_

```cpp
double complex ctanh( double complex z );
```
_(since C99)_

```cpp
long double complex ctanhl( long double complex z );
```
_(since C99)_

```cpp
#define tanh( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, complex hyperbolic tangent of z is returned

## Notes
Hyperbolic tangent is an analytical function on the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period πi, and has poles of the first order along the imaginary line, at coordinates (0, π(1/2 + n)). However no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = ctanh(1);  // behaves like real tanh along the real line
    printf("tanh(1+0i) = %f%+fi (tanh(1)=%f)\n", creal(z), cimag(z), tanh(1));
 
    double complex z2 = ctanh(I); // behaves like tangent along the imaginary line
    printf("tanh(0+1i) = %f%+fi ( tan(1)=%f)\n", creal(z2), cimag(z2), tan(1));
}
```

## See also
- [csinhcsinhfcsinhl](/c/numeric/complex/csinh/)
- [ccoshccoshfccoshl](/c/numeric/complex/ccosh/)
- [catanhcatanhfcatanhl](/c/numeric/complex/catanh/)
- [tanhtanhftanhl](/c/numeric/math/tanh/)
- [C++ documentation](/cpp/numeric/complex/tanh/)
