---
title: "rint, rintf, rintl, lrint, lrintf, lrintl, llrint, llrintf, llrintl"
source_path: "c/numeric/math/rint"
header: "<math.h>"
category: "c"
---

1-3) Rounds the floating-point argument arg to an integer value in floating-point format, using the current rounding mode.

## Declarations
```cpp
float rintf( float arg );
```
_(since C99)_

```cpp
double rint( double arg );
```
_(since C99)_

```cpp
long double rintl( long double arg );
```
_(since C99)_

```cpp
#define rint( arg )
```
_(since C99)_

```cpp
long lrintf( float arg );
```
_(since C99)_

```cpp
long lrint( double arg );
```
_(since C99)_

```cpp
long lrintl( long double arg );
```
_(since C99)_

```cpp
#define lrint( arg )
```
_(since C99)_

```cpp
long long llrintf( float arg );
```
_(since C99)_

```cpp
long long llrint( double arg );
```
_(since C99)_

```cpp
long long llrintl( long double arg );
```
_(since C99)_

```cpp
#define llrint( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the nearest integer value to arg, according to the [current rounding mode](/c/numeric/fenv/FE_round/), is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lrint.html) that all cases where lrint or llrint raise [FE_INEXACT](/c/numeric/fenv/FE_exceptions/) are domain errors.

As specified in [math_errhandling](/c/numeric/math/math_errhandling/), [FE_INEXACT](/c/numeric/fenv/FE_exceptions/) may be (but isn't required to be on non-IEEE floating-point platforms) raised by rint when rounding a non-integer finite value.

The only difference between rint and [nearbyint](/c/numeric/math/nearbyint/) is that [nearbyint](/c/numeric/math/nearbyint/) never raises [FE_INEXACT](/c/numeric/fenv/FE_exceptions/).

The largest representable floating-point values are exact integers in all standard floating-point formats, so rint never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

If the current rounding mode is...

## Example
```cpp
#include <fenv.h>
#include <limits.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
#pragma STDC FENV_ACCESS ON
    fesetround(FE_TONEAREST);
    printf("rounding to nearest (halfway cases to even):\n"
           "rint(+2.3) = %+.1f  ", rint(2.3));
    printf("rint(+2.5) = %+.1f  ", rint(2.5));
    printf("rint(+3.5) = %+.1f\n", rint(3.5));
    printf("rint(-2.3) = %+.1f  ", rint(-2.3));
    printf("rint(-2.5) = %+.1f  ", rint(-2.5));
    printf("rint(-3.5) = %+.1f\n", rint(-3.5));
 
    fesetround(FE_DOWNWARD);
    printf("rounding down: \nrint(+2.3) = %+.1f  ", rint(2.3));
    printf("rint(+2.5) = %+.1f  ", rint(2.5));
    printf("rint(+3.5) = %+.1f\n", rint(3.5));
    printf("rint(-2.3) = %+.1f  ", rint(-2.3));
    printf("rint(-2.5) = %+.1f  ", rint(-2.5));
    printf("rint(-3.5) = %+.1f\n", rint(-3.5));
    printf("rounding down with lrint: \nlrint(+2.3) = %ld  ", lrint(2.3));
    printf("lrint(+2.5) = %ld  ", lrint(2.5));
    printf("lrint(+3.5) = %ld\n", lrint(3.5));
    printf("lrint(-2.3) = %ld  ", lrint(-2.3));
    printf("lrint(-2.5) = %ld  ", lrint(-2.5));
    printf("lrint(-3.5) = %ld\n", lrint(-3.5));
 
    printf("lrint(-0.0) = %ld\n", lrint(-0.0));
    printf("lrint(-Inf) = %ld\n", lrint(-INFINITY)); // FE_INVALID raised
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("rint(1.1) = %.1f\n", rint(1.1));
    if (fetestexcept(FE_INEXACT))
        puts("    FE_INEXACT was raised");
 
    feclearexcept(FE_ALL_EXCEPT);
    printf("lrint(LONG_MIN-2048.0) = %ld\n", lrint(LONG_MIN-2048.0));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID was raised");
}
```

## See also
- [trunctruncftruncl](/c/numeric/math/trunc/)
- [nearbyintnearbyintfnearbyintl](/c/numeric/math/nearbyint/)
- [fegetroundfesetround](/c/numeric/fenv/feround/)
- [C++ documentation](/cpp/numeric/math/rint/)
