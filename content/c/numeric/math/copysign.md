---
title: "copysign, copysignf, copysignl"
source_path: "c/numeric/math/copysign"
header: "<math.h>"
category: "c"
---

1-3) Composes a floating-point value with the magnitude of x and the sign of y.

## Declarations
```cpp
float copysignf( float x, float y );
```
_(since C99)_

```cpp
double copysign( double x, double y );
```
_(since C99)_

```cpp
long double copysignl( long double x, long double y );
```
_(since C99)_

```cpp
#define copysign(x, y)
```
_(since C99)_

## Parameters
- `x, y`: floating-point values

## Return value
If no errors occur, the floating-point value with the magnitude of x and the sign of y is returned.

## Notes
copysign is the only portable way to manipulate the sign of a NaN value (to examine the sign of a NaN, [signbit](/c/numeric/math/signbit/) may also be used).

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("copysign(1.0,+2.0)      = %+.1f\n", copysign(1.0,+2.0));
    printf("copysign(1.0,-2.0)      = %+.1f\n", copysign(1.0,-2.0));
    printf("copysign(INFINITY,-2.0) = %f\n",    copysign(INFINITY,-2.0));
    printf("copysign(NAN,-2.0)      = %f\n",    copysign(NAN,-2.0));
}
```

## See also
- [fabsfabsffabsl](/c/numeric/math/fabs/)
- [signbit](/c/numeric/math/signbit/)
- [C++ documentation](/cpp/numeric/math/copysign/)
