---
title: "feraiseexcept"
source_path: "c/numeric/fenv/feraiseexcept"
header: "<fenv.h>"
category: "c"
---

Attempts to raise all floating-point exceptions listed in excepts (a bitwise OR of the [floating-point exception macros](/c/numeric/fenv/FE_exceptions/)). If one of the exceptions is [FE_OVERFLOW](/c/numeric/fenv/FE_exceptions/) or [FE_UNDERFLOW](/c/numeric/fenv/FE_exceptions/), this function may additionally raise [FE_INEXACT](/c/numeric/fenv/FE_exceptions/). The order in which the exceptions are raised is unspecified, except that [FE_OVERFLOW](/c/numeric/fenv/FE_exceptions/) and [FE_UNDERFLOW](/c/numeric/fenv/FE_exceptions/) are always raised before [FE_INEXACT](/c/numeric/fenv/FE_exceptions/).

## Declarations
```cpp
int feraiseexcept( int excepts );
```
_(since C99)_

## Parameters
- `excepts`: bitmask listing the exception flags to raise

## Return value
0 if all listed exceptions were raised, non-zero value otherwise.

## Example
```cpp
#include <stdio.h>
#include <fenv.h>
 
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
    feclearexcept(FE_ALL_EXCEPT);
    printf("\n");
}
 
double some_computation(void)
{
    /* Computation reaches a state that causes overflow. */
    int r = feraiseexcept(FE_OVERFLOW | FE_INEXACT);
    printf("feraiseexcept() %s\n", (r?"fails":"succeeds"));
    return 0.0;
}
 
int main(void)
{
    some_computation();
    show_fe_exceptions();
 
    return 0;
}
```

## See also
- [feclearexcept](/c/numeric/fenv/feclearexcept/)
- [fetestexcept](/c/numeric/fenv/fetestexcept/)
- [C++ documentation](/cpp/numeric/fenv/feraiseexcept/)
