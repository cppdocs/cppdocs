---
title: "nearbyint, nearbyintf, nearbyintl"
source_path: "c/numeric/math/nearbyint"
header: "<math.h>"
category: "c"
---

1-3) Rounds the floating-point argument arg to an integer value in floating-point format, using the [current rounding mode](/c/numeric/fenv/FE_round/).

## Declarations
```cpp
float nearbyintf( float arg );
```
_(since C99)_

```cpp
double nearbyint( double arg );
```
_(since C99)_

```cpp
long double nearbyintl( long double arg );
```
_(since C99)_

```cpp
#define nearbyint( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
The nearest integer value to arg, according to the [current rounding mode](/c/numeric/fenv/FE_round/), is returned.

## Notes
The only difference between nearbyint and [rint](/c/numeric/math/rint/) is that nearbyint never raises [FE_INEXACT](/c/numeric/fenv/FE_exceptions/).

The largest representable floating-point values are exact integers in all standard floating-point formats, so nearbyint never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

If the current rounding mode is [FE_TONEAREST](/c/numeric/fenv/FE_round/), this function rounds to even in halfway cases (like [rint](/c/numeric/math/rint/), but unlike [round](/c/numeric/math/round/)).

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
// #pragma STDC FENV_ACCESS ON
    fesetround(FE_TONEAREST);
    printf("rounding to nearest:\nnearbyint(+2.3) = %+.1f  ", nearbyint(2.3));
    printf("nearbyint(+2.5) = %+.1f  ", nearbyint(2.5));
    printf("nearbyint(+3.5) = %+.1f\n", nearbyint(3.5));
    printf("nearbyint(-2.3) = %+.1f  ", nearbyint(-2.3));
    printf("nearbyint(-2.5) = %+.1f  ", nearbyint(-2.5));
    printf("nearbyint(-3.5) = %+.1f\n", nearbyint(-3.5));
 
    fesetround(FE_DOWNWARD);
    printf("rounding down: \nnearbyint(+2.3) = %+.1f  ", nearbyint(2.3));
    printf("nearbyint(+2.5) = %+.1f  ", nearbyint(2.5));
    printf("nearbyint(+3.5) = %+.1f\n", nearbyint(3.5));
    printf("nearbyint(-2.3) = %+.1f  ", nearbyint(-2.3));
    printf("nearbyint(-2.5) = %+.1f  ", nearbyint(-2.5));
    printf("nearbyint(-3.5) = %+.1f\n", nearbyint(-3.5));
 
    printf("nearbyint(-0.0) = %+.1f\n", nearbyint(-0.0));
    printf("nearbyint(-Inf) = %+.1f\n", nearbyint(-INFINITY));
}
```

## See also
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/c/numeric/math/rint/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/c/numeric/math/round/)
- [fegetroundfesetround](/c/numeric/fenv/feround/)
- [C++ documentation](/cpp/numeric/math/nearbyint/)
