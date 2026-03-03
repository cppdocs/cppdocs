---
title: "I"
source_path: "c/numeric/complex/I"
header: "<complex.h>"
category: "c"
aliases: ["/c/numeric/complex/I/"]
---

The I macro expands to either [_Complex_I](/c/numeric/complex/Complex_I/) or [_Imaginary_I](/c/numeric/complex/Imaginary_I/). If the implementation does not support imaginary types, then the macro always expands to [_Complex_I](/c/numeric/complex/Complex_I/).

## Declarations
```cpp
#define I /* unspecified */
```
_(since C99)_

## Notes
The macro is not named i, which is the name of the imaginary unit in mathematics, because the name i was already used in many C programs, e.g. as a loop counter variable.

The macro I is often used to form complex numbers, with expressions such as x + y*I.
If I is defined as [_Complex_I](/c/numeric/complex/Complex_I/), then such expression may create a value with imaginary component +0.0 even when y is -0.0, which is significant for complex number functions with branch cuts. The macro [CMPLX](/c/numeric/complex/CMPLX/) provides a way to construct a complex number precisely.

GCC provides a non-portable extension that allows imaginary constants to be specified with the suffix i on integer literals: 1.0fi, 1.0i, and 1.0li are imaginary units in GNU C. A similar approach is part of standard C++ as of C++14 (1.0if, 1.0i, and 1.0il are the imaginary units in C++)

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    printf("I = %.1f%+.1fi\n", creal(I), cimag(I));
 
    double complex z1 = I * I;     // imaginary unit squared
    printf("I * I = %.1f%+.1fi\n", creal(z1), cimag(z1));
 
    double complex z = 1.0 + 2.0*I; // usual way to form a complex number pre-C11
    printf("z = %.1f%+.1fi\n", creal(z), cimag(z));
}
```

## See also
- [_Imaginary_I](/c/numeric/complex/Imaginary_I/)
- [_Complex_I](/c/numeric/complex/Complex_I/)
- [CMPLXCMPLXFCMPLXL](/c/numeric/complex/CMPLX/)
- [C++ documentation](/cpp/numeric/complex/operator""i/)
