---
title: "sinh, sinhf, sinhl"
source_path: "c/numeric/math/sinh"
header: "<math.h>"
category: "c"
---

1-3) Computes hyperbolic sine of arg.

## Declarations
```cpp
float sinhf( float arg );
```
_(since C99)_

```cpp
double sinh( double arg );
```

```cpp
long double sinhl( long double arg );
```
_(since C99)_

```cpp
#define sinh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing a hyperbolic angle

## Return value
If a range error due to overflow occurs, [±HUGE_VAL](/c/numeric/math/HUGE_VAL/), ±HUGE_VALF, or ±HUGE_VALL is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/sinh.html) that in case of underflow, arg is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("sinh(1) = %f\nsinh(-1)=%f\n", sinh(1), sinh(-1));
    printf("log(sinh(1) + cosh(1))=%f\n", log(sinh(1) + cosh(1)));
 
    // special values
    printf("sinh(+0) = %f\nsinh(-0)=%f\n", sinh(0.0), sinh(-0.0));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("sinh(710.5) = %f\n", sinh(710.5));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [coshcoshfcoshl](/c/numeric/math/cosh/)
- [tanhtanhftanhl](/c/numeric/math/tanh/)
- [asinhasinhfasinhl](/c/numeric/math/asinh/)
- [csinhcsinhfcsinhl](/c/numeric/complex/csinh/)
- [C++ documentation](/cpp/numeric/math/sinh/)
