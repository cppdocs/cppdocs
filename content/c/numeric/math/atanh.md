---
title: "atanh, atanhf, atanhl"
source_path: "c/numeric/math/atanh"
header: "<math.h>"
category: "c"
---

1-3) Computes the inverse hyperbolic tangent of arg.

## Declarations
```cpp
float atanhf( float arg );
```
_(since C99)_

```cpp
double atanh( double arg );
```
_(since C99)_

```cpp
long double atanhl( long double arg );
```
_(since C99)_

```cpp
#define atanh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating_point value representing the area of a hyperbolic sector

## Return value
If no errors occur, the inverse hyperbolic tangent of arg (tanh-1(arg), or artanh(arg)), is returned.

## Notes
Although the C standard names this function "arc hyperbolic tangent", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic tangent" (used by POSIX) or "area hyperbolic tangent".

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atanh.html) that in case of underflow, arg is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("atanh(0) = %f\natanh(-0) = %f\n", atanh(0), atanh(-0.0));
    printf("atanh(0.9) = %f\n", atanh(0.9));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("atanh(-1) = %f\n", atanh(-1));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [asinhasinhfasinhl](/c/numeric/math/asinh/)
- [acoshacoshfacoshl](/c/numeric/math/acosh/)
- [tanhtanhftanhl](/c/numeric/math/tanh/)
- [catanhcatanhfcatanhl](/c/numeric/complex/catanh/)
- [C++ documentation](/cpp/numeric/math/atanh/)
