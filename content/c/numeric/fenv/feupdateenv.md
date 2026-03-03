---
title: "feupdateenv"
source_path: "c/numeric/fenv/feupdateenv"
header: "<fenv.h>"
category: "c"
---

First, remembers the currently raised floating-point exceptions, then restores the floating-point environment from the object pointed to by envp (similar to [fesetenv](/c/numeric/fenv/feenv/)), then raises the floating-point exceptions that were saved.

## Declarations
```cpp
int feupdateenv( const fenv_t* envp );
```
_(since C99)_

## Parameters
- `envp`: pointer to the object of type fenv_t set by an earlier call to feholdexcept or fegetenv or equal to FE_DFL_ENV

## Return value
0 on success, non-zero otherwise.

## Example
```cpp
#include <stdio.h>
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
 
double x2 (double x)   /* times two */
{
    fenv_t curr_excepts;
 
    /* Save and clear current f-p environment. */
    feholdexcept(&curr_excepts);
 
    /* Raise inexact and overflow exceptions. */
    printf("In x2():  x = %f\n", x=x*2.0);
    show_fe_exceptions();
    feclearexcept(FE_INEXACT);   /* hide inexact exception from caller */
 
    /* Merge caller's exceptions (FE_INVALID)        */
    /* with remaining x2's exceptions (FE_OVERFLOW). */
    feupdateenv(&curr_excepts);
    return x;
}
 
int main(void)
{    
    feclearexcept(FE_ALL_EXCEPT);
    feraiseexcept(FE_INVALID);   /* some computation with invalid argument */
    show_fe_exceptions();
    printf("x2(DBL_MAX) = %f\n", x2(DBL_MAX));
    show_fe_exceptions();
 
    return 0;
}
```

## See also
- [feholdexcept](/c/numeric/fenv/feholdexcept/)
- [fegetenvfesetenv](/c/numeric/fenv/feenv/)
- [FE_DFL_ENV](/c/numeric/fenv/FE_DFL_ENV/)
- [C++ documentation](/cpp/numeric/fenv/feupdateenv/)
