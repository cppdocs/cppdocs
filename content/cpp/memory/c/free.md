---
title: "std::free"
source_path: "cpp/memory/c/free"
header: "<cstdlib>"
category: "memory"
---

Deallocates the space previously allocated by [std::malloc](/cpp/memory/c/malloc/), [std::calloc](/cpp/memory/c/calloc/), [std::aligned_alloc](/cpp/memory/c/aligned_alloc/)(since C++17), or [std::realloc](/cpp/memory/c/realloc/).

## Declarations
```cpp
void free( void* ptr );
```

## Parameters
- `ptr`: pointer to the memory to deallocate

## Return value
(none)

## Notes
The function accepts (and does nothing with) the null pointer to reduce the amount of special-casing. Whether allocation succeeds or not, the pointer returned by an allocation function can be passed to std::free.

## Example
```cpp
#include <cstdlib>
 
int main()
{
    int* p1 = (int*)std::malloc(10 * sizeof *p1);
    std::free(p1); // every allocated pointer must be freed
 
    int* p2 = (int*)std::calloc(10, sizeof *p2);
    int* p3 = (int*)std::realloc(p2, 1000 * sizeof *p3);
    if (!p3) // p3 null means realloc failed and p2 must be freed.
        std::free(p2);
    std::free(p3); // p3 can be freed whether or not it is null.
}
```

## See also
- [C documentation](/c/memory/free/)
