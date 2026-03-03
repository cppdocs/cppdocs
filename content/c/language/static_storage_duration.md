---
title: "Static storage duration"
source_path: "c/language/static_storage_duration"
category: "c"
---

An object whose identifier is declared without the storage-class specifier _Thread_local, and either with external or internal [linkage](/c/language/storage_duration/#Linkage) or with the storage-class specifier static, has static storage duration. Its lifetime is the entire execution of the program and its stored value is initialized only once, prior to program startup.

## Notes
Since its stored value is initialized only once, an object with static storage duration can profile the invocations of a function.

The other use of the keyword static is [file scope](/c/language/file_scope/).

## Example
```cpp
#include <stdio.h>
 
void f (void)
{
    static int count = 0;   // static variable   
    int i = 0;              // automatic variable
    printf("%d %d\n", i++, count++);
}
 
int main(void)
{
    for (int ndx=0; ndx<10; ++ndx)
        f();
}
```
