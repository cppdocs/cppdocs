---
title: "isinf"
source_path: "c/numeric/math/isinf"
header: "<math.h>"
category: "c"
---

Determines if the given floating-point number arg is positive or negative infinity. The macro returns an integral value.

## Declarations
```cpp
#define isinf(arg) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
Nonzero integral value if arg has an infinite value, 0 otherwise.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <float.h>
 
int main(void)
{
    printf("isinf(NAN)         = %d\n", isinf(NAN));
    printf("isinf(INFINITY)    = %d\n", isinf(INFINITY));
    printf("isinf(0.0)         = %d\n", isinf(0.0));
    printf("isinf(DBL_MIN/2.0) = %d\n", isinf(DBL_MIN/2.0));
    printf("isinf(1.0)         = %d\n", isinf(1.0));
    printf("isinf(exp(800))    = %d\n", isinf(exp(800)));
}
```

## See also
- [fpclassify](/c/numeric/math/fpclassify/)
- [isfinite](/c/numeric/math/isfinite/)
- [isnan](/c/numeric/math/isnan/)
- [isnormal](/c/numeric/math/isnormal/)
- [C++ documentation](/cpp/numeric/math/isinf/)
