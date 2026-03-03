---
title: "fdim, fdimf, fdiml"
source_path: "c/numeric/math/fdim"
header: "<math.h>"
category: "c"
---

1-3) Returns the positive difference between x and y, that is, if x>y, returns x-y, otherwise (if x≤y), returns +0.

## Declarations
```cpp
float fdimf( float x, float y );
```
_(since C99)_

```cpp
double fdim( double x, double y );
```
_(since C99)_

```cpp
long double fdiml( long double x, long double y );
```
_(since C99)_

```cpp
#define fdim( x, y )
```
_(since C99)_

## Parameters
- `x, y`: floating-point value

## Return value
If successful, returns the positive difference between x and y.

## Notes
Equivalent to [fmax](/c/numeric/math/fmax/)(x-y, 0) except for the NaN handling requirements.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("fdim(4, 1) = %f, fdim(1, 4)=%f\n", fdim(4,1), fdim(1,4));
    printf("fdim(4,-1) = %f, fdim(1,-4)=%f\n", fdim(4,-1), fdim(1,-4));
    //error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("fdim(1e308, -1e308) = %f\n", fdim(1e308, -1e308));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [abslabsllabs](/c/numeric/math/abs/)
- [fmaxfmaxffmaxl](/c/numeric/math/fmax/)
- [C++ documentation](/cpp/numeric/math/fdim/)
