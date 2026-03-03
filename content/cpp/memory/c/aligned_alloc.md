---
title: "std::aligned_alloc"
source_path: "cpp/memory/c/aligned_alloc"
header: "<cstdlib>"
category: "memory"
since: "C++17"
---

Allocate size bytes of uninitialized storage whose alignment is specified by alignment ([implicitly creating](/cpp/language/objects/#Object_creation) objects in the destination area). The size parameter must be an integral multiple of alignment.

## Declarations
```cpp
void* aligned_alloc( std::size_t alignment, std::size_t size );
```
_(since C++17)_

## Parameters
- `alignment`: specifies the alignment. Must be a valid alignment supported by the implementation.
- `size`: number of bytes to allocate. An integral multiple of alignment.

## Return value
On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with [std::free](/cpp/memory/c/free/) or [std::realloc](/cpp/memory/c/realloc/).

## Notes
Passing a size which is not an integral multiple of alignment or an alignment which is not valid or not supported by the implementation causes the function to fail and return a null pointer (C11, as published, specified undefined behavior in this case, this was corrected by [DR460](https://open-std.org/JTC1/SC22/WG14/www/docs/summary.htm#dr_460)).

As an example of the "supported by the implementation" requirement, POSIX function [posix_memalign](https://pubs.opengroup.org/onlinepubs/9699919799/functions/posix_memalign.html) accepts any alignment that is a power of two and a multiple of sizeof(void*), and POSIX-based implementations of aligned_alloc inherit this requirements.

Fundamental alignments are always supported. If alignment is a power of two and not greater than alignof([std::max_align_t](/cpp/types/max_align_t/)), aligned_alloc may simply call [std::malloc](/cpp/memory/c/malloc/).

Regular [std::malloc](/cpp/memory/c/malloc/) aligns memory suitable for any object type with a fundamental alignment. This function is useful for over-aligned allocations, such as to [SSE](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions), cache line, or [VM page](https://en.wikipedia.org/wiki/Page_(computer_memory)#Multiple_page_sizes) boundary.

This function is not supported in Microsoft C Runtime library because its implementation of [std::free](/cpp/memory/c/free/) is [unable to handle aligned allocations](https://learn.microsoft.com/en-us/cpp/standard-library/cstdlib#remarks-6) of any kind. Instead, MS CRT provides [_aligned_malloc](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/aligned-malloc) (to be freed with [_aligned_free](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/aligned-free)).

## Example
```cpp
#include <cstdio>
#include <cstdlib>
 
int main()
{
    int* p1 = static_cast<int*>(std::malloc(10 * sizeof *p1));
    std::printf("default-aligned address:   %p\n", static_cast<void*>(p1));
    std::free(p1);
 
    int* p2 = static_cast<int*>(std::aligned_alloc(1024, 1024));
    std::printf("1024-byte aligned address: %p\n", static_cast<void*>(p2));
    std::free(p2);
}
```

## See also
- [aligned_storage](/cpp/types/aligned_storage/)
- [C documentation](/c/memory/aligned_alloc/)
