---
title: "_Alignas (since C11)(deprecated in C23), alignas (since C23)"
source_path: "c/language/_Alignas"
category: "c"
---

Appears in the [declaration](/c/language/declarations/) syntax as one of the type specifiers to modify the [alignment requirement](/c/language/object/#Alignment) of the object being declared.

## Notes
In C++, the alignas specifier may also be applied to the declarations of class/struct/union types and enumerations. This is not supported in C, but the alignment of a struct type can be controlled by using _Alignas(until C23)alignas(since C23) in a member declaration.

## Example
```cpp
#include <stdalign.h>
#include <stdio.h>
 
// every object of type struct sse_t will be aligned to 16-byte boundary
// (note: needs support for DR 444)
struct sse_t
{
    alignas(16) float sse_data[4];
};
 
// every object of type struct data will be aligned to 128-byte boundary
struct data
{
    char x;
    alignas(128) char cacheline[128]; // over-aligned array of char,
                                      // not array of over-aligned chars
};
 
int main(void)
{
    printf("sizeof(data) = %zu (1 byte + 127 bytes padding + 128-byte array)\n",
           sizeof(struct data));
 
    printf("alignment of sse_t is %zu\n", alignof(struct sse_t));
 
    alignas(2048) struct data d; // this instance of data is aligned even stricter
    (void)d; // suppresses "maybe unused" warning
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 444 | C11 | _Alignas was not allowed in struct and union members | allowed |

## See also
- [max_align_t](/c/types/max_align_t/)
- [_Alignof](/c/language/alignof/)
- [alignof](/c/language/alignof/)
- [C++ documentation](/cpp/language/alignas/)
