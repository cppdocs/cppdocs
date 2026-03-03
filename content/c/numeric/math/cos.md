---
title: "cos, cosf, cosl"
source_path: "c/numeric/math/cos"
header: "<math.h>"
category: "c"
---

1-6) Computes the cosine of arg (measured in radians).

## Declarations
```cpp
float cosf( float arg );
```
_(since C99)_

```cpp
double cos( double arg );
```

```cpp
long double cosl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 cosd32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 cosd64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 cosd128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define cos( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing angle in radians

## Return value
If no errors occur, the cosine of arg (cos(arg)) in the range [-1 ; +1], is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C, but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/cos.html).

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
    printf("cos(pi/3) = %f\n", cos(pi / 3));
    printf("cos(pi/2) = %f\n", cos(pi / 2));
    printf("cos(-3*pi/4) = %f\n", cos(-3 * pi / 4));
 
    // special values
    printf("cos(+0) = %f\n", cos(0.0));
    printf("cos(-0) = %f\n", cos(-0.0));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("cos(INFINITY) = %f\n", cos(INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [sinsinfsinl](/c/numeric/math/sin/)
- [tantanftanl](/c/numeric/math/tan/)
- [acosacosfacosl](/c/numeric/math/acos/)
- [ccosccosfccosl](/c/numeric/complex/ccos/)
- [C++ documentation](/cpp/numeric/math/cos/)
