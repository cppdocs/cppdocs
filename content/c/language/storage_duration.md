---
title: "Storage-class specifiers"
source_path: "c/language/storage_duration"
category: "c"
---

Specify storage duration and linkage of objects and functions:

## Notes
The keyword _Thread_local is usually used through the convenience macro [thread_local](/c/thread/thread_local/), defined in the header [<threads.h>](/c/thread/).

The [typedef](/c/language/typedef/)and [constexpr](/c/language/constexpr/)(since C23) specifiers are formally listed as storage-class specifiers in the C language grammar, but do not specify storage.

The auto specifier is also used for type inference.

Names at file scope that are const and not extern have external linkage in C (as the default for all file-scope declarations), but internal linkage in C++.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
// static storage duration
int A;
 
int main(void)
{
    printf("&A = %p\n", (void*)&A);
 
    // automatic storage duration
    int A = 1;   // hides global A
    printf("&A = %p\n", (void*)&A);
 
    // allocated storage duration
    int* ptr_1 = malloc(sizeof(int));   // start allocated storage duration
    printf("address of int in allocated memory = %p\n", (void*)ptr_1);
    free(ptr_1);                        // stop allocated storage duration
}
```

## See also
- [C++ documentation](/cpp/language/storage_duration/)
