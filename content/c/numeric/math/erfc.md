---
title: "erfc, erfcf, erfcl"
source_path: "c/numeric/math/erfc"
header: "<math.h>"
category: "c"
---

1-3) Computes the [complementary error function](https://en.wikipedia.org/wiki/Complementary_error_function) of arg, that is 1.0 - [erf](/c/numeric/math/erf/)(arg), but without loss of precision for large arg.

## Declarations
```cpp
float erfcf( float arg );
```
_(since C99)_

```cpp
double erfc( double arg );
```
_(since C99)_

```cpp
long double erfcl( long double arg );
```
_(since C99)_

```cpp
#define erfc( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
For the IEEE-compatible type double, underflow is guaranteed if arg > 26.55.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
double normalCDF(double x) // Phi(-∞, x) aka N(x)
{
    return erfc(-x / sqrt(2)) / 2;
}
 
int main(void)
{
    puts("normal cumulative distribution function:");
    for (double n = 0; n < 1; n += 0.1)
        printf("normalCDF(%.2f) %5.2f%%\n", n, 100 * normalCDF(n));
 
    printf("special values:\n"
           "erfc(-Inf) = %f\n"
           "erfc(Inf) = %f\n",
           erfc(-INFINITY),
           erfc(INFINITY));
}
```

## See also
- [erferfferfl](/c/numeric/math/erf/)
- [C++ documentation](/cpp/numeric/math/erfc/)
