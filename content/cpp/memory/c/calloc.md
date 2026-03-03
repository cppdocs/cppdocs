---
title: "std::calloc"
source_path: "cpp/memory/c/calloc"
header: "<cstdlib>"
category: "memory"
---

Allocates memory for an array of num objects of size size, initializes it to all bits zero ([implicitly creating](/cpp/language/objects/#Object_creation) objects in the destination area).

## Declarations
```cpp
void* calloc( std::size_t num, std::size_t size );
```

## Parameters
- `num`: number of objects
- `size`: size of each object

## Return value
On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with [std::free()](/cpp/memory/c/free/) or [std::realloc()](/cpp/memory/c/realloc/).

## Notes
Due to the alignment requirements, the number of allocated bytes is not necessarily equal to num * size.

Initialization to all bits zero does not guarantee that a floating-point or a pointer would be initialized to 0.0 and the null pointer value, respectively (although that is true on all common platforms).

Originally (in C89), support for zero size was added to accommodate code such as

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
int main()
{
    int* p1 = (int*)std::calloc(4, sizeof(int)); // allocate and zero out an array of 4 int
    int* p2 = (int*)std::calloc(1, sizeof(int[4])); // same, naming the array type directly
    int* p3 = (int*)std::calloc(4, sizeof *p3); // same, without repeating the type name
 
    if (p2)
        for (int n = 0; n < 4; ++n) // print the array
            std::cout << "p2[" << n << "] == " << p2[n] << '\n';
 
    std::free(p1);
    std::free(p2);
    std::free(p3);
}
```

## See also
- [C documentation](/c/memory/calloc/)
