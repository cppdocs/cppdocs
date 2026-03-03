---
title: "INFINITY"
source_path: "c/numeric/math/INFINITY"
header: "<math.h>"
category: "c"
aliases: ["/c/numeric/math/INFINITY/"]
---

If the implementation supports floating-point infinities, the macro INFINITY expands to constant expression of type float which evaluates to positive or unsigned infinity.

## Declarations
```cpp
#define INFINITY /*implementation defined*/
```
_(since C99)_

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <stdint.h>
#include <inttypes.h>
#include <string.h>
 
int main(void)
{
    double f = INFINITY;
    uint64_t fn; memcpy(&fn, &f, sizeof f);
    printf("INFINITY:   %f %" PRIx64 "\n", f, fn);
}
```

## See also
- [isinf](/c/numeric/math/isinf/)
- [HUGE_VALF, HUGE_VAL, HUGE_VALL](/c/numeric/math/HUGE_VAL/)
- [C++ documentation](/cpp/numeric/math/infinity/)
