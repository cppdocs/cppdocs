---
title: "volatile type qualifier"
source_path: "c/language/volatile"
category: "c"
---

Each individual type in the C [type system](/c/language/compatible_type/) has several qualified versions of that type, corresponding to one, two, or all three of the [const](/c/language/const/), volatile, and, for pointers to object types, [restrict](/c/language/restrict/) qualifiers. This page describes the effects of the volatile qualifier.

## Example
```cpp
#include <stdio.h>
#include <time.h>
 
int main(void)
{
    clock_t t = clock();
    double d = 0.0;
    for (int n = 0; n < 10000; ++n)
        for (int m = 0; m < 10000; ++m)
            d += d * n * m; // reads from and writes to a non-volatile 
    printf("Modified a non-volatile variable 100m times. "
           "Time used: %.2f seconds\n",
           (double)(clock() - t)/CLOCKS_PER_SEC);
 
    t = clock();
    volatile double vd = 0.0;
    for (int n = 0; n < 10000; ++n)
        for (int m = 0; m < 10000; ++m) {
            double prod = vd * n * m; // reads from a volatile
            vd += prod; // reads from and writes to a volatile
        } 
    printf("Modified a volatile variable 100m times. "
           "Time used: %.2f seconds\n",
           (double)(clock() - t)/CLOCKS_PER_SEC);
}
```

## See also
- [C++ documentation](/cpp/language/cv/)
