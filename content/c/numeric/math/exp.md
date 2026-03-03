---
title: "exp, expf, expl"
source_path: "c/numeric/math/exp"
header: "<math.h>"
category: "c"
---

1-3) Computes e ([Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)), 2.7182818...) raised to the given power arg.

## Declarations
```cpp
float expf( float arg );
```
_(since C99)_

```cpp
double exp( double arg );
```

```cpp
long double expl( long double arg );
```
_(since C99)_

```cpp
#define exp( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the base-e exponential of arg (earg) is returned.

## Notes
For IEEE-compatible type double, overflow is guaranteed if 709.8 < arg, and underflow is guaranteed if arg < -708.4.

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
    printf("exp(1) = %f\n", exp(1));
    printf("FV of $100, continuously compounded at 3%% for 1 year = %f\n",
            100*exp(0.03));
    // special values
    printf("exp(-0) = %f\n", exp(-0.0));
    printf("exp(-Inf) = %f\n", exp(-INFINITY));
    //error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("exp(710) = %f\n", exp(710));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [exp2exp2fexp2l](/c/numeric/math/exp2/)
- [expm1expm1fexpm1l](/c/numeric/math/expm1/)
- [loglogflogl](/c/numeric/math/log/)
- [cexpcexpfcexpl](/c/numeric/complex/cexp/)
- [C++ documentation](/cpp/numeric/math/exp/)
