---
title: "fmax, fmaxf, fmaxl"
source_path: "c/numeric/math/fmax"
header: "<math.h>"
category: "c"
---

1-3) Returns the larger of two floating-point arguments, treating NaNs as missing data (between a NaN and a numeric value, the numeric value is chosen).

## Declarations
```cpp
float fmaxf( float x, float y );
```
_(since C99)_

```cpp
double fmax( double x, double y );
```
_(since C99)_

```cpp
long double fmaxl( long double x, long double y );
```
_(since C99)_

```cpp
#define fmax( x, y )
```
_(since C99)_

## Parameters
- `x, y`: floating-point values

## Return value
If successful, returns the larger of two floating-point values. The value returned is exact and does not depend on any rounding modes.

## Notes
This function is not required to be sensitive to the sign of zero, although some implementations additionally enforce that if one argument is +0 and the other is -0, then +0 is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("fmax(2,1)    = %f\n", fmax(2,1));
    printf("fmax(-Inf,0) = %f\n", fmax(-INFINITY,0));
    printf("fmax(NaN,-1) = %f\n", fmax(NAN,-1));
}
```

## See also
- [isgreater](/c/numeric/math/isgreater/)
- [fminfminffminl](/c/numeric/math/fmin/)
- [C++ documentation](/cpp/numeric/math/fmax/)
