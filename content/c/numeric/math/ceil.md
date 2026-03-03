---
title: "ceil, ceilf, ceill"
source_path: "c/numeric/math/ceil"
header: "<math.h>"
category: "c"
---

1-3) Computes the smallest integer value not less than arg.

## Declarations
```cpp
float ceilf( float arg );
```
_(since C99)_

```cpp
double ceil( double arg );
```

```cpp
long double ceill( long double arg );
```
_(since C99)_

```cpp
#define ceil( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the smallest integer value not less than arg, that is ⌈arg⌉, is returned.

## Notes
[FE_INEXACT](/c/numeric/fenv/FE_exceptions/) may be (but isn't required to be) raised when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

This function (for double argument) behaves as if (except for the freedom to not raise [FE_INEXACT](/c/numeric/fenv/FE_exceptions/)) implemented by

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("ceil(+2.4) = %+.1f\n", ceil(2.4));
    printf("ceil(-2.4) = %+.1f\n", ceil(-2.4));
    printf("ceil(-0.0) = %+.1f\n", ceil(-0.0));
    printf("ceil(-Inf) = %+f\n",   ceil(-INFINITY));
}
```

## See also
- [floorfloorffloorl](/c/numeric/math/floor/)
- [trunctruncftruncl](/c/numeric/math/trunc/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/c/numeric/math/round/)
- [nearbyintnearbyintfnearbyintl](/c/numeric/math/nearbyint/)
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/c/numeric/math/rint/)
- [C++ documentation](/cpp/numeric/math/ceil/)
