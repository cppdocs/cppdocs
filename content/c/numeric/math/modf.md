---
title: "modf, modff, modfl"
source_path: "c/numeric/math/modf"
header: "<math.h>"
category: "c"
---

1-3) Decomposes given floating-point value arg into integral and fractional parts, each having the same type and sign as arg. The integral part (in floating-point format) is stored in the object pointed to by iptr.

## Declarations
```cpp
float modff( float arg, float* iptr );
```
_(since C99)_

```cpp
double modf( double arg, double* iptr );
```

```cpp
long double modfl( long double arg, long double* iptr );
```
_(since C99)_

## Parameters
- `arg`: floating-point value
- `iptr`: pointer to floating-point value to store the integral part to

## Return value
If no errors occur, returns the fractional part of arg with the same sign as arg. The integral part is put into the value pointed to by iptr.

## Notes
This function behaves as if implemented as follows:

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    double f = 123.45;
    printf("Given the number %.2f or %a in hex,\n", f, f);
 
    double f3;
    double f2 = modf(f, &f3);
    printf("modf() makes %.2f + %.2f\n", f3, f2);
 
    int i;
    f2 = frexp(f, &i);
    printf("frexp() makes %f * 2^%d\n", f2, i);
 
    i = ilogb(f);
    printf("logb()/ilogb() make %f * %d^%d\n", f / scalbn(1.0, i), FLT_RADIX, i);
 
    // special values
    f2 = modf(-0.0, &f3);
    printf("modf(-0) makes %.2f + %.2f\n", f3, f2);
    f2 = modf(-INFINITY, &f3);
    printf("modf(-Inf) makes %.2f + %.2f\n", f3, f2);
}
```

## See also
- [trunctruncftruncl](/c/numeric/math/trunc/)
- [C++ documentation](/cpp/numeric/math/modf/)
