---
title: "logb, logbf, logbl"
source_path: "c/numeric/math/logb"
header: "<math.h>"
category: "c"
---

1-3) Extracts the value of the unbiased radix-independent exponent from the floating-point argument arg, and returns it as a floating-point value.

## Declarations
```cpp
float logbf( float arg );
```
_(since C99)_

```cpp
double logb( double arg );
```
_(since C99)_

```cpp
long double logbl( long double arg );
```
_(since C99)_

```cpp
#define logb( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the unbiased exponent of arg is returned as a signed floating-point value.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/logb.html) that a pole error occurs if arg is ±0.

The value of the exponent returned by logb is always 1 less than the exponent returned by [frexp](/c/numeric/math/frexp/) because of the different normalization requirements: for the exponent e returned by logb, |arg*r-e| is between 1 and r (typically between 1 and 2), but for the exponent e returned by [frexp](/c/numeric/math/frexp/), |arg*2-e| is between 0.5 and 1.

## Example
```cpp
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
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
 
    i = logb(f);
    printf("logb()/logb() make %f * %d^%d\n", f/scalbn(1.0, i), FLT_RADIX, i);
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("logb(0) = %f\n", logb(0));
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [frexpfrexpffrexpl](/c/numeric/math/frexp/)
- [ilogbilogbfilogbl](/c/numeric/math/ilogb/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/c/numeric/math/scalbn/)
- [FLT_RADIX](/c/types/limits/)
- [C++ documentation](/cpp/numeric/math/logb/)
