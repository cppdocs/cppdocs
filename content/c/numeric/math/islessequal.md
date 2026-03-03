---
title: "islessequal"
source_path: "c/numeric/math/islessequal"
header: "<math.h>"
category: "c"
---

Determines if the floating-point number x is less than or equal to the floating-point number y, without setting floating-point exceptions.

## Declarations
```cpp
#define islessequal(x, y) /* implementation defined */
```
_(since C99)_

## Parameters
- `x`: floating-point value
- `y`: floating-point value

## Return value
Nonzero integral value if x <= y, 0 otherwise.

## Notes
The built-in operator<= for floating-point numbers may raise [FE_INVALID](/c/numeric/fenv/FE_exceptions/) if one or both of the arguments is NaN. This function is a "quiet" version of operator<=.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("islessequal(2.0,1.0)      = %d\n", islessequal(2.0, 1.0));
    printf("islessequal(1.0,2.0)      = %d\n", islessequal(1.0, 2.0));
    printf("islessequal(1.0,1.0)      = %d\n", islessequal(1.0, 1.0));
    printf("islessequal(INFINITY,1.0) = %d\n", islessequal(INFINITY, 1.0));
    printf("islessequal(1.0,NAN)      = %d\n", islessequal(1.0, NAN));
 
    return 0;
}
```

## See also
- [isgreaterequal](/c/numeric/math/isgreaterequal/)
- [C++ documentation](/cpp/numeric/math/islessequal/)
