---
title: "log1p, log1pf, log1pl"
source_path: "c/numeric/math/log1p"
header: "<math.h>"
category: "c"
---

1-3) Computes the natural (base e) logarithm of 1 + arg. This function is more precise than the expression [log](/c/numeric/math/log/)(1 + arg) if arg is close to zero.

## Declarations
```cpp
float log1pf( float arg );
```
_(since C99)_

```cpp
double log1p( double arg );
```
_(since C99)_

```cpp
long double log1pl( long double arg );
```
_(since C99)_

```cpp
#define log1p( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur ln(1 + arg) is returned.

## Notes
The functions [expm1](/c/numeric/math/expm1/) and log1p are useful for financial calculations, for example, when calculating small daily interest rates: (1+x)n-1 can be expressed as [expm1](/c/numeric/math/expm1/)(n * log1p(x)). These functions also simplify writing accurate inverse hyperbolic functions.

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
    printf("log1p(0) = %f\n", log1p(0));
    printf("Interest earned in 2 days on $100, compounded daily at 1%%\n"
           " on a 30/360 calendar = %f\n",
           100*expm1(2*log1p(0.01/360)));
    printf("log(1+1e-16) = %g, but log1p(1e-16) = %g\n",
           log(1+1e-16), log1p(1e-16));
 
    // special values
    printf("log1p(-0) = %f\n", log1p(-0.0));
    printf("log1p(+Inf) = %f\n", log1p(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("log1p(-1) = %f\n", log1p(-1));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [loglogflogl](/c/numeric/math/log/)
- [log10log10flog10l](/c/numeric/math/log10/)
- [log2log2flog2l](/c/numeric/math/log2/)
- [expm1expm1fexpm1l](/c/numeric/math/expm1/)
- [C++ documentation](/cpp/numeric/math/log1p/)
