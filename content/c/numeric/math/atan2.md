---
title: "atan2, atan2f, atan2l"
source_path: "c/numeric/math/atan2"
header: "<math.h>"
category: "c"
---

1-6) Computes the arc tangent of y / x using the signs of arguments to determine the correct quadrant.

## Declarations
```cpp
float atan2f( float y, float x );
```
_(since C99)_

```cpp
double atan2( double y, double x );
```

```cpp
long double atan2l( long double y, long double x );
```
_(since C99)_

```cpp
_Decimal32 atan2d32( _Decimal32 y, _Decimal32 x );
```
_(since C23)_

```cpp
_Decimal64 atan2d64( _Decimal64 y, _Decimal64 x );
```
_(since C23)_

```cpp
_Decimal128 atan2d128( _Decimal128 y, _Decimal128 x );
```
_(since C23)_

```cpp
#define atan2( y, x )
```
_(since C99)_

## Parameters
- `x, y`: floating-point value

## Return value
If a domain error occurs, an implementation-defined value is returned.

## Notes
atan2(y, x) is equivalent to [carg](/c/numeric/complex/carg/)(x + I*y).

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atan2.html) that in case of underflow, y / x is the value returned, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    // normal usage: the signs of the two arguments determine the quadrant
    // atan2(1,1) = +pi/4, Quad I
    printf("(+1,+1) cartesian is (%f,%f) polar\n", hypot( 1, 1), atan2( 1, 1));
    // atan2(1, -1) = +3pi/4, Quad II
    printf("(+1,-1) cartesian is (%f,%f) polar\n", hypot( 1,-1), atan2( 1,-1));
    // atan2(-1,-1) = -3pi/4, Quad III
    printf("(-1,-1) cartesian is (%f,%f) polar\n", hypot(-1,-1), atan2(-1,-1));
    // atan2(-1,-1) = -pi/4, Quad IV
    printf("(-1,+1) cartesian is (%f,%f) polar\n", hypot(-1, 1), atan2(-1, 1));
 
    // special values
    printf("atan2(0, 0) = %f atan2(0, -0)=%f\n", atan2(0,0), atan2(0,-0.0));
    printf("atan2(7, 0) = %f atan2(7, -0)=%f\n", atan2(7,0), atan2(7,-0.0));
}
```

## See also
- [asinasinfasinl](/c/numeric/math/asin/)
- [acosacosfacosl](/c/numeric/math/acos/)
- [atanatanfatanl](/c/numeric/math/atan/)
- [cargcargfcargl](/c/numeric/complex/carg/)
- [C++ documentation](/cpp/numeric/math/atan2/)
