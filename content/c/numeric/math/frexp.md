---
title: "frexp, frexpf, frexpl"
source_path: "c/numeric/math/frexp"
header: "<math.h>"
category: "c"
---

1-3) Decomposes given floating-point value x into a normalized fraction and an integral power of two.

## Declarations
```cpp
float frexpf( float arg, int* exp );
```
_(since C99)_

```cpp
double frexp( double arg, int* exp );
```

```cpp
long double frexpl( long double arg, int* exp );
```
_(since C99)_

```cpp
#define frexp( arg, exp )
```
_(since C99)_

## Parameters
- `arg`: floating-point value
- `exp`: pointer to integer value to store the exponent to

## Return value
If arg is zero, returns zero and stores zero in *exp.

## Notes
On a binary system (where [FLT_RADIX](/c/types/limits/) is 2), frexp may be implemented as

The function frexp, together with its dual, [ldexp](/c/numeric/math/ldexp/), can be used to manipulate the representation of a floating-point number without direct bit manipulations.

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
    printf("modf() makes %.0f + %.2f\n", f3, f2);
 
    int i;
    f2 = frexp(f, &i);
    printf("frexp() makes %f * 2^%d\n", f2, i);
 
    i = ilogb(f);
    printf("logb()/ilogb() make %f * %d^%d\n", f/scalbn(1.0, i), FLT_RADIX, i);
}
```

## See also
- [ldexpldexpfldexpl](/c/numeric/math/ldexp/)
- [logblogbflogbl](/c/numeric/math/logb/)
- [ilogbilogbfilogbl](/c/numeric/math/ilogb/)
- [modfmodffmodfl](/c/numeric/math/modf/)
- [C++ documentation](/cpp/numeric/math/frexp/)
