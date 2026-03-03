---
title: "_Imaginary_I"
source_path: "c/numeric/complex/Imaginary_I"
header: "<complex.h>"
category: "c"
aliases: ["/c/numeric/complex/Imaginary_I/"]
---

The _Imaginary_I macro expands to a value of type const float _Imaginary with the value of the imaginary unit.

## Declarations
```cpp
#define _Imaginary_I /* unspecified */
```
_(since C99)_

## Notes
This macro allows for the precise way to assemble a complex number from its real and imaginary components, e.g. with (double [complex](/c/numeric/complex/complex/))((double)x + _Imaginary_I * (double)y). This pattern was standardized in C11 as the macro [CMPLX](/c/numeric/complex/CMPLX/). Note that if [_Complex_I](/c/numeric/complex/Complex_I/) is used instead, this expression is allowed to convert negative zero to positive zero in the imaginary position.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
#include <math.h>
 
int main(void)
{
    double complex z1 = 0.0 + INFINITY * _Imaginary_I;
    printf("z1 = %.1f%+.1fi\n", creal(z1), cimag(z1));
 
    double complex z2 = 0.0 + INFINITY * _Complex_I;
    printf("z2 = %.1f%+.1fi\n", creal(z2), cimag(z2));
}
```

## See also
- [_Complex_I](/c/numeric/complex/Complex_I/)
- [I](/c/numeric/complex/I/)
