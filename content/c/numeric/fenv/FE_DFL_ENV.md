---
title: "FE_DFL_ENV"
source_path: "c/numeric/fenv/FE_DFL_ENV"
header: "<fenv.h>"
category: "c"
aliases: ["/c/numeric/fenv/FE_DFL_ENV/"]
---

The macro constant FE_DFL_ENV expands to an expression of type const fenv_t*, which points to a full copy of the default floating-point environment, that is, the environment as loaded at program startup.

## Declarations
```cpp
#define FE_DFL_ENV /*implementation defined*/
```
_(since C99)_

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
    printf("\n");
}
 
void show_fe_rounding_method(void)
{
    printf("current rounding method:    ");
    switch (fegetround()) {
           case FE_TONEAREST:  printf ("FE_TONEAREST");  break;
           case FE_DOWNWARD:   printf ("FE_DOWNWARD");   break;
           case FE_UPWARD:     printf ("FE_UPWARD");     break;
           case FE_TOWARDZERO: printf ("FE_TOWARDZERO"); break;
           default:            printf ("unknown");
    };
    printf("\n");
}
 
void show_fe_environment(void)
{
    show_fe_exceptions();
    show_fe_rounding_method();
} 
 
int main()
{
    printf("On startup:\n");
    show_fe_environment();
 
    // Change environment
    fesetround(FE_DOWNWARD);     // change rounding mode
    feraiseexcept(FE_INVALID);   // raise exception
    printf("\nBefore restoration:\n");
    show_fe_environment();
 
    fesetenv(FE_DFL_ENV);    // restore
    printf("\nAfter restoring default environment:\n");
    show_fe_environment();
}
```

## See also
- [fegetenvfesetenv](/c/numeric/fenv/feenv/)
- [feupdateenv](/c/numeric/fenv/feupdateenv/)
- [C++ documentation](/cpp/numeric/fenv/fe_dfl_env/)
