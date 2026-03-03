---
title: "lgamma, lgammaf, lgammal"
source_path: "c/numeric/math/lgamma"
header: "<math.h>"
category: "c"
---

1-3) Computes the natural logarithm of the absolute value of the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) of arg.

## Declarations
```cpp
float lgammaf( float arg );
```
_(since C99)_

```cpp
double lgamma( double arg );
```
_(since C99)_

```cpp
long double lgammal( long double arg );
```
_(since C99)_

```cpp
#define lgamma( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the value of the logarithm of the gamma function of arg, that is \(\log_{e}|{\int_0^\infty t^{arg-1} e^{-t} \mathsf{d}t}|\)loge|∫∞0targ-1 e-t dt|, is returned.

## Notes
If arg is a natural number, lgamma(arg) is the logarithm of the factorial of arg - 1.

The [POSIX version of lgamma](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lgamma.html) is not thread-safe: each execution of the function stores the sign of the gamma function of arg in the static external variable signgam. Some implementations provide lgamma_r, which takes a pointer to user-provided storage for singgam as the second parameter, and is thread-safe.

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
    printf("lgamma(10) = %f, log(9!) = %f\n", lgamma(10),
                                              log(2 * 3 * 4 * 5 * 6 * 7 * 8 * 9));
    const double pi = acos(-1);
    printf("lgamma(0.5) = %f, log(sqrt(pi)) = %f\n", log(sqrt(pi)), lgamma(0.5));
    // special values
    printf("lgamma(1) = %f\n", lgamma(1));
    printf("lgamma(+Inf) = %f\n", lgamma(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("lgamma(0) = %f\n", lgamma(0));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [tgammatgammaftgammal](/c/numeric/math/tgamma/)
- [C++ documentation](/cpp/numeric/math/lgamma/)
