---
title: "imaginary"
source_path: "c/numeric/complex/imaginary"
header: "<complex.h>"
category: "c"
---

This macro expands to the keyword [_Imaginary](/c/keyword/_Imaginary/).

## Declarations
```cpp
#define imaginary _Imaginary
```
_(since C99)_

## Notes
Programs are allowed to undefine and perhaps redefine the imaginary macro.

To date, only Oracle C compiler is known to have implemented imaginary types.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double imaginary i = -2.0*I; // pure imaginary
    double f = 1.0; // pure real
    double complex z = f + i; // complex number
    printf("z = %.1f%+.1fi\n", creal(z), cimag(z));
}
```

## See also
- [complex](/c/numeric/complex/complex/)
