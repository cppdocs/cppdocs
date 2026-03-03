---
title: "conjf, conj, conjl"
source_path: "c/numeric/complex/conj"
header: "<complex.h>"
category: "c"
---

1-3) Computes the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate) of z by reversing the sign of the imaginary part.

## Declarations
```cpp
float complex conjf( float complex z );
```
_(since C99)_

```cpp
double complex conj( double complex z );
```
_(since C99)_

```cpp
long double complex conjl( long double complex z );
```
_(since C99)_

```cpp
#define conj( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
The complex conjugate of z.

## Notes
On C99 implementations that do not implement I as [_Imaginary_I](/c/numeric/complex/Imaginary_I/), conj may be used to obtain complex numbers with negative zero imaginary part. In C11, the macro [CMPLX](/c/numeric/complex/CMPLX/) is used for that purpose.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = 1.0 + 2.0*I;
    double complex z2 = conj(z);
    printf("The conjugate of %.1f%+.1fi is %.1f%+.1fi\n",
            creal(z), cimag(z), creal(z2), cimag(z2));
 
    printf("Their product is %.1f%+.1fi\n", creal(z*z2), cimag(z*z2));
}
```

## See also
- [C++ documentation](/cpp/numeric/complex/conj/)
