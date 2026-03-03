---
title: "fabs, fabsf, fabsl, fabsd32, fabsd64, fabsd128"
source_path: "c/numeric/math/fabs"
header: "<math.h>"
category: "c"
---

1-6) Computes the absolute value of a floating-point value arg.
The functions with decimal floating-point parameters are declared if and only if the implementation predefines __STDC_IEC_60559_DFP__ (i.e. the implementation supports decimal floating-point numbers).
(since C23)

## Declarations
```cpp
float fabsf( float arg );
```
_(since C99)_

```cpp
double fabs( double arg );
```

```cpp
long double fabsl( long double arg );
```
_(since C99)_

```cpp
_Decimal32 fabsd32( _Decimal32 arg );
```
_(since C23)_

```cpp
_Decimal64 fabsd64( _Decimal64 arg );
```
_(since C23)_

```cpp
_Decimal128 fabsd128( _Decimal128 arg );
```
_(since C23)_

```cpp
#define fabs( arith )
```
_(since C99)_

## Parameters
- `arg`: floating-point value
- `arith`: floating-point or integer value

## Return value
If successful, returns the absolute value of arg (\(\small |arg| \)|arg|). The value returned is exact and does not depend on any rounding modes.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
#define PI 3.14159
 
// This numerical integration assumes all area is positive.
double integrate(double f(double),
                 double a, double b, // assume a < b
                 unsigned steps) // assume steps > 0
{
    const double dx = (b - a) / steps;
    double sum = 0.0;
    for (double x = a; x < b; x += dx)
        sum += fabs(f(x));
    return dx * sum;
}
 
int main(void)
{
    printf("fabs(+3) = %f\n", fabs(+3.0));
    printf("fabs(-3) = %f\n", fabs(-3.0));
    // special values
    printf("fabs(-0) = %f\n", fabs(-0.0));
    printf("fabs(-Inf) = %f\n", fabs(-INFINITY));
 
    printf("Area under sin(x) in [-PI, PI] = %f\n", integrate(sin, -PI, PI, 5101));
}
```

## See also
- [abslabsllabs](/c/numeric/math/abs/)
- [copysigncopysignfcopysignl](/c/numeric/math/copysign/)
- [signbit](/c/numeric/math/signbit/)
- [cabscabsfcabsl](/c/numeric/complex/cabs/)
- [C++ documentation](/cpp/numeric/math/fabs/)
