---
title: "trunc, truncf, truncl"
source_path: "c/numeric/math/trunc"
header: "<math.h>"
category: "c"
---

1-3) Computes the nearest integer not greater in magnitude than arg.

## Declarations
```cpp
float truncf( float arg );
```
_(since C99)_

```cpp
double trunc( double arg );
```
_(since C99)_

```cpp
long double truncl( long double arg );
```
_(since C99)_

```cpp
#define trunc( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the nearest integer value not greater in magnitude than arg (in other words, arg rounded towards zero), is returned.

## Notes
[FE_INEXACT](/c/numeric/fenv/FE_exceptions/) may be (but isn't required to be) raised when truncating a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [intmax_t](/c/types/integer/)), when stored in an integer variable.

The implicit conversion from floating-point to integral types also rounds towards zero, but is limited to the values that can be represented by the target type.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("trunc(+2.7) = %+.1f\n", trunc(+2.7));
    printf("trunc(-2.7) = %+.1f\n", trunc(-2.7));
    printf("trunc(-0.0) = %+.1f\n", trunc(-0.0));
    printf("trunc(-Inf) = %+f\n",   trunc(-INFINITY));
}
```

## See also
- [floorfloorffloorl](/c/numeric/math/floor/)
- [ceilceilfceill](/c/numeric/math/ceil/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/c/numeric/math/round/)
- [C++ documentation](/cpp/numeric/math/trunc/)
