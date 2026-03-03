---
title: "acosh, acoshf, acoshl"
source_path: "c/numeric/math/acosh"
header: "<math.h>"
category: "c"
---

1-3) Computes the inverse hyperbolic cosine of arg.

## Declarations
```cpp
float acoshf( float arg );
```
_(since C99)_

```cpp
double acosh( double arg );
```
_(since C99)_

```cpp
long double acoshl( long double arg );
```
_(since C99)_

```cpp
#define acosh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing the area of a hyperbolic sector

## Return value
If no errors occur, the inverse hyperbolic cosine of arg (cosh-1(arg), or arcosh(arg)) on the interval [0, +∞], is returned.

## Notes
Although the C standard names this function "arc hyperbolic cosine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic cosine" (used by POSIX) or "area hyperbolic cosine".

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
    printf("acosh(1) = %f\nacosh(10) = %f\n", acosh(1), acosh(10));
    printf("acosh(DBL_MAX) = %f\nacosh(Inf) = %f\n", acosh(DBL_MAX), acosh(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("acosh(0.5) = %f\n", acosh(0.5));
    if (errno == EDOM)
        perror("    errno == EDOM");
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [asinhasinhfasinhl](/c/numeric/math/asinh/)
- [atanhatanhfatanhl](/c/numeric/math/atanh/)
- [coshcoshfcoshl](/c/numeric/math/cosh/)
- [cacoshcacoshfcacoshl](/c/numeric/complex/cacosh/)
- [C++ documentation](/cpp/numeric/math/acosh/)
