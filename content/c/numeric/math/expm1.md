---
title: "expm1, expm1f, expm1l"
source_path: "c/numeric/math/expm1"
header: "<math.h>"
category: "c"
---

1-3) Computes the e (Euler's number, 2.7182818) raised to the given power arg, minus 1.0. This function is more accurate than the expression [exp](/c/numeric/math/exp/)(arg)-1.0 if arg is close to zero.

## Declarations
```cpp
float expm1f( float arg );
```
_(since C99)_

```cpp
double expm1( double arg );
```
_(since C99)_

```cpp
long double expm1l( long double arg );
```
_(since C99)_

```cpp
#define expm1( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur earg-1 is returned.

## Notes
The functions expm1 and [log1p](/c/numeric/math/log1p/) are useful for financial calculations, for example, when calculating small daily interest rates: (1+x)n-1 can be expressed as expm1(n * [log1p](/c/numeric/math/log1p/)(x)). These functions also simplify writing accurate inverse hyperbolic functions.

For IEEE-compatible type double, overflow is guaranteed if 709.8 < arg.

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
    printf("expm1(1) = %f\n", expm1(1));
    printf("Interest earned in 2 days on $100, compounded daily at 1%%\n"
           " on a 30/360 calendar = %f\n",
           100*expm1(2*log1p(0.01/360)));
    printf("exp(1e-16)-1 = %g, but expm1(1e-16) = %g\n",
           exp(1e-16)-1, expm1(1e-16));
    // special values
    printf("expm1(-0) = %f\n", expm1(-0.0));
    printf("expm1(-Inf) = %f\n", expm1(-INFINITY));
    //error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("expm1(710) = %f\n", expm1(710));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [expexpfexpl](/c/numeric/math/exp/)
- [exp2exp2fexp2l](/c/numeric/math/exp2/)
- [log1plog1pflog1pl](/c/numeric/math/log1p/)
- [C++ documentation](/cpp/numeric/math/expm1/)
