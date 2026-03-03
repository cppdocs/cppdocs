---
title: "nan, nanf, nanl, nand32, nand64, nand128"
source_path: "c/numeric/math/nan"
header: "<math.h>"
category: "c"
---

Converts the implementation-defined character string arg into the corresponding quiet NaN value, as if by calling the appropriate parsing function strtoX, as follows:

## Declarations
```cpp
float nanf( const char* arg );
```
_(since C99)_

```cpp
double nan( const char* arg );
```
_(since C99)_

```cpp
long double nanl( const char* arg );
```
_(since C99)_

```cpp
_Decimal32 nand32( const char* arg );
```
_(since C23)_

```cpp
_Decimal64 nand64( const char* arg );
```
_(since C23)_

```cpp
_Decimal128 nand128( const char* arg );
```
_(since C23)_

## Parameters
- `arg`: narrow character string identifying the contents of a NaN

## Return value
The quiet NaN value that corresponds to the identifying string arg or zero if the implementation does not support quiet NaNs.

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <stdint.h>
#include <inttypes.h>
#include <string.h>
 
int main(void)
{
    double f1 = nan("1");
    uint64_t f1n; memcpy(&f1n, &f1, sizeof f1);
    printf("nan(\"1\")   = %f (%" PRIx64 ")\n", f1, f1n);
 
    double f2 = nan("2");
    uint64_t f2n; memcpy(&f2n, &f2, sizeof f2);
    printf("nan(\"2\")   = %f (%" PRIx64 ")\n", f2, f2n);
 
    double f3 = nan("0xF");
    uint64_t f3n; memcpy(&f3n, &f3, sizeof f3);
    printf("nan(\"0xF\") = %f (%" PRIx64 ")\n", f3, f3n);
}
```

## See also
- [isnan](/c/numeric/math/isnan/)
- [NAN](/c/numeric/math/NAN/)
- [C++ documentation](/cpp/numeric/math/nan/)
