---
title: "ctanf, ctan, ctanl"
source_path: "c/numeric/complex/ctan"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex tangent of z.

## Declarations
```cpp
float complex ctanf( float complex z );
```
_(since C99)_

```cpp
double complex ctan( double complex z );
```
_(since C99)_

```cpp
long double complex ctanl( long double complex z );
```
_(since C99)_

```cpp
#define tan( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex tangent of z is returned.

## Notes
Tangent is an analytical function on the complex plain and has no branch cuts. It is periodic with respect to the real component, with period πi, and has poles of the first order along the real line, at coordinates (π(1/2 + n), 0). However no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = ctan(1);  // behaves like real tangent along the real line
    printf("tan(1+0i) = %f%+fi ( tan(1)=%f)\n", creal(z), cimag(z), tan(1));
 
    double complex z2 = ctan(I); // behaves like tanh along the imaginary line 
    printf("tan(0+1i) = %f%+fi (tanh(1)=%f)\n", creal(z2), cimag(z2), tanh(1));
}
```

## See also
- [ctanhctanhfctanhl](/c/numeric/complex/ctanh/)
- [csincsinfcsinl](/c/numeric/complex/csin/)
- [ccosccosfccosl](/c/numeric/complex/ccos/)
- [catancatanfcatanl](/c/numeric/complex/catan/)
- [tantanftanl](/c/numeric/math/tan/)
- [C++ documentation](/cpp/numeric/complex/tan/)
