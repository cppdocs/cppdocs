---
title: "hypot, hypotf, hypotl"
source_path: "c/numeric/math/hypot"
header: "<math.h>"
category: "c"
---

1-3) Computes the square root of the sum of the squares of x and y, without undue overflow or underflow at intermediate stages of the computation.

## Declarations
```cpp
float hypotf( float x, float y );
```
_(since C99)_

```cpp
double hypot( double x, double y );
```
_(since C99)_

```cpp
long double hypotl( long double x, long double y );
```
_(since C99)_

```cpp
#define hypot( x, y )
```
_(since C99)_

## Parameters
- `x`: floating-point value
- `y`: floating-point value

## Return value
If no errors occur, the hypotenuse of a right-angled triangle, \(\scriptsize{\sqrt{x^2+y^2} }\)√x2+y2, is returned.

## Notes
Implementations usually guarantee precision of less than 1 ulp ([units in the last place](https://en.wikipedia.org/wiki/Unit_in_the_last_place)): [GNU](https://sourceware.org/git/?p=glibc.git;a=blob_plain;f=sysdeps/ieee754/dbl-64/e_hypot.c), [BSD](https://www.freebsd.org/cgi/cvsweb.cgi/src/lib/msun/src/e_hypot.c).

hypot(x, y) is equivalent to [cabs](/c/numeric/complex/cabs/)(x + I*y).

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/hypot.html) that underflow may only occur when both arguments are subnormal and the correct result is also subnormal (this forbids naive implementations).

hypot(INFINITY, NAN) returns +∞, but [sqrt](/c/numeric/math/sqrt/)(INFINITY * INFINITY + NAN * NAN) returns NaN.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    // typical usage
    printf("(1,1) cartesian is (%f,%f) polar\n", hypot(1,1), atan2(1, 1));
 
    // special values
    printf("hypot(NAN,INFINITY) = %f\n", hypot(NAN, INFINITY));
 
    // error handling
    errno = 0;
    feclearexcept(FE_ALL_EXCEPT);
    printf("hypot(DBL_MAX,DBL_MAX) = %f\n", hypot(DBL_MAX, DBL_MAX));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [powpowfpowl](/c/numeric/math/pow/)
- [sqrtsqrtfsqrtl](/c/numeric/math/sqrt/)
- [cbrtcbrtfcbrtl](/c/numeric/math/cbrt/)
- [cabscabsfcabsl](/c/numeric/complex/cabs/)
- [C++ documentation](/cpp/numeric/math/hypot/)
