---
title: "erf, erff, erfl"
source_path: "c/numeric/math/erf"
header: "<math.h>"
category: "c"
---

1-3) Computes the [error function](https://en.wikipedia.org/wiki/Error_function) of arg.

## Declarations
```cpp
float erff( float arg );
```
_(since C99)_

```cpp
double erf( double arg );
```
_(since C99)_

```cpp
long double erfl( long double arg );
```
_(since C99)_

```cpp
#define erf( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Notes
Underflow is guaranteed if |arg| < [DBL_MIN](/c/types/limits/)*([sqrt](/c/numeric/math/sqrt/)(π)/2).

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
double phi(double x1, double x2)
{
    return (erf(x2 / sqrt(2)) - erf(x1 / sqrt(2))) / 2;
}
 
int main(void)
{
    puts("normal variate probabilities:");
    for (int n = -4; n < 4; ++n)
        printf("[%2d:%2d]: %5.2f%%\n", n, n + 1, 100 * phi(n, n + 1));
 
    puts("special values:");
    printf("erf(-0) = %f\n", erf(-0.0));
    printf("erf(Inf) = %f\n", erf(INFINITY));
}
```

## See also
- [erfcerfcferfcl](/c/numeric/math/erfc/)
- [C++ documentation](/cpp/numeric/math/erf/)
