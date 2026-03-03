---
title: "isfinite"
source_path: "c/numeric/math/isfinite"
header: "<math.h>"
category: "c"
---

Determines if the given floating-point number arg has finite value i.e. it is normal, subnormal or zero, but not infinite or NaN. The macro returns an integral value.

## Declarations
```cpp
#define isfinite(arg) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
Nonzero integral value if arg has finite value, 0 otherwise.

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("isfinite(NAN)         = %d\n", isfinite(NAN));
    printf("isfinite(INFINITY)    = %d\n", isfinite(INFINITY));
    printf("isfinite(0.0)         = %d\n", isfinite(0.0));
    printf("isfinite(DBL_MIN/2.0) = %d\n", isfinite(DBL_MIN / 2.0));
    printf("isfinite(1.0)         = %d\n", isfinite(1.0));
    printf("isfinite(exp(800))    = %d\n", isfinite(exp(800)));
}
```

## See also
- [fpclassify](/c/numeric/math/fpclassify/)
- [isinf](/c/numeric/math/isinf/)
- [isnan](/c/numeric/math/isnan/)
- [isnormal](/c/numeric/math/isnormal/)
- [C++ documentation](/cpp/numeric/math/isfinite/)
