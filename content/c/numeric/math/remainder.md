---
title: "remainder, remainderf, remainderl"
source_path: "c/numeric/math/remainder"
header: "<math.h>"
category: "c"
---

1-3) Computes the IEEE remainder of the floating-point division operation x/y.

## Declarations
```cpp
float remainderf( float x, float y );
```
_(since C99)_

```cpp
double remainder( double x, double y );
```
_(since C99)_

```cpp
long double remainderl( long double x, long double y );
```
_(since C99)_

```cpp
#define remainder( x, y )
```
_(since C99)_

## Parameters
- `x, y`: floating-point values

## Return value
If successful, returns the IEEE floating-point remainder of the division x/y as defined above.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remainder.html) that a domain error occurs if x is infinite or y is zero.

[fmod](/c/numeric/math/fmod/), but not remainder is useful for doing silent wrapping of floating-point types to unsigned integer types: (0.0 <= (y = [fmod](/c/numeric/math/fmod/)([rint](/c/numeric/math/rint/)(x), 65536.0)) ? y : 65536.0 + y) is in the range [-0.0,65535.0], which corresponds to unsigned short, but remainder([rint](/c/numeric/math/rint/)(x), 65536.0) is in the range [-32767.0,+32768.0], which is outside of the range of signed short.

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("remainder(+5.1, +3.0) = %.1f\n", remainder(5.1, 3));
    printf("remainder(-5.1, +3.0) = %.1f\n", remainder(-5.1, 3));
    printf("remainder(+5.1, -3.0) = %.1f\n", remainder(5.1, -3));
    printf("remainder(-5.1, -3.0) = %.1f\n", remainder(-5.1, -3));
 
    // special values
    printf("remainder(-0.0, 1.0) = %.1f\n", remainder(-0.0, 1));
    printf("remainder(+5.1, Inf) = %.1f\n", remainder(5.1, INFINITY));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("remainder(+5.1, 0) = %.1f\n", remainder(5.1, 0));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [divldivlldiv](/c/numeric/math/div/)
- [fmodfmodffmodl](/c/numeric/math/fmod/)
- [remquoremquofremquol](/c/numeric/math/remquo/)
- [C++ documentation](/cpp/numeric/math/remainder/)
