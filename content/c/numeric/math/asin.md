---
title: "asin, asinf, asinl"
source_path: "c/numeric/math/asin"
header: "<math.h>"
category: "c"
---

1-6) Computes the principal values of the arc sine of arg.

## Declarations
```cpp
float asinf( float arg );
```
_(since C99)_

```cpp
double asin( double arg );
```

```cpp
long double asinl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 asind32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 asind64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 asind128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define asin( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If a domain error occurs, an implementation-defined value is returned (NaN where supported).

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
#include <string.h>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
int main(void)
{
    printf("asin( 1.0) = %+f, 2*asin( 1.0)=%+f\n", asin(1), 2 * asin(1));
    printf("asin(-0.5) = %+f, 6*asin(-0.5)=%+f\n", asin(-0.5), 6 * asin(-0.5));
 
    // special values
    printf("asin(0.0) = %1f, asin(-0.0)=%f\n", asin(+0.0), asin(-0.0));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("asin(1.1) = %f\n", asin(1.1));
    if (errno == EDOM)
        perror("    errno == EDOM");
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [acosacosfacosl](/c/numeric/math/acos/)
- [atanatanfatanl](/c/numeric/math/atan/)
- [atan2atan2fatan2l](/c/numeric/math/atan2/)
- [sinsinfsinl](/c/numeric/math/sin/)
- [casincasinfcasinl](/c/numeric/complex/casin/)
- [C++ documentation](/cpp/numeric/math/asin/)
