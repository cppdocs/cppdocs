---
title: "sin, sinf, sinl"
source_path: "c/numeric/math/sin"
header: "<math.h>"
category: "c"
---

1-3) Computes the sine of arg (measured in radians).

## Declarations
```cpp
float sinf( float arg );
```
_(since C99)_

```cpp
double sin( double arg );
```

```cpp
long double sinl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 sind32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 sind64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 sind128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define sin( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing an angle in radians

## Return value
If no errors occur, the sine of arg (sin(arg)) in the range [-1 ; +1], is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C, but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/sin.html).

POSIX also specifies that in case of underflow, arg is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
int main(void)
{
    const double pi = acos(-1);
 
    // typical usage
    printf("sin(pi/6) = %f\n", sin(pi / 6));
    printf("sin(pi/2) = %f\n", sin(pi / 2));
    printf("sin(-3*pi/4) = %f\n", sin(-3 * pi / 4));
 
    // special values
    printf("sin(+0) = %f\n", sin(0.0));
    printf("sin(-0) = %f\n", sin(-0.0));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("sin(INFINITY) = %f\n", sin(INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [coscosfcosl](/c/numeric/math/cos/)
- [tantanftanl](/c/numeric/math/tan/)
- [asinasinfasinl](/c/numeric/math/asin/)
- [csincsinfcsinl](/c/numeric/complex/csin/)
- [C++ documentation](/cpp/numeric/math/sin/)
