---
title: "isnan"
source_path: "c/numeric/math/isnan"
header: "<math.h>"
category: "c"
---

Determines if the given floating-point number arg is a not-a-number (NaN) value. The macro returns an integral value.

## Declarations
```cpp
#define isnan(arg) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
Nonzero integral value if arg is a NaN, 0 otherwise.

## Notes
There are many different NaN values with different sign bits and payloads, see [nan](/c/numeric/math/nan/).

NaN values never compare equal to themselves or to other NaN values. Copying a NaN may change its bit pattern.

Another way to test if a floating-point value is NaN is to compare it with itself: bool is_nan(double x) { return x != x; }

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("isnan(NAN)         = %d\n", isnan(NAN));
    printf("isnan(INFINITY)    = %d\n", isnan(INFINITY));
    printf("isnan(0.0)         = %d\n", isnan(0.0));
    printf("isnan(DBL_MIN/2.0) = %d\n", isnan(DBL_MIN / 2.0));
    printf("isnan(0.0 / 0.0)   = %d\n", isnan(0.0 / 0.0));
    printf("isnan(Inf - Inf)   = %d\n", isnan(INFINITY - INFINITY));
}
```

## See also
- [nannanfnanl](/c/numeric/math/nan/)
- [fpclassify](/c/numeric/math/fpclassify/)
- [isfinite](/c/numeric/math/isfinite/)
- [isinf](/c/numeric/math/isinf/)
- [isnormal](/c/numeric/math/isnormal/)
- [isunordered](/c/numeric/math/isunordered/)
- [C++ documentation](/cpp/numeric/math/isnan/)
