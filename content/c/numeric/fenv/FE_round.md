---
title: "FE_DOWNWARD, FE_TONEAREST, FE_TOWARDZERO, FE_UPWARD"
source_path: "c/numeric/fenv/FE_round"
header: "<fenv.h>"
category: "c"
aliases: ["/c/numeric/fenv/FE_round/"]
---

Each of these macro constants expands to a nonnegative integer constant expression, which can be used with [fesetround](/c/numeric/fenv/feround/) and [fegetround](/c/numeric/fenv/feround/) to indicate one of the supported floating-point rounding modes. The implementation may define additional rounding mode constants in [<fenv.h>](/c/numeric/fenv/), which should all begin with FE_ followed by at least one uppercase letter. Each macro is only defined if it is supported.

## Declarations
```cpp
#define FE_DOWNWARD /*implementation defined*/
```
_(since C99)_

```cpp
#define FE_TONEAREST /*implementation defined*/
```
_(since C99)_

```cpp
#define FE_TOWARDZERO /*implementation defined*/
```
_(since C99)_

```cpp
#define FE_UPWARD /*implementation defined*/
```
_(since C99)_

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
 
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    fesetround(FE_DOWNWARD);
    puts("rounding down: ");
    printf("           pi = %.22f\n", acosf(-1));
    printf("strtof(\"1.1\") = %.22f\n", strtof("1.1", NULL));
    printf("    rint(2.1) = %.22f\n\n", rintf(2.1));
    fesetround(FE_UPWARD);
    puts("rounding up: ");
    printf("           pi = %.22f\n", acosf(-1));
    printf("strtof(\"1.1\") = %.22f\n", strtof("1.1", NULL));
    printf("    rint(2.1) = %.22f\n", rintf(2.1));
}
```

## See also
- [fegetroundfesetround](/c/numeric/fenv/feround/)
- [C++ documentation](/cpp/numeric/fenv/fe_round/)
