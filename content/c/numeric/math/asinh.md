---
title: "asinh, asinhf, asinhl"
source_path: "c/numeric/math/asinh"
header: "<math.h>"
category: "c"
---

1-3) Computes the inverse hyperbolic sine of arg.

## Declarations
```cpp
float asinhf( float arg );
```
_(since C99)_

```cpp
double asinh( double arg );
```
_(since C99)_

```cpp
long double asinhl( long double arg );
```
_(since C99)_

```cpp
#define asinh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing the area of a hyperbolic sector

## Return value
If no errors occur, the inverse hyperbolic sine of arg (sinh-1(arg), or arsinh(arg)), is returned.

## Notes
Although the C standard names this function "arc hyperbolic sine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic sine" (used by POSIX) or "area hyperbolic sine".

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("asinh(1) = %f\nasinh(-1) = %f\n", asinh(1), asinh(-1));
    // special values
    printf("asinh(+0) = %f\nasinh(-0) = %f\n", asinh(0.0), asinh(-0.0));
}
```

## See also
- [acoshacoshfacoshl](/c/numeric/math/acosh/)
- [atanhatanhfatanhl](/c/numeric/math/atanh/)
- [sinhsinhfsinhl](/c/numeric/math/sinh/)
- [casinhcasinhfcasinhl](/c/numeric/complex/casinh/)
- [C++ documentation](/cpp/numeric/math/asinh/)
