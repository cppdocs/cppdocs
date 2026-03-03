---
title: "MATH_ERRNO, MATH_ERREXCEPT, math_errhandling"
source_path: "c/numeric/math/math_errhandling"
header: "<math.h>"
category: "c"
---

The macro constant math_errhandling expands to an expression of type int that is either equal to MATH_ERRNO, or equal to MATH_ERREXCEPT, or equal to their bitwise OR (MATH_ERRNO | MATH_ERREXCEPT).

## Declarations
```cpp
#define MATH_ERRNO 1
```
_(since C99)_

```cpp
#define MATH_ERREXCEPT 2
```
_(since C99)_

```cpp
#define math_errhandling /*implementation defined*/
```
_(since C99)_

## Notes
Whether [FE_INEXACT](/c/numeric/fenv/FE_exceptions/) is raised by the mathematical library functions is unspecified in general, but may be explicitly specified in the description of the function (e.g. [rint](/c/numeric/math/rint/) vs [nearbyint](/c/numeric/math/nearbyint/)).

Before C99, floating-point exceptions were not specified, [EDOM](/c/error/errno_macros/) was required for any domain error, [ERANGE](/c/error/errno_macros/) was required for overflows and implementation-defined for underflows.

## Example
```cpp
#include <stdio.h>
#include <fenv.h>
#include <math.h>
#include <errno.h>
#pragma STDC FENV_ACCESS ON
int main(void)
{
    printf("MATH_ERRNO is %s\n", math_errhandling & MATH_ERRNO ? "set" : "not set");
    printf("MATH_ERREXCEPT is %s\n",
           math_errhandling & MATH_ERREXCEPT ? "set" : "not set");
    feclearexcept(FE_ALL_EXCEPT);
    errno = 0;
    printf("log(0) = %f\n", log(0));
    if(errno == ERANGE)
        perror("errno == ERANGE");
    if(fetestexcept(FE_DIVBYZERO))
        puts("FE_DIVBYZERO (pole error) reported");
}
```

## See also
- [FE_ALL_EXCEPTFE_DIVBYZEROFE_INEXACTFE_INVALIDFE_OVERFLOWFE_UNDERFLOW](/c/numeric/fenv/FE_exceptions/)
- [errno](/c/error/errno/)
- [C++ documentation](/cpp/numeric/math/math_errhandling/)
