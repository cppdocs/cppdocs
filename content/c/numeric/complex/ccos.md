---
title: "ccosf, ccos, ccosl"
source_path: "c/numeric/complex/ccos"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex cosine of z.

## Declarations
```cpp
float complex ccosf( float complex z );
```
_(since C99)_

```cpp
double complex ccos( double complex z );
```
_(since C99)_

```cpp
long double complex ccosl( long double complex z );
```
_(since C99)_

```cpp
#define cos( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex cosine of z is returned.

## Notes
The cosine is an entire function on the complex plane, and has no branch cuts.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = ccos(1);  // behaves like real cosine along the real line
    printf("cos(1+0i) = %f%+fi ( cos(1)=%f)\n", creal(z), cimag(z), cos(1));
 
    double complex z2 = ccos(I); // behaves like real cosh along the imaginary line
    printf("cos(0+1i) = %f%+fi (cosh(1)=%f)\n", creal(z2), cimag(z2), cosh(1));
}
```

## See also
- [csincsinfcsinl](/c/numeric/complex/csin/)
- [ctanctanfctanl](/c/numeric/complex/ctan/)
- [cacoscacosfcacosl](/c/numeric/complex/cacos/)
- [coscosfcosl](/c/numeric/math/cos/)
- [C++ documentation](/cpp/numeric/complex/cos/)
