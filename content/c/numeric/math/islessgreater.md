---
title: "islessgreater"
source_path: "c/numeric/math/islessgreater"
header: "<math.h>"
category: "c"
---

Determines if the floating-point number x is less than or greater than the floating-point number y, without setting floating-point exceptions.

## Declarations
```cpp
#define islessgreater(x, y) /* implementation defined */
```
_(since C99)_

## Parameters
- `x`: floating-point value
- `y`: floating-point value

## Return value
Nonzero integral value if x < y || x > y, 0 otherwise.

## Notes
The built-in operator< and operator> for floating-point numbers may raise [FE_INVALID](/c/numeric/fenv/FE_exceptions/) if one or both of the arguments is NaN. This function is a "quiet" version of the expression x < y || x > y. The macro does not evaluate x and y twice.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("islessgreater(2.0,1.0)      = %d\n", islessgreater(2.0, 1.0));
    printf("islessgreater(1.0,2.0)      = %d\n", islessgreater(1.0, 2.0));
    printf("islessgreater(1.0,1.0)      = %d\n", islessgreater(1.0, 1.0));
    printf("islessgreater(INFINITY,1.0) = %d\n", islessgreater(INFINITY, 1.0));
    printf("islessgreater(1.0,NAN)      = %d\n", islessgreater(1.0, NAN));
 
    return 0;
}
```

## See also
- [isless](/c/numeric/math/isless/)
- [isgreater](/c/numeric/math/isgreater/)
- [C++ documentation](/cpp/numeric/math/islessgreater/)
