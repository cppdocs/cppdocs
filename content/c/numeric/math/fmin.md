---
title: "fmin, fminf, fminl"
source_path: "c/numeric/math/fmin"
header: "<math.h>"
category: "c"
---

1-3) Returns the smaller of two floating-point arguments, treating NaNs as missing data (between a NaN and a numeric value, the numeric value is chosen).

## Declarations
```cpp
float fminf( float x, float y );
```
_(since C99)_

```cpp
double fmin( double x, double y );
```
_(since C99)_

```cpp
long double fminl( long double x, long double y );
```
_(since C99)_

```cpp
#define fmin( x, y )
```
_(since C99)_

## Parameters
- `x, y`: floating-point values

## Return value
If successful, returns the smaller of two floating-point values. The value returned is exact and does not depend on any rounding modes.

## Notes
This function is not required to be sensitive to the sign of zero, although some implementations additionally enforce that if one argument is +0 and the other is -0, then -0 is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("fmin(2,1)    = %f\n", fmin(2, 1));
    printf("fmin(-Inf,0) = %f\n", fmin(-INFINITY, 0));
    printf("fmin(NaN,-1) = %f\n", fmin(NAN, -1));
}
```

## See also
- [isless](/c/numeric/math/isless/)
- [fmaxfmaxffmaxl](/c/numeric/math/fmax/)
- [C++ documentation](/cpp/numeric/math/fmin/)
