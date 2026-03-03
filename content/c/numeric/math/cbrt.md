---
title: "cbrt, cbrtf, cbrtl"
source_path: "c/numeric/math/cbrt"
header: "<math.h>"
category: "c"
---

1-3) Computes the cube root of arg.

## Declarations
```cpp
float cbrtf( float arg );
```
_(since C99)_

```cpp
double cbrt( double arg );
```
_(since C99)_

```cpp
long double cbrtl( long double arg );
```
_(since C99)_

```cpp
#define cbrt( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the cube root of arg (\(\small{\sqrt[3]{arg} }\)3√arg), is returned.

## Notes
cbrt(arg)
pow(arg, 1.0/3)
\(\small{\frac1{3} }\)
13
1.0/3
std::pow
cbrt(arg)
pow(arg, 1.0/3)

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("Normal use:\n"
           "cbrt(729)      = %f\n", cbrt(729));
    printf("cbrt(-0.125)   = %f\n", cbrt(-0.125));
    printf("Special values:\n"
           "cbrt(-0)       = %f\n", cbrt(-0.0));
    printf("cbrt(+inf)     = %f\n", cbrt(INFINITY));
    printf("Accuracy:\n"
           "cbrt(343)      = %.*f\n", DBL_DECIMAL_DIG, cbrt(343));
    printf("pow(343,1.0/3) = %.*f\n", DBL_DECIMAL_DIG, pow(343, 1.0/3));
}
```

## See also
- [powpowfpowl](/c/numeric/math/pow/)
- [sqrtsqrtfsqrtl](/c/numeric/math/sqrt/)
- [hypothypotfhypotl](/c/numeric/math/hypot/)
- [C++ documentation](/cpp/numeric/math/cbrt/)
