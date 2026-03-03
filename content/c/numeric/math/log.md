---
title: "log, logf, logl"
source_path: "c/numeric/math/log"
header: "<math.h>"
category: "c"
---

1-3) Computes the natural (base e) logarithm of arg.

## Declarations
```cpp
float logf( float arg );
```
_(since C99)_

```cpp
double log( double arg );
```

```cpp
long double logl( long double arg );
```
_(since C99)_

```cpp
#define log( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the natural (base-e) logarithm of arg (ln(arg) or loge(arg)) is returned.

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
    printf("log(1) = %f\n", log(1));
    printf("base-5 logarithm of 125 = %f\n", log(125) / log(5));
 
    // special values
    printf("log(1) = %f\n", log(1));
    printf("log(+Inf) = %f\n", log(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("log(0) = %f\n", log(0));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [log10log10flog10l](/c/numeric/math/log10/)
- [log2log2flog2l](/c/numeric/math/log2/)
- [log1plog1pflog1pl](/c/numeric/math/log1p/)
- [expexpfexpl](/c/numeric/math/exp/)
- [clogclogfclogl](/c/numeric/complex/clog/)
- [C++ documentation](/cpp/numeric/math/log/)
