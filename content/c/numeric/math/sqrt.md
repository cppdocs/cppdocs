---
title: "sqrt, sqrtf, sqrtl"
source_path: "c/numeric/math/sqrt"
header: "<math.h>"
category: "c"
---

1-3) Computes square root of arg.

## Declarations
```cpp
float sqrtf( float arg );
```
_(since C99)_

```cpp
double sqrt( double arg );
```

```cpp
long double sqrtl( long double arg );
```
_(since C99)_

```cpp
#define sqrt( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, square root of arg (\({\small \sqrt{arg} }\)√arg), is returned.

## Notes
sqrt is required by the IEEE standard to be correctly rounded from the infinitely precise result. In particular, the exact result is produced if it can be represented in the floating-point type. The only other operations which require this are the [arithmetic operators](/c/language/operator_arithmetic/) and the function [fma](/c/numeric/math/fma/). Other functions, including [pow](/c/numeric/math/pow/), are not so constrained.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    // normal use
    printf("sqrt(100) = %f\n", sqrt(100));
    printf("sqrt(2) = %f\n", sqrt(2));
    printf("golden ratio = %f\n", (1 + sqrt(5)) / 2);
 
    // special values
    printf("sqrt(-0) = %f\n", sqrt(-0.0));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("sqrt(-1.0) = %f\n", sqrt(-1));
    if (errno == EDOM)
        perror("    errno == EDOM");
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID was raised");
}
```

## See also
- [powpowfpowl](/c/numeric/math/pow/)
- [cbrtcbrtfcbrtl](/c/numeric/math/cbrt/)
- [hypothypotfhypotl](/c/numeric/math/hypot/)
- [csqrtcsqrtfcsqrtl](/c/numeric/complex/csqrt/)
- [C++ documentation](/cpp/numeric/math/sqrt/)
