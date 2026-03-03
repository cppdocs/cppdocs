---
title: "CMPLXF, CMPLX, CMPLXL"
source_path: "c/numeric/complex/CMPLX"
header: "<complex.h>"
category: "c"
aliases: ["/c/numeric/complex/CMPLX/"]
---

Each of these macros expands to an expression that evaluates to the value of the specified complex type, with the real part having the value of real (converted to the specified argument type) and the imaginary part having the value of imag (converted to the specified argument type)

## Declarations
```cpp
float complex CMPLXF( float real, float imag );
```
_(since C11)_

```cpp
double complex CMPLX( double real, double imag );
```
_(since C11)_

```cpp
long double complex CMPLXL( long double real, long double imag );
```
_(since C11)_

## Parameters
- `real`: the real part of the complex number to return
- `imag`: the imaginary part of the complex number to return

## Return value
A complex number composed of real and imag as the real and imaginary parts.

## Notes
These macros are implemented as if the imaginary types are supported (even if they are otherwise not supported and [_Imaginary_I](/c/numeric/complex/Imaginary_I/) is actually undefined) and as if defined as follows:

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = CMPLX(0.0, -0.0);
    printf("z = %.1f%+.1fi\n", creal(z), cimag(z));
}
```

## See also
- [_Imaginary_I](/c/numeric/complex/Imaginary_I/)
- [C++ documentation](/cpp/numeric/complex/complex/)
