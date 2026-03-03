---
title: "signbit"
source_path: "c/numeric/math/signbit"
header: "<math.h>"
category: "c"
---

Determines if the given floating-point number arg is negative. The macro returns an integral value.

## Declarations
```cpp
#define signbit( arg ) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
Nonzero integral value if arg is negative, 0 otherwise.

## Notes
This macro detects the sign bit of zeroes, infinities, and NaNs. Along with [copysign](/c/numeric/math/copysign/), this macro is one of the only two portable ways to examine the sign of a NaN.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("signbit(+0.0) = %d\n", signbit(+0.0));
    printf("signbit(-0.0) = %d\n", signbit(-0.0));
}
```

## See also
- [fabsfabsffabsl](/c/numeric/math/fabs/)
- [copysigncopysignfcopysignl](/c/numeric/math/copysign/)
- [C++ documentation](/cpp/numeric/math/signbit/)
