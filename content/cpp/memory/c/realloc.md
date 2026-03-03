---
title: "std::realloc"
source_path: "cpp/memory/c/realloc"
header: "<cstdlib>"
category: "memory"
---

Reallocates the given area of memory ([implicitly creating](/cpp/language/objects/#Object_creation) objects in the destination area). It must be previously allocated by [std::malloc](/cpp/memory/c/malloc/), [std::calloc](/cpp/memory/c/calloc/) or std::realloc and not yet freed with [std::free](/cpp/memory/c/free/), otherwise, the results are undefined.

## Declarations
```cpp
void* realloc( void* ptr, std::size_t new_size );
```

## Parameters
- `ptr`: pointer to the memory area to be reallocated
- `new_size`: new size of the array

## Return value
On success, returns a pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with [std::free](/cpp/memory/c/free/) or std::realloc. The original pointer ptr is invalidated and any access to it is [undefined behavior](/cpp/language/ub/) (even if reallocation was in-place).

## Notes
Because reallocation may involve bytewise copying (regardless of whether it expands or contracts the area), it is necessary (but not sufficient) for those objects to be of [TriviallyCopyable](/cpp/named_req/triviallycopyable/) type.

Some non-standard libraries define a type trait "BitwiseMovable" or "Relocatable", which describes a type that does not have:

Objects of such type can be accessed after their storage is reallocated even if their copy constructors are not trivial.

## Example
```cpp
#include <cassert>
#include <cstdlib>
#include <new>
 
class MallocDynamicBuffer
{
    char* p;
public:
    explicit MallocDynamicBuffer(std::size_t initial = 0) : p(nullptr)
    {
        resize(initial);
    }
 
    ~MallocDynamicBuffer() { std::free(p); }
 
    void resize(std::size_t newSize)
    {
        if (newSize == 0) // this check is not strictly needed,
        {
            std::free(p); // but zero-size realloc is deprecated in C
            p = nullptr;
        }
        else
        {
            if (void* mem = std::realloc(p, newSize))
                p = static_cast<char*>(mem);
            else
                throw std::bad_alloc();
        }
    }
 
    char& operator[](size_t n) { return p[n]; }
    char operator[](size_t n) const { return p[n]; }
};
 
int main()
{
    MallocDynamicBuffer buf1(1024);
    buf1[5] = 'f';
    buf1.resize(10); // shrink
    assert(buf1[5] == 'f');
    buf1.resize(1024); // grow
    assert(buf1[5] == 'f');
}
```

## See also
- [C documentation](/c/memory/realloc/)
