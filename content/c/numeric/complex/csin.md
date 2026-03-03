---
title: "csinf, csin, csinl"
source_path: "c/numeric/complex/csin"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex sine of z.

## Declarations
```cpp
float complex csinf( float complex z );
```
_(since C99)_

```cpp
double complex csin( double complex z );
```
_(since C99)_

```cpp
long double complex csinl( long double complex z );
```
_(since C99)_

```cpp
#define sin( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, the complex sine of z.

## Notes
The sine is an entire function on the complex plane, and has no branch cuts.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <complex.h>
 
int main(void)
{
    double complex z = csin(1);  // behaves like real sine along the real line
    printf("sin(1+0i) = %f%+fi ( sin(1)=%f)\n", creal(z), cimag(z), sin(1));
 
    double complex z2 = csin(I); // behaves like sinh along the imaginary line 
    printf("sin(0+1i) = %f%+fi (sinh(1)=%f)\n", creal(z2), cimag(z2), sinh(1));
}
```

## See also
- [ccosccosfccosl](/c/numeric/complex/ccos/)
- [ctanctanfctanl](/c/numeric/complex/ctan/)
- [casincasinfcasinl](/c/numeric/complex/casin/)
- [sinsinfsinl](/c/numeric/math/sin/)
- [C++ documentation](/cpp/numeric/complex/sin/)
