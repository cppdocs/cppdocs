---
title: "exp2, exp2f, exp2l"
source_path: "c/numeric/math/exp2"
header: "<math.h>"
category: "c"
---

1-3) Computes 2 raised to the given power n.

## Declarations
```cpp
float exp2f( float n );
```
_(since C99)_

```cpp
double exp2( double n );
```
_(since C99)_

```cpp
long double exp2l( long double n );
```
_(since C99)_

```cpp
#define exp2( n )
```
_(since C99)_

## Parameters
- `n`: floating-point value

## Return value
If no errors occur, the base-2 exponential of n (2n) is returned.

## Example
```cpp
#include <errno.h>
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    printf("exp2(5) = %f\n", exp2(5));
    printf("exp2(0.5) = %f\n", exp2(0.5));
    printf("exp2(-4) = %f\n", exp2(-4));
    // special values
    printf("exp2(-0.9) = %f\n", exp2(-0.9));
    printf("exp2(-Inf) = %f\n", exp2(-INFINITY));
    //error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("exp2(1024) = %f\n", exp2(1024));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_OVERFLOW))
        puts("    FE_OVERFLOW raised");
}
```

## See also
- [expexpfexpl](/c/numeric/math/exp/)
- [expm1expm1fexpm1l](/c/numeric/math/expm1/)
- [log2log2flog2l](/c/numeric/math/log2/)
- [C++ documentation](/cpp/numeric/math/exp2/)
