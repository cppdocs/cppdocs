---
title: "ldexp, ldexpf, ldexpl"
source_path: "c/numeric/math/ldexp"
header: "<math.h>"
category: "c"
---

1-3) Multiplies a floating-point value arg by the number 2 raised to the [exp](/c/numeric/math/exp/) power.

## Declarations
```cpp
float ldexpf( float arg, int exp );
```
_(since C99)_

```cpp
double ldexp( double arg, int exp );
```

```cpp
long double ldexpl( long double arg, int exp );
```
_(since C99)_

```cpp
#define ldexp( arg, exp )
```
_(since C99)_

## Parameters
- `arg`: floating-point value
- `exp`: integer value

## Return value
If no errors occur, arg multiplied by 2 to the power of [exp](/c/numeric/math/exp/) (arg×2exp) is returned.

## Notes
On binary systems (where [FLT_RADIX](/c/types/limits/) is 2), ldexp is equivalent to [scalbn](/c/numeric/math/scalbn/).

The function ldexp ("load exponent"), together with its dual, [frexp](/c/numeric/math/frexp/), can be used to manipulate the representation of a floating-point number without direct bit manipulations.

On many implementations, ldexp is less efficient than multiplication or division by a power of two using arithmetic operators.

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
    printf("ldexp(7, -4) = %f\n", ldexp(7, -4));
    printf("ldexp(1, -1074) = %g (minimum positive subnormal double)\n",
            ldexp(1, -1074));
    printf("ldexp(nextafter(1,0), 1024) = %g (largest finite double)\n",
            ldexp(nextafter(1,0), 1024));
 
    // special values
    printf("ldexp(-0, 10) = %f\n", ldexp(-0.0, 10));
    printf("ldexp(-Inf, -1) = %f\n", ldexp(-INFINITY, -1));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("ldexp(1, 1024) = %f\n", ldexp(1, 1024));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [frexpfrexpffrexpl](/c/numeric/math/frexp/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/c/numeric/math/scalbn/)
- [FLT_RADIX](/c/types/limits/)
- [C++ documentation](/cpp/numeric/math/ldexp/)
