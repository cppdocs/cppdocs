---
title: "floor, floorf, floorl"
source_path: "c/numeric/math/floor"
header: "<math.h>"
category: "c"
---

1-3) Computes the largest integer value not greater than arg.

## Declarations
```cpp
float floorf( float arg );
```
_(since C99)_

```cpp
double floor( double arg );
```

```cpp
long double floorl( long double arg );
```
_(since C99)_

```cpp
#define floor( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the largest integer value not greater than arg, that is ⌊arg⌋, is returned.

## Notes
[FE_INEXACT](/c/numeric/fenv/FE_exceptions/) may be (but isn't required to be) raised when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("floor(+2.7) = %+.1f\n", floor(2.7));
    printf("floor(-2.7) = %+.1f\n", floor(-2.7));
    printf("floor(-0.0) = %+.1f\n", floor(-0.0));
    printf("floor(-Inf) = %+f\n",   floor(-INFINITY));
}
```

## See also
- [ceilceilfceill](/c/numeric/math/ceil/)
- [trunctruncftruncl](/c/numeric/math/trunc/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/c/numeric/math/round/)
- [C++ documentation](/cpp/numeric/math/floor/)
