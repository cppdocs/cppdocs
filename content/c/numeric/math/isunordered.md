---
title: "isunordered"
source_path: "c/numeric/math/isunordered"
header: "<math.h>"
category: "c"
---

Determines if the floating point numbers x and y are unordered, that is, one or both are NaN and thus cannot be meaningfully compared with each other.

## Declarations
```cpp
#define isunordered(x, y) /* implementation defined */
```
_(since C99)_

## Parameters
- `x`: floating point value
- `y`: floating point value

## Return value
Nonzero integral value if either x or y is NaN, 0 otherwise.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("isunordered(NAN,1.0) = %d\n", isunordered(NAN, 1.0));
    printf("isunordered(1.0,NAN) = %d\n", isunordered(1.0, NAN));
    printf("isunordered(NAN,NAN) = %d\n", isunordered(NAN, NAN));
    printf("isunordered(1.0,0.0) = %d\n", isunordered(1.0, 0.0));
 
    return 0;
}
```

## See also
- [fpclassify](/c/numeric/math/fpclassify/)
- [isnan](/c/numeric/math/isnan/)
- [C++ documentation](/cpp/numeric/math/isunordered/)
