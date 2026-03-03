---
title: "_Complex_I"
source_path: "c/numeric/complex/Complex_I"
header: "<complex.h>"
category: "c"
aliases: ["/c/numeric/complex/Complex_I/"]
---

The _Complex_I macro expands to a value of type const float _Complex with the value of the imaginary unit.

## Declarations
```cpp
#define _Complex_I /* unspecified */
```
_(since C99)_

## Notes
This macro may be used when I is not available, such as when it has been undefined by the application.

Unlike [_Imaginary_I](/c/numeric/complex/Imaginary_I/) and [CMPLX](/c/numeric/complex/CMPLX/), use of this macro to construct a complex number may lose the sign of zero on the imaginary part.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
#undef I
#define J _Complex_I // can be used to redefine I
 
int main(void)
{
    // can be used to construct a complex number
    double complex z = 1.0 + 2.0 * _Complex_I;
    printf("1.0 + 2.0 * _Complex_I = %.1f%+.1fi\n", creal(z), cimag(z));
 
    // sign of zero may not be preserved
    double complex z2 = 0.0 + -0.0 * _Complex_I;
    printf("0.0 + -0.0 * _Complex_I = %.1f%+.1fi\n", creal(z2), cimag(z2));
}
```

## See also
- [_Imaginary_I](/c/numeric/complex/Imaginary_I/)
- [I](/c/numeric/complex/I/)
