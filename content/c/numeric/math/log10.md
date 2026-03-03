---
title: "log10, log10f, log10l"
source_path: "c/numeric/math/log10"
header: "<math.h>"
category: "c"
---

1-3) Computes the common (base-10) logarithm of arg.

## Declarations
```cpp
float log10f( float arg );
```
_(since C99)_

```cpp
double log10( double arg );
```

```cpp
long double log10l( long double arg );
```
_(since C99)_

```cpp
#define log10( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
If no errors occur, the common (base-10) logarithm of arg (log10(arg) or lg(arg)) is returned.

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
    printf("log10(1000) = %f\n", log10(1000));
    printf("log10(0.001) = %f\n", log10(0.001));
    printf("base-5 logarithm of 125 = %f\n", log10(125) / log10(5));
 
    // special values
    printf("log10(1) = %f\n", log10(1));
    printf("log10(+Inf) = %f\n", log10(INFINITY));
 
    // error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("log10(0) = %f\n", log10(0));
    if (errno == ERANGE)
        perror("    errno == ERANGE");
    if (fetestexcept(FE_DIVBYZERO))
        puts("    FE_DIVBYZERO raised");
}
```

## See also
- [loglogflogl](/c/numeric/math/log/)
- [log2log2flog2l](/c/numeric/math/log2/)
- [log1plog1pflog1pl](/c/numeric/math/log1p/)
- [C++ documentation](/cpp/numeric/math/log10/)
