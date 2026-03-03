---
title: "complex"
source_path: "c/numeric/complex/complex"
header: "<complex.h>"
category: "c"
---

This macro expands to a type specifier used to identify [complex types](/c/language/arithmetic_types/#Complex_floating_types).

## Declarations
```cpp
#define complex _Complex
```
_(since C99)_

## Example
```cpp
#include <complex.h>
#include <math.h>
#include <stdio.h>
 
void print_complex(const char* note, complex z)
{
    printf("%s %f%+f*i\n", note, creal(z), cimag(z));
}
 
int main(void)
{
    double complex z = -1.0 + 2.0*I;
    print_complex("z  =", z);
    print_complex("z\u00B2 =", z * z);
    double complex z2 = ccos(2.0 * carg(z)) + csin(2.0 * carg(z))*I;
    print_complex("z\u00B2 =", cabs(z) * cabs(z) * z2);
}
```

## See also
- [imaginary](/c/numeric/complex/imaginary/)
