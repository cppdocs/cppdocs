---
title: "tan, tanf, tanl"
source_path: "c/numeric/math/tan"
header: "<math.h>"
category: "c"
---

1-6) Computes the tangent of arg (measured in radians).

## Declarations
```cpp
float tanf( float arg );
```
_(since C99)_

```cpp
double tan( double arg );
```

```cpp
long double tanl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 tand32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 tand64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 tand128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define tan( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing angle in radians

## Return value
If no errors occur, the tangent of arg (tan(arg)) is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C, but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tan.html).

The function has mathematical poles at π(1/2 + n); however no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

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
    printf("tan(pi*1/4) = %+f\n", tan(pi * 1 / 4)); //   45 deg
    printf("tan(pi*3/4) = %+f\n", tan(pi * 3 / 4)); //  135 deg
    printf("tan(pi*5/4) = %+f\n", tan(pi * 5 / 4)); // -135 deg
    printf("tan(pi*7/4) = %+f\n", tan(pi * 7 / 4)); //  -45 deg
 
    // special values
    printf("tan(+0) = %f\n", tan(0.0));
    printf("tan(-0) = %f\n", tan(-0.0));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("tan(INFINITY) = %f\n", tan(INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [sinsinfsinl](/c/numeric/math/sin/)
- [coscosfcosl](/c/numeric/math/cos/)
- [atanatanfatanl](/c/numeric/math/atan/)
- [ctanctanfctanl](/c/numeric/complex/ctan/)
- [C++ documentation](/cpp/numeric/math/tan/)
