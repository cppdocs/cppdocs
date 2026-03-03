---
title: "atan, atanf, atanl"
source_path: "c/numeric/math/atan"
header: "<math.h>"
category: "c"
---

1-6) Computes the principal value of the arc tangent of arg.

## Declarations
```cpp
float atanf( float arg );
```
_(since C99)_

```cpp
double atan( double arg );
```

```cpp
long double atanl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 atand32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 atand64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 atand128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define atan( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atan.html) that in case of underflow, arg is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("atan(1) = %f, 4*atan(1)=%f\n", atan(1), 4 * atan(1));
    // special values
    printf("atan(Inf) = %f, 2*atan(Inf) = %f\n", atan(INFINITY), 2 * atan(INFINITY));
    printf("atan(-0.0) = %+f, atan(+0.0) = %+f\n", atan(-0.0), atan(0));
}
```

## See also
- [atan2atan2fatan2l](/c/numeric/math/atan2/)
- [asinasinfasinl](/c/numeric/math/asin/)
- [acosacosfacosl](/c/numeric/math/acos/)
- [tantanftanl](/c/numeric/math/tan/)
- [catancatanfcatanl](/c/numeric/complex/catan/)
- [C++ documentation](/cpp/numeric/math/atan/)
