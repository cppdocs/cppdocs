---
title: "ilogb, ilogbf, ilogbl"
source_path: "c/numeric/math/ilogb"
header: "<math.h>"
category: "c"
---

1-3) Extracts the value of the unbiased exponent from the floating-point argument arg, and returns it as a signed integer value.

## Declarations
```cpp
int ilogbf( float arg );
```
_(since C99)_

```cpp
int ilogb( double arg );
```
_(since C99)_

```cpp
int ilogbl( long double arg );
```
_(since C99)_

```cpp
#define ilogb( arg )
```
_(since C99)_

```cpp
#define FP_ILOGB0 /* implementation-defined */
```
_(since C99)_

```cpp
#define FP_ILOGBNAN /* implementation-defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the unbiased exponent of arg is returned as a signed int value.

## Notes
If arg is not zero, infinite, or NaN, the value returned is exactly equivalent to (int)[logb](/c/numeric/math/logb/)(arg).

[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/ilogb.html) that a domain error occurs if arg is zero, infinite, NaN, or if the correct result is outside of the range of int.

POSIX also requires that, on XSI-conformant systems, the value returned when the correct result is greater than [INT_MAX](/c/types/limits/) is [INT_MAX](/c/types/limits/) and the value returned when the correct result is less than [INT_MIN](/c/types/limits/) is [INT_MIN](/c/types/limits/).

The correct result can be represented as int on all known implementations. For overflow to occur, [INT_MAX](/c/types/limits/) must be less than [LDBL_MAX_EXP](/c/types/limits/) * log2([FLT_RADIX](/c/types/limits/)) or [INT_MIN](/c/types/limits/) must be greater than [LDBL_MIN_EXP](/c/types/limits/) - [LDBL_MANT_DIG](/c/types/limits/)) * log2([FLT_RADIX](/c/types/limits/)).

The value of the exponent returned by ilogb is always 1 less than the exponent retuned by [frexp](/c/numeric/math/frexp/) because of the different normalization requirements: for the exponent e returned by ilogb, |arg*r-e| is between 1 and r (typically between 1 and 2), but for the exponent e returned by [frexp](/c/numeric/math/frexp/), |arg*2-e| is between 0.5 and 1.

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
 
    i = ilogb(f);
    printf("logb()/ilogb() make %f * %d^%d\n", f/scalbn(1.0, i), FLT_RADIX, i);
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("ilogb(0) = %d\n", ilogb(0));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [frexpfrexpffrexpl](/c/numeric/math/frexp/)
- [logblogbflogbl](/c/numeric/math/logb/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/c/numeric/math/scalbn/)
- [FLT_RADIX](/c/types/limits/)
- [C++ documentation](/cpp/numeric/math/ilogb/)
