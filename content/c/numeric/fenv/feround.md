---
title: "fegetround, fesetround"
source_path: "c/numeric/fenv/feround"
header: "<fenv.h>"
category: "c"
---

1) Attempts to establish the floating-point rounding direction equal to the argument [round](/c/numeric/math/round/), which is expected to be one of the [floating-point rounding macros](/c/numeric/fenv/FE_round/).

## Declarations
```cpp
int fesetround( int round );
```
_(since C99)_

```cpp
int fegetround();
```
_(since C99)_

## Parameters
- `round`: rounding direction, one of floating-point rounding macros

## Return value
1) 0 on success, non-zero otherwise.

## Notes
The current rounding mode, reflecting the effects of the most recent fesetround, can also be queried with [FLT_ROUNDS](/c/types/limits/FLT_ROUNDS/).

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
// #pragma STDC FENV_ACCESS ON
 
void show_fe_current_rounding_direction(void)
{
    printf("current rounding direction:  ");
    switch (fegetround())
    {
           case FE_TONEAREST:  printf ("FE_TONEAREST");  break;
           case FE_DOWNWARD:   printf ("FE_DOWNWARD");   break;
           case FE_UPWARD:     printf ("FE_UPWARD");     break;
           case FE_TOWARDZERO: printf ("FE_TOWARDZERO"); break;
           default:            printf ("unknown");
    };
    printf("\n");
}
 
int main(void)
{
    /* Default rounding direction */
    show_fe_current_rounding_direction();
    printf("+11.5 -> %+4.1f\n", rint(+11.5)); /* midway between two integers */
    printf("+12.5 -> %+4.1f\n", rint(+12.5)); /* midway between two integers */
 
    /* Save current rounding direction. */
    int curr_direction = fegetround();
 
    /* Temporarily change current rounding direction. */
    fesetround(FE_DOWNWARD);
    show_fe_current_rounding_direction();
    printf("+11.5 -> %+4.1f\n", rint(+11.5));
    printf("+12.5 -> %+4.1f\n", rint(+12.5));
 
    /* Restore default rounding direction. */
    fesetround(curr_direction);
    show_fe_current_rounding_direction();
 
    return 0;
}
```

## See also
- [nearbyintnearbyintfnearbyintl](/c/numeric/math/nearbyint/)
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/c/numeric/math/rint/)
- [C++ documentation](/cpp/numeric/fenv/feround/)
