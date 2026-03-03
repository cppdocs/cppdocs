---
title: "HUGE_VALF, HUGE_VAL, HUGE_VALL"
source_path: "c/numeric/math/HUGE_VAL"
header: "<math.h>"
category: "c"
aliases: ["/c/numeric/math/HUGE_VAL/"]
---

The HUGE_VALF, HUGE_VAL and HUGE_VALL macros expand to positive floating-point constant expressions which compare equal to the values returned by floating-point functions and operators in case of overflow (see [math_errhandling](/c/numeric/math/math_errhandling/)).

## Declarations
```cpp
#define HUGE_VALF /*implementation defined*/
```
_(since C99)_

```cpp
#define HUGE_VAL /*implementation defined*/
```

```cpp
#define HUGE_VALL /*implementation defined*/
```
_(since C99)_

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    const double result = 1.0 / 0.0;
    printf("1.0/0.0 == %f\n", result);
    if (result == HUGE_VAL)
        puts("1.0/0.0 == HUGE_VAL");
}
```

## See also
- [INFINITY](/c/numeric/math/INFINITY/)
- [C++ documentation](/cpp/numeric/math/huge_val/)
