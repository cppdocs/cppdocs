---
title: "fmod, fmodf, fmodl"
source_path: "c/numeric/math/fmod"
header: "<math.h>"
category: "c"
---

1-3) Computes the floating-point remainder of the division operation x / y.

## Declarations
```cpp
float fmodf( float x, float y );
```
_(since C99)_

```cpp
double fmod( double x, double y );
```

```cpp
long double fmodl( long double x, long double y );
```
_(since C99)_

```cpp
#define fmod( x, y )
```
_(since C99)_

## Parameters
- `x, y`: floating-point values

## Return value
If successful, returns the floating-point remainder of the division x / y as defined above.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fmod.html) that a domain error occurs if x is infinite or y is zero.

fmod, but not [remainder](/c/numeric/math/remainder/) is useful for doing silent wrapping of floating-point types to unsigned integer types: (0.0 <= (y = fmod([rint](/c/numeric/math/rint/)(x), 65536.0 )) ? y : 65536.0 + y) is in the range [-0.0,65535.0], which corresponds to unsigned short, but [remainder](/c/numeric/math/remainder/)([rint](/c/numeric/math/rint/)(x), 65536.0) is in the range [-32767.0,+32768.0], which is outside of the range of signed short.

The double version of fmod behaves as if implemented as follows:

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("fmod(+5.1, +3.0) = %.1f\n", fmod(5.1, 3));
    printf("fmod(-5.1, +3.0) = %.1f\n", fmod(-5.1, 3));
    printf("fmod(+5.1, -3.0) = %.1f\n", fmod(5.1, -3));
    printf("fmod(-5.1, -3.0) = %.1f\n", fmod(-5.1, -3));
 
    // special values
    printf("fmod(+0.0, 1.0) = %.1f\n", fmod(0, 1));
    printf("fmod(-0.0, 1.0) = %.1f\n", fmod(-0.0, 1));
    printf("fmod(+5.1, Inf) = %.1f\n", fmod(5.1, INFINITY));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("fmod(+5.1, 0) = %.1f\n", fmod(5.1, 0));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [divldivlldiv](/c/numeric/math/div/)
- [remainderremainderfremainderl](/c/numeric/math/remainder/)
- [remquoremquofremquol](/c/numeric/math/remquo/)
- [C++ documentation](/cpp/numeric/math/fmod/)
