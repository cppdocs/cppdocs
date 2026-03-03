---
title: "ptrdiff_t"
source_path: "c/types/ptrdiff_t"
header: "<stddef.h>"
category: "c"
---

ptrdiff_t is the signed integer type of the result of [subtracting two pointers](/c/language/operator_arithmetic/#Pointer_arithmetic).

## Declarations
```cpp
typedef /*implementation-defined*/ ptrdiff_t;
```

## Notes
ptrdiff_t is used for pointer arithmetic and array indexing, if negative values are possible. Programs that use other types, such as int, may fail on, e.g. 64-bit systems when the index exceeds [INT_MAX](/c/types/limits/) or if it relies on 32-bit modular arithmetic.

Only pointers to elements of the same array (including the pointer one past the end of the array) may be subtracted from each other.

If an array is so large (greater than [PTRDIFF_MAX](/c/types/limits/) elements, but equal to or less than [SIZE_MAX](/c/types/limits/) bytes), that the difference between two pointers may not be representable as ptrdiff_t, the result of subtracting two such pointers is undefined.

For char arrays shorter than [PTRDIFF_MAX](/c/types/limits/), ptrdiff_t acts as the signed counterpart of [size_t](/c/types/size_t/): it can store the size of the array of any type and is, on most platforms, synonymous with intptr_t).

## Example
```cpp
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
 
int main(void)
{
    const size_t N = 100;
    int numbers[N];
 
    printf("PTRDIFF_MAX = %ld\n", PTRDIFF_MAX);
    int *p1 = &numbers[18], *p2 = &numbers[23];
    ptrdiff_t diff = p2 - p1;
    printf("p2-p1 = %td\n", diff);
}
```

## See also
- [size_t](/c/types/size_t/)
- [sizeof](/c/language/sizeof/)
- [offsetof](/c/types/offsetof/)
- [C++ documentation](/cpp/types/ptrdiff_t/)
