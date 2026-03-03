---
title: "sinpi, sinpif, sinpil, sinpid32, sinpid64, sinpid128"
source_path: "c/numeric/math/sinpi"
header: "<math.h>"
category: "c"
---

1-6) Computes the sine of π·arg measured in radians, thus regarding arg as a measurement in half-revolutions.

## Declarations
```cpp
float sinpif( float arg );
```
_(since C23)_

```cpp
double sinpi( double arg );
```
_(since C23)_

```cpp
long double sinpil( long double arg );
```
_(since C23)_

```cpp
_Decimal32 sinpid32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 sinpid64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 sinpid128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define sinpi( arg )
```
_(since C23)_

## Parameters
- `arg`: floating-point value whose product with π represents an angle in radians

## Return value
If no errors occur, the sine of π·arg (sin(π×arg)) in the range [-1, +1], is returned.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
#if __STDC_VERSION__ < 202311L
// A naive implementation of a subset of sinpi family
double sinpi(double arg)
{
    return sin(arg * (double)3.1415926535897932384626433);
}
#endif
 
int main(void)
{
    const double pi = acos(-1);
 
    // typical usage
    printf("sinpi(1) = %f, sin(pi) = %f\n", sinpi(1), sin(pi));
    printf("sinpi(0.5) = %f, sin(pi/2) = %f\n", sinpi(0.5), sin(pi / 2));
    printf("sinpi(-0.75) = %f, sin(-3*pi/4) = %f\n", sinpi(-0.75), sin(-3 * pi / 4));
 
    // special values
    printf("sinpi(+0) = %f\n", sinpi(0.0));
    printf("sinpi(-0) = %f\n", sinpi(-0.0));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("sinpi(INFINITY) = %f\n", sinpi(INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [sinsinfsinl](/c/numeric/math/sin/)
