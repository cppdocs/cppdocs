---
title: "roundeven, roundevenf, roundevenl"
source_path: "c/numeric/math/roundeven"
header: "<math.h>"
category: "c"
---

1-3) Computes the nearest integer value to arg (in floating-point format), rounding halfway cases to nearest even integer, regardless of the current rounding mode.

## Declarations
```cpp
float roundevenf( float arg );
```
_(since C23)_

```cpp
double roundeven( double arg );
```
_(since C23)_

```cpp
long double roundevenl( long double arg );
```
_(since C23)_

```cpp
#define roundeven( arg )
```
_(since C23)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the nearest integer value to arg, rounding halfway cases to nearest even integer, is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("roundeven(+2.4) = %+.1f\n", roundeven(2.4));
    printf("roundeven(-2.4) = %+.1f\n", roundeven(-2.4));
    printf("roundeven(+2.5) = %+.1f\n", roundeven(2.5));
    printf("roundeven(-2.5) = %+.1f\n", roundeven(-2.5));
    printf("roundeven(+2.6) = %+.1f\n", roundeven(2.6));
    printf("roundeven(-2.6) = %+.1f\n", roundeven(-2.6));
    printf("roundeven(+3.5) = %+.1f\n", roundeven(3.5));
    printf("roundeven(-3.5) = %+.1f\n", roundeven(-3.5));
    printf("roundeven(-0.0) = %+.1f\n", roundeven(-0.0));
    printf("roundeven(-Inf) = %+f\n",   roundeven(-INFINITY));
}
```

## See also
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/c/numeric/math/rint/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/c/numeric/math/round/)
