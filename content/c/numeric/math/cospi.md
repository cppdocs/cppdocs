---
title: "cospi, cospif, cospil, cospid32, cospid64, cospid128"
source_path: "c/numeric/math/cospi"
header: "<math.h>"
category: "c"
---

1-6) Computes the cosine of π·arg measured in radians, thus regarding arg as a measurement in half-revolutions.

## Declarations
```cpp
float cospif( float arg );
```
_(since C23)_

```cpp
double cospi( double arg );
```
_(since C23)_

```cpp
long double cospil( long double arg );
```
_(since C23)_

```cpp
_Decimal32 cospid32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 cospid64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 cospid128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define cospi( arg )
```
_(since C23)_

## Parameters
- `arg`: floating-point value whose product with π represents an angle in radians

## Return value
If no errors occur, the cosine of π·arg (cos(π×arg)) in the range [-1, +1], is returned.

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
// A naive implementation of a subset of cospi family
double cospi(double arg)
{
    return cos(arg * (double)3.1415926535897932384626433);
}
#endif
 
int main(void)
{
    const double pi = acos(-1);
 
    // typical usage
    printf("cospi(1) = %f, cos(pi) = %f\n", cospi(1), cos(pi));
    printf("cospi(0.5) = %f, cos(pi/2) = %f\n", cospi(0.5), cos(pi / 2));
    printf("cospi(-0.75) = %f, cos(-3*pi/4) = %f\n", cospi(-0.75), cos(-3 * pi / 4));
 
    // special values
    printf("cospi(+0) = %f\n", cospi(0.0));
    printf("cospi(-0) = %f\n", cospi(-0.0));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("cospi(INFINITY) = %f\n", cospi(INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [coscosfcosl](/c/numeric/math/cos/)
