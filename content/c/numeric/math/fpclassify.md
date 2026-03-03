---
title: "fpclassify"
source_path: "c/numeric/math/fpclassify"
header: "<math.h>"
category: "c"
---

Categorizes floating-point value arg into the following categories: zero, subnormal, normal, infinite, NAN, or implementation-defined category. The macro returns an integral value.

## Declarations
```cpp
#define fpclassify(arg) /* implementation defined */
```
_(since C99)_

## Parameters
- `arg`: floating-point value

## Return value
One of [FP_INFINITE](/c/numeric/math/FP_categories/), [FP_NAN](/c/numeric/math/FP_categories/), [FP_NORMAL](/c/numeric/math/FP_categories/), [FP_SUBNORMAL](/c/numeric/math/FP_categories/), [FP_ZERO](/c/numeric/math/FP_categories/) or implementation-defined type, specifying the category of arg.

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
const char* show_classification(double x)
{
    switch(fpclassify(x))
    {
        case FP_INFINITE:  return "Inf";
        case FP_NAN:       return "NaN";
        case FP_NORMAL:    return "normal";
        case FP_SUBNORMAL: return "subnormal";
        case FP_ZERO:      return "zero";
        default:           return "unknown";
    }
}
 
int main(void)
{
    printf("1.0/0.0 is %s\n", show_classification(1 / 0.0));
    printf("0.0/0.0 is %s\n", show_classification(0.0 / 0.0));
    printf("DBL_MIN/2 is %s\n", show_classification(DBL_MIN / 2));
    printf("-0.0 is %s\n", show_classification(-0.0));
    printf("1.0 is %s\n", show_classification(1.0));
}
```

## See also
- [isfinite](/c/numeric/math/isfinite/)
- [isinf](/c/numeric/math/isinf/)
- [isnan](/c/numeric/math/isnan/)
- [isnormal](/c/numeric/math/isnormal/)
- [C++ documentation](/cpp/numeric/math/fpclassify/)
