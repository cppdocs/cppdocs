---
title: "pow, powf, powl"
source_path: "c/numeric/math/pow"
header: "<math.h>"
category: "c"
---

1-3) Computes the value of base raised to the power exponent.

## Declarations
```cpp
float powf( float base, float exponent );
```
_(since C99)_

```cpp
double pow( double base, double exponent );
```

```cpp
long double powl( long double base, long double exponent );
```
_(since C99)_

```cpp
#define pow( base, exponent )
```
_(since C99)_

## Parameters
- `base`: base as floating-point value
- `exponent`: exponent as floating-point value

## Return value
If no errors occur, base raised to the power of exponent (baseexponent) is returned.

## Notes
Although pow cannot be used to obtain a root of a negative number, [cbrt](/c/numeric/math/cbrt/) is provided for the common case where exponent is 1 / 3.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    // typical usage
    printf("pow(2, 10) = %f\n", pow(2, 10));
    printf("pow(2, 0.5) = %f\n", pow(2, 0.5));
    printf("pow(-2, -3) = %f\n", pow(-2, -3));
 
    // special values
    printf("pow(-1, NAN) = %f\n", pow(-1, NAN));
    printf("pow(+1, NAN) = %f\n", pow(+1, NAN));
    printf("pow(INFINITY, 2) = %f\n", pow(INFINITY, 2));
    printf("pow(INFINITY, -1) = %f\n", pow(INFINITY, -1));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("pow(-1, 1/3) = %f\n", pow(-1, 1.0 / 3));
    if (errno == EDOM)
        perror("    errno == EDOM");
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
 
    feclearexcept(FE_ALL_EXCEPT);
    printf("pow(-0, -3) = %f\n", pow(-0.0, -3));
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [sqrtsqrtfsqrtl](/c/numeric/math/sqrt/)
- [cbrtcbrtfcbrtl](/c/numeric/math/cbrt/)
- [hypothypotfhypotl](/c/numeric/math/hypot/)
- [cpowcpowfcpowl](/c/numeric/complex/cpow/)
- [C++ documentation](/cpp/numeric/math/pow/)
