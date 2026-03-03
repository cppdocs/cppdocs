---
title: "round, roundf, roundl, lround, lroundf, lroundl, llround, llroundf, llroundl"
source_path: "c/numeric/math/round"
header: "<math.h>"
category: "c"
---

1-3) Computes the nearest integer value to arg (in floating-point format), rounding halfway cases away from zero, regardless of the current rounding mode.

## Declarations
```cpp
float roundf( float arg );
```
_(since C99)_

```cpp
double round( double arg );
```
_(since C99)_

```cpp
long double roundl( long double arg );
```
_(since C99)_

```cpp
#define round( arg )
```
_(since C99)_

```cpp
long lroundf( float arg );
```
_(since C99)_

```cpp
long lround( double arg );
```
_(since C99)_

```cpp
long lroundl( long double arg );
```
_(since C99)_

```cpp
#define lround( arg )
```
_(since C99)_

```cpp
long long llroundf( float arg );
```
_(since C99)_

```cpp
long long llround( double arg );
```
_(since C99)_

```cpp
long long llroundl( long double arg );
```
_(since C99)_

```cpp
#define llround( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the nearest integer value to arg, rounding halfway cases away from zero, is returned.

## Notes
[FE_INEXACT](/c/numeric/fenv/FE_exceptions/) may be (but isn't required to be) raised by round when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so round never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lround.html) that all cases where lround or llround raise [FE_INVALID](/c/numeric/fenv/FE_exceptions/) are domain errors.

The double version of round behaves as if implemented as follows:

## Example
```cpp
#include <assert.h>
#include <fenv.h>
#include <float.h>
#include <limits.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
double custom_round(double x)
{
    return signbit(x) ? ceil(x - 0.5) : floor(x + 0.5);
}
 
void test_custom_round()
{
    const double sample[] =
    {
        0.0, 2.3, 2.5 - DBL_EPSILON, 2.5, 2.5 + DBL_EPSILON, 2.7, INFINITY
    };
    for (size_t t = 0; t < sizeof sample / sizeof(double); ++t)
        assert(round(+sample[t]) == custom_round(+sample[t]) &&
               round(-sample[t]) == custom_round(-sample[t]));
}
 
int main(void)
{
    // round
    printf("round(+2.3) = %+.1f  ", round(2.3));
    printf("round(+2.5) = %+.1f  ", round(2.5));
    printf("round(+2.7) = %+.1f\n", round(2.7));
    printf("round(-2.3) = %+.1f  ", round(-2.3));
    printf("round(-2.5) = %+.1f  ", round(-2.5));
    printf("round(-2.7) = %+.1f\n", round(-2.7));
 
    printf("round(-0.0) = %+.1f\n", round(-0.0));
    printf("round(-Inf) = %+f\n",   round(-INFINITY));
 
    test_custom_round();
 
    // lround
    printf("lround(+2.3) = %+ld  ", lround(2.3));
    printf("lround(+2.5) = %+ld  ", lround(2.5));
    printf("lround(+2.7) = %+ld\n", lround(2.7));
    printf("lround(-2.3) = %+ld  ", lround(-2.3));
    printf("lround(-2.5) = %+ld  ", lround(-2.5));
    printf("lround(-2.7) = %+ld\n", lround(-2.7));
 
    printf("lround(-0.0) = %+ld\n", lround(-0.0));
    printf("lround(-Inf) = %+ld\n", lround(-INFINITY)); // FE_INVALID raised
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("lround(LONG_MAX+1.5) = %ld\n", lround(LONG_MAX + 1.5));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID was raised");
}
```

## See also
- [floorfloorffloorl](/c/numeric/math/floor/)
- [ceilceilfceill](/c/numeric/math/ceil/)
- [trunctruncftruncl](/c/numeric/math/trunc/)
- [C++ documentation](/cpp/numeric/math/round/)
