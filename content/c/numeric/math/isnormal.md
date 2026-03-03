---
title: "isnormal"
source_path: "c/numeric/math/isnormal"
header: "<math.h>"
category: "c"
---

Determines if the given floating-point number arg is normal, i.e. is neither zero, subnormal, infinite, nor NaN. The macro returns an integral value.

## Declarations
```cpp
#define isnormal(arg) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
Nonzero integral value if arg is normal, 0 otherwise.

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("isnormal(NAN)         = %d\n", isnormal(NAN));
    printf("isnormal(INFINITY)    = %d\n", isnormal(INFINITY));
    printf("isnormal(0.0)         = %d\n", isnormal(0.0));
    printf("isnormal(DBL_MIN/2.0) = %d\n", isnormal(DBL_MIN / 2.0));
    printf("isnormal(1.0)         = %d\n", isnormal(1.0));
}
```

## See also
- [fpclassify](/c/numeric/math/fpclassify/)
- [isfinite](/c/numeric/math/isfinite/)
- [isinf](/c/numeric/math/isinf/)
- [isnan](/c/numeric/math/isnan/)
- [C++ documentation](/cpp/numeric/math/isnormal/)
