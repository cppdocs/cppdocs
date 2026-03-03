---
title: "FE_DIVBYZERO, FE_INEXACT, FE_INVALID, FE_OVERFLOW, FE_UNDERFLOW, FE_ALL_EXCEPT"
source_path: "c/numeric/fenv/FE_exceptions"
header: "<fenv.h>"
category: "c"
aliases: ["/c/numeric/fenv/FE_exceptions/"]
---

All these macro constants (except FE_ALL_EXCEPT) expand to integer constant expressions that are distinct powers of 2, which uniquely identify all supported floating-point exceptions. Each macro is only defined if it is supported.

## Declarations
```cpp
#define FE_DIVBYZERO /*implementation defined power of 2*/
```
_(since C99)_

```cpp
#define FE_INEXACT /*implementation defined power of 2*/
```
_(since C99)_

```cpp
#define FE_INVALID /*implementation defined power of 2*/
```
_(since C99)_

```cpp
#define FE_OVERFLOW /*implementation defined power of 2*/
```
_(since C99)_

```cpp
#define FE_UNDERFLOW /*implementation defined power of 2*/
```
_(since C99)_

```cpp
#define FE_ALL_EXCEPT FE_DIVBYZERO | FE_INEXACT | \
FE_INVALID | FE_OVERFLOW | \
FE_UNDERFLOW
```
_(since C99)_

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <float.h>
#include <fenv.h>
 
#pragma STDC FENV_ACCESS ON
void show_fe_exceptions(void)
{
    printf("exceptions raised:");
    if(fetestexcept(FE_DIVBYZERO)) printf(" FE_DIVBYZERO");
    if(fetestexcept(FE_INEXACT))   printf(" FE_INEXACT");
    if(fetestexcept(FE_INVALID))   printf(" FE_INVALID");
    if(fetestexcept(FE_OVERFLOW))  printf(" FE_OVERFLOW");
    if(fetestexcept(FE_UNDERFLOW)) printf(" FE_UNDERFLOW");
    feclearexcept(FE_ALL_EXCEPT);
    printf("\n");
}
 
int main(void)
{
    printf("MATH_ERREXCEPT is %s\n",
           math_errhandling & MATH_ERREXCEPT ? "set" : "not set");
 
    printf("0.0/0.0 = %f\n", 0.0/0.0);
    show_fe_exceptions();
 
    printf("1.0/0.0 = %f\n", 1.0/0.0);
    show_fe_exceptions();
 
    printf("1.0/10.0 = %f\n", 1.0/10.0);
    show_fe_exceptions();
 
    printf("sqrt(-1) = %f\n", sqrt(-1));
    show_fe_exceptions();
 
    printf("DBL_MAX*2.0 = %f\n", DBL_MAX*2.0);
    show_fe_exceptions();
 
    printf("nextafter(DBL_MIN/pow(2.0,52),0.0) = %.1f\n",
                      nextafter(DBL_MIN/pow(2.0,52),0.0));
    show_fe_exceptions();
}
```

## See also
- [math_errhandling, MATH_ERRNO, MATH_ERREXCEPT](/c/numeric/math/math_errhandling/)
- [C++ documentation](/cpp/numeric/fenv/fe_exceptions/)
