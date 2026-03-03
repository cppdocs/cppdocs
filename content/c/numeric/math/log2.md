---
title: "log2, log2f, log2l"
source_path: "c/numeric/math/log2"
header: "<math.h>"
category: "c"
---

1-3) Computes the base 2 logarithm of arg.

## Declarations
```cpp
float log2f( float arg );
```
_(since C99)_

```cpp
double log2( double arg );
```
_(since C99)_

```cpp
long double log2l( long double arg );
```
_(since C99)_

```cpp
#define log2( arg )
```
_(since C99)_

## Parameters
- `arg`: floating point value

## Return value
If no errors occur, the base-2 logarithm of arg (log2(arg) or lb(arg)) is returned.

## Notes
For integer arg, the binary logarithm can be interpreted as the zero-based index of the most significant 1 bit in the input.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <float.h>
#include <errno.h>
#include <fenv.h>
// #pragma STDC FENV_ACCESS ON
int main(void)
{
    printf("log2(65536) = %f\n", log2(65536));
    printf("log2(0.125) = %f\n", log2(0.125));
    printf("log2(0x020f) = %f (highest set bit is in position 9)\n", log2(0x020f));
    printf("base-5 logarithm of 125 = %f\n", log2(125)/log2(5));
    // special values
    printf("log2(1) = %f\n", log2(1));
    printf("log2(+Inf) = %f\n", log2(INFINITY));
    //error handling
    errno = 0; feclearexcept(FE_ALL_EXCEPT);
    printf("log2(0) = %f\n", log2(0));
    if(errno == ERANGE) perror("    errno == ERANGE");
    if(fetestexcept(FE_DIVBYZERO)) puts("    FE_DIVBYZERO raised");
}
```

## See also
- [loglogflogl](/c/numeric/math/log/)
- [log10log10flog10l](/c/numeric/math/log10/)
- [log1plog1pflog1pl](/c/numeric/math/log1p/)
- [exp2exp2fexp2l](/c/numeric/math/exp2/)
- [C++ documentation](/cpp/numeric/math/log2/)
