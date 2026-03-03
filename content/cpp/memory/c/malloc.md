---
title: "std::malloc"
source_path: "cpp/memory/c/malloc"
header: "<cstdlib>"
category: "memory"
---

Allocates size bytes of uninitialized storage.

## Declarations
```cpp
void* malloc( std::size_t size );
```

## Parameters
- `size`: number of bytes to allocate

## Return value
On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with [std::free()](/cpp/memory/c/free/) or [std::realloc()](/cpp/memory/c/realloc/).

## Notes
This function does not call constructors or initialize memory in any way. There are no ready-to-use smart pointers that could guarantee that the matching deallocation function is called. The preferred method of memory allocation in C++ is using RAII-ready functions [std::make_unique](/cpp/memory/unique_ptr/make_unique/), [std::make_shared](/cpp/memory/shared_ptr/make_shared/), container constructors, etc, and, in low-level library code, [new-expression](/cpp/language/new/).

For loading a large file, file mapping via OS-specific functions, e.g. [mmap](https://pubs.opengroup.org/onlinepubs/9699919799/functions/mmap.html) on POSIX or CreateFileMapping([A](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-createfilemappinga)/[W](https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-createfilemappingw)) along with [MapViewOfFile](https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-mapviewoffile) on Windows, is preferable to allocating a buffer for file reading.

## Example
```cpp
#include <cstdlib> 
#include <iostream>   
#include <memory>
#include <string>
 
int main() 
{
    constexpr std::size_t size = 4;
    if (auto ptr = reinterpret_cast<std::string*>(std::malloc(size * sizeof(std::string))))
    {
        try
        {
            for (std::size_t i = 0; i < size; ++i)
                std::construct_at(ptr + i, 5, 'a' + i);
            for (std::size_t i = 0; i < size; ++i)
                std::cout << "ptr[" << i << "] == " << ptr[i] << '\n';
            std::destroy_n(ptr, size);
        }
        catch (...) {}
        std::free(ptr);
    }
}
```

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [get_temporary_buffer](/cpp/memory/get_temporary_buffer/)
- [C documentation](/c/memory/malloc/)
