---
title: "size_t"
source_path: "c/types/size_t"
header: "<stddef.h>"
category: "c"
---

size_t is the unsigned integer type of the result of [sizeof](/c/language/sizeof/), [offsetof](/c/types/offsetof/) and _Alignof(until C23)alignof(since C23), depending on the [data model](/c/language/arithmetic_types/#Data_models).

## Declarations
```cpp
typedef /*implementation-defined*/ size_t;
```

## Notes
size_t can store the maximum size of a theoretically possible object of any type (including array).

size_t is commonly used for array indexing and loop counting. Programs that use other types, such as unsigned int, for array indexing may fail on, e.g. 64-bit systems when the index exceeds [UINT_MAX](/c/types/limits/) or if it relies on 32-bit modular arithmetic.

## Example
```cpp
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
 
int main(void)
{
    const size_t N = 101;
    int numbers[N];
    size_t sum = 0;
    for (size_t ndx = 0; ndx < N; ++ndx)
        sum += numbers[ndx] = ndx;
    size_t size = sizeof numbers;
    printf("sum = %zu\n", sum);
    printf("size = %zu\n", size);
    printf("SIZE_MAX = %zu\n", SIZE_MAX);
}
```

## See also
- [ptrdiff_t](/c/types/ptrdiff_t/)
- [offsetof](/c/types/offsetof/)
- [C++ documentation](/cpp/types/size_t/)
