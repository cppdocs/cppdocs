---
title: "NULL"
source_path: "c/types/NULL"
header: "<locale.h>"
category: "c"
---

The macro NULL is an implementation-defined null pointer constant, which may be

## Declarations
```cpp
#define NULL /*implementation-defined*/
```

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stddef.h.html) NULL to be defined as an integer constant expression with the value 0 cast to void*.

## Example
```cpp
#include <inttypes.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    // any kind of pointer can be set to NULL
    int* p = NULL;
    struct S *s = NULL;
    void(*f)(int, double) = NULL;
    printf("%p %p %p\n", (void*)p, (void*)s, (void*)(long)f);
 
    // many pointer-returning functions use null pointers to indicate error
    char *ptr = malloc(0xFULL);
    if (ptr == NULL)
        printf("Out of memory");
    else
        printf("ptr = %#" PRIxPTR"\n", (uintptr_t)ptr);
    free(ptr);
}
```

## See also
- [nullptr_t](/c/types/nullptr_t/)
- [nullptr](/c/language/nullptr/)
- [C++ documentation](/cpp/types/null/)
