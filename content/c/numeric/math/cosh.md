---
title: "cosh, coshf, coshl"
source_path: "c/numeric/math/cosh"
header: "<math.h>"
category: "c"
---

1-3) Computes the hyperbolic cosine of arg.

## Declarations
```cpp
float coshf( float arg );
```
_(since C99)_

```cpp
double cosh( double arg );
```

```cpp
long double coshl( long double arg );
```
_(since C99)_

```cpp
#define cosh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing a hyperbolic angle

## Return value
If a range error due to overflow occurs, [+HUGE_VAL](/c/numeric/math/HUGE_VAL/), +HUGE_VALF, or +HUGE_VALL is returned.

## Notes
For the IEEE-compatible type double, if |arg| > 710.5, then cosh(arg) overflows.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
// #pragma STDC FENV_ACCESS ON
int main(void)
{
    printf("cosh(1) = %f\ncosh(-1)= %f\n", cosh(1), cosh(-1));
    printf("log(sinh(1) + cosh(1))=%f\n", log(sinh(1) + cosh(1)));
    // special values
    printf("cosh(+0) = %f\ncosh(-0) = %f\n", cosh(0.0), cosh(-0.0));
    // error handling
    errno = 0;
    feclearexcept(FE_ALL_EXCEPT);
    printf("cosh(710.5) = %f\n", cosh(710.5));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [sinhsinhfsinhl](/c/numeric/math/sinh/)
- [tanhtanhftanhl](/c/numeric/math/tanh/)
- [acoshacoshfacoshl](/c/numeric/math/acosh/)
- [ccoshccoshfccoshl](/c/numeric/complex/ccosh/)
- [C++ documentation](/cpp/numeric/math/cosh/)
