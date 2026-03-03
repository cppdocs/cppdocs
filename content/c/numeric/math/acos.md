---
title: "acos, acosf, acosl"
source_path: "c/numeric/math/acos"
header: "<math.h>"
category: "c"
---

1-6) Computes the principal value of the arc cosine of arg.

## Declarations
```cpp
float acosf( float arg );
```
_(since C99)_

```cpp
double acos( double arg );
```

```cpp
long double acosl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 acosd32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 acosd64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 acosd128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define acos( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the arc cosine of arg (arccos(arg)) in the range [0 ; π], is returned.

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
    printf("acos(-1) = %f\n", acos(-1));
    printf("acos(0.0) = %f 2*acos(0.0) = %f\n", acos(0), 2 * acos(0));
    printf("acos(0.5) = %f 3*acos(0.5) = %f\n", acos(0.5), 3 * acos(0.5));
    printf("acos(1) = %f\n", acos(1));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("acos(1.1) = %f\n", acos(1.1));
    if (errno == EDOM)
        perror("    errno == EDOM");
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [asinasinfasinl](/c/numeric/math/asin/)
- [atanatanfatanl](/c/numeric/math/atan/)
- [atan2atan2fatan2l](/c/numeric/math/atan2/)
- [coscosfcosl](/c/numeric/math/cos/)
- [cacoscacosfcacosl](/c/numeric/complex/cacos/)
- [C++ documentation](/cpp/numeric/math/acos/)
