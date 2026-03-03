---
title: "FP_NORMAL, FP_SUBNORMAL, FP_ZERO, FP_INFINITE, FP_NAN"
source_path: "c/numeric/math/FP_categories"
header: "<math.h>"
category: "c"
aliases: ["/c/numeric/math/FP_categories/"]
---

The FP_NORMAL, FP_SUBNORMAL, FP_ZERO, FP_INFINITE, FP_NAN macros each represent a distinct category of floating-point numbers. They all expand to an integer constant expression.

## Declarations
```cpp
#define FP_NORMAL /*implementation defined*/
```
_(since C99)_

```cpp
#define FP_SUBNORMAL /*implementation defined*/
```
_(since C99)_

```cpp
#define FP_ZERO /*implementation defined*/
```
_(since C99)_

```cpp
#define FP_INFINITE /*implementation defined*/
```
_(since C99)_

```cpp
#define FP_NAN /*implementation defined*/
```
_(since C99)_

## Example
```cpp
#include <stdio.h>
#include <math.h>
#include <float.h>
 
const char *show_classification(double x) {
    switch(fpclassify(x)) {
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
    printf("1.0/0.0 is %s\n", show_classification(1/0.0));
    printf("0.0/0.0 is %s\n", show_classification(0.0/0.0));
    printf("DBL_MIN/2 is %s\n", show_classification(DBL_MIN/2));
    printf("-0.0 is %s\n", show_classification(-0.0));
    printf(" 1.0 is %s\n", show_classification(1.0));
}
```

## See also
- [fpclassify](/c/numeric/math/fpclassify/)
- [C++ documentation](/cpp/numeric/math/fp_categories/)
