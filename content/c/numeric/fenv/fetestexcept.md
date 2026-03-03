---
title: "fetestexcept"
source_path: "c/numeric/fenv/fetestexcept"
header: "<fenv.h>"
category: "c"
---

Determines which of the specified subset of the floating-point exceptions are currently set. The argument excepts is a bitwise OR of the [floating-point exception macros](/c/numeric/fenv/FE_exceptions/).

## Declarations
```cpp
int fetestexcept( int excepts );
```
_(since C99)_

## Parameters
- `excepts`: bitmask listing the exception flags to test

## Return value
Bitwise OR of the floating-point exception macros that are both included in excepts and correspond to floating-point exceptions currently set.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <fenv.h>
#include <float.h>
 
#pragma STDC FENV_ACCESS ON
 
void show_fe_exceptions(void)
{
    printf("current exceptions raised: ");
    if(fetestexcept(FE_DIVBYZERO))     printf(" FE_DIVBYZERO");
    if(fetestexcept(FE_INEXACT))       printf(" FE_INEXACT");
    if(fetestexcept(FE_INVALID))       printf(" FE_INVALID");
    if(fetestexcept(FE_OVERFLOW))      printf(" FE_OVERFLOW");
    if(fetestexcept(FE_UNDERFLOW))     printf(" FE_UNDERFLOW");
    if(fetestexcept(FE_ALL_EXCEPT)==0) printf(" none");
    printf("\n");
}
 
int main(void)
{
    /* Show default set of exception flags. */
    show_fe_exceptions();
 
    /* Perform some computations which raise exceptions. */
    printf("1.0/0.0     = %f\n", 1.0/0.0);        /* FE_DIVBYZERO            */
    printf("1.0/10.0    = %f\n", 1.0/10.0);       /* FE_INEXACT              */
    printf("sqrt(-1)    = %f\n", sqrt(-1));       /* FE_INVALID              */
    printf("DBL_MAX*2.0 = %f\n", DBL_MAX*2.0);    /* FE_INEXACT FE_OVERFLOW  */
    printf("nextafter(DBL_MIN/pow(2.0,52),0.0) = %.1f\n",
           nextafter(DBL_MIN/pow(2.0,52),0.0));   /* FE_INEXACT FE_UNDERFLOW */
    show_fe_exceptions();
 
    return 0;
}
```

## See also
- [feclearexcept](/c/numeric/fenv/feclearexcept/)
- [C++ documentation](/cpp/numeric/fenv/fetestexcept/)
