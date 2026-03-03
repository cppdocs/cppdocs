---
title: "tgamma, tgammaf, tgammal"
source_path: "c/numeric/math/tgamma"
header: "<math.h>"
category: "c"
---

1-3) Computes the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) of arg.

## Declarations
```cpp
float tgammaf( float arg );
```
_(since C99)_

```cpp
double tgamma( double arg );
```
_(since C99)_

```cpp
long double tgammal( long double arg );
```
_(since C99)_

```cpp
#define tgamma( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the value of the gamma function of arg, that is \(\Gamma(\mathtt{arg}) = \displaystyle\int_0^\infty\!\! t^{\mathtt{arg}-1} e^{-t}\, dt\)∫∞0targ-1 e-t dt, is returned.

## Notes
If arg is a natural number, tgamma(arg) is the factorial of arg - 1. Many implementations calculate the exact integer-domain factorial if the argument is a sufficiently small integer.

For IEEE-compatible type double, overflow happens if 0 < x < 1/[DBL_MAX](/c/types/limits/) or if x > 171.7.

[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tgamma.html) that a pole error occurs if the argument is zero, but a domain error occurs when the argument is a negative integer. It also specifies that in future, domain errors may be replaced by pole errors for negative integer arguments (in which case the return value in those cases would change from NaN to ±∞).

There is a non-standard function named gamma in various implementations, but its definition is inconsistent. For example, glibc and 4.2BSD version of gamma executes lgamma, but 4.4BSD version of gamma executes tgamma.

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
    printf("tgamma(10) = %f, 9!=%f\n", tgamma(10), 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9.0);
    printf("tgamma(0.5) = %f, sqrt(pi) = %f\n", tgamma(0.5), sqrt(acos(-1)));
 
    // special values
    printf("tgamma(+Inf) = %f\n", tgamma(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("tgamma(-1) = %f\n", tgamma(-1));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    else
        if (errno == EDOM)   perror("    errno == EDOM");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
    else if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [lgammalgammaflgammal](/c/numeric/math/lgamma/)
- [C++ documentation](/cpp/numeric/math/tgamma/)
