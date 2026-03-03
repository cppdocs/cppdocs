---
title: "max_align_t"
source_path: "c/types/max_align_t"
header: "<stddef.h>"
category: "c"
---

max_align_t is a type whose alignment requirement is at least as strict (as large) as that of every scalar type.

## Declarations
```cpp
typedef /*implementation-defined*/ max_align_t;
```
_(since C11)_

## Notes
Pointers returned by allocation functions such as [malloc](/c/memory/malloc/) are suitably aligned for any object, which means they are aligned at least as strictly as max_align_t.

## Example
```cpp
#include <inttypes.h>
#include <stdalign.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    size_t a = alignof(max_align_t);
    printf("Alignment of max_align_t is %zu (%#zx)\n", a, a);
 
    void *p = malloc(123);
    printf("The address obtained from malloc(123) is %#" PRIxPTR"\n",
            (uintptr_t)p);
    free(p);
}
```

## See also
- [C++ documentation](/cpp/types/max_align_t/)
