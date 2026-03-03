---
title: "float_t, double_t"
source_path: "c/numeric/math/float_t"
header: "<math.h>"
category: "c"
---

The types float_t and double_t are floating types at least as wide as float and double, respectively, and such that double_t is at least as wide as float_t. The value of [FLT_EVAL_METHOD](/c/types/limits/FLT_EVAL_METHOD/) determines the types of float_t and double_t.

## Declarations
```cpp
typedef /* implementation-defined */ float_t
```
_(since C99)_

```cpp
typedef /* implementation-defined */ double_t
```
_(since C99)_

## Example
```cpp
#include <float.h>
#include <math.h>
#include <stdio.h>
 
#define SHOW(expr) printf("%s = %d\n", #expr, (int)(expr))
 
int main()
{
    SHOW(FLT_EVAL_METHOD);
    SHOW(sizeof(float));
    SHOW(sizeof(float_t));
    SHOW(sizeof(double));
    SHOW(sizeof(double_t));
}
```

## See also
- [FLT_EVAL_METHOD](/c/types/limits/FLT_EVAL_METHOD/)
