---
title: "scalbn, scalbnf, scalbnl, scalbln, scalblnf, scalblnl"
source_path: "c/numeric/math/scalbn"
header: "<math.h>"
category: "c"
---

1-3,5-7) Multiplies a floating-point value arg by [FLT_RADIX](/c/types/limits/) raised to power [exp](/c/numeric/math/exp/).

## Declarations
```cpp
float scalbnf( float arg, int exp );
```
_(since C99)_

```cpp
double scalbn( double arg, int exp );
```
_(since C99)_

```cpp
long double scalbnl( long double arg, int exp );
```
_(since C99)_

```cpp
#define scalbn( arg, exp )
```
_(since C99)_

```cpp
float scalblnf( float arg, long exp );
```
_(since C99)_

```cpp
double scalbln( double arg, long exp );
```
_(since C99)_

```cpp
long double scalblnl( long double arg, long exp );
```
_(since C99)_

```cpp
#define scalbln( arg, exp )
```
_(since C99)_

## Parameters
- `arg`: floating-point value
- `exp`: integer value

## Return value
If no errors occur, arg multiplied by [FLT_RADIX](/c/types/limits/) to the power of [exp](/c/numeric/math/exp/) (arg×FLT_RADIXexp) is returned.

## Notes
On binary systems (where [FLT_RADIX](/c/types/limits/) is 2), scalbn is equivalent to [ldexp](/c/numeric/math/ldexp/).

Although scalbn and scalbln are specified to perform the operation efficiently, on many implementations they are less efficient than multiplication or division by a power of two using arithmetic operators.

The scalbln function is provided because the factor required to scale from the smallest positive floating-point value to the largest finite one may be greater than 32767, the standard-guaranteed [INT_MAX](/c/types/limits/). In particular, for the 80-bit long double, the factor is 32828.

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
    printf("scalbn(7, -4) = %f\n", scalbn(7, -4));
    printf("scalbn(1, -1074) = %g (minimum positive subnormal double)\n",
            scalbn(1, -1074));
    printf("scalbn(nextafter(1,0), 1024) = %g (largest finite double)\n",
            scalbn(nextafter(1,0), 1024));
 
    // special values
    printf("scalbn(-0, 10) = %f\n", scalbn(-0.0, 10));
    printf("scalbn(-Inf, -1) = %f\n", scalbn(-INFINITY, -1));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("scalbn(1, 1024) = %f\n", scalbn(1, 1024));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [frexpfrexpffrexpl](/c/numeric/math/frexp/)
- [ldexpldexpfldexpl](/c/numeric/math/ldexp/)
- [C++ documentation](/cpp/numeric/math/scalbn/)
