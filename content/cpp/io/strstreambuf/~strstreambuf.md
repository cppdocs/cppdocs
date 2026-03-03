---
title: "std::strstreambuf::~strstreambuf"
source_path: "cpp/io/strstreambuf/~strstreambuf"
category: "io"
---

Destroys a std::strstreambuf object. if the object is managing a dynamically-allocated buffer (the buffer state is "allocated") and if the object is not frozen, then deallocates the buffer using the deallocation function provided at construction or delete[] if none was provided.

## Declarations
```cpp
virtual ~strstreambuf();
```
_(deprecated in C++98) (removed in C++26)_

## Notes
This destructor is typically called by the destructor of [std::strstream](/cpp/io/strstream/).

If [str()](/cpp/io/strstreambuf/str/) was called on a dynamic strstream and [freeze(false)](/cpp/io/strstreambuf/freeze/) was not called after that, this destructor leaks memory.

## Example
```cpp
#include <iostream>
#include <strstream>
 
void* my_alloc(size_t n)
{
    std::cout << "my_alloc(" << n << ") called\n";
    return new char[n];
}
 
void my_free(void* p)
{
    std::cout << "my_free() called\n";
    delete[] (char*)p;
}
 
int main()
{
    {
        std::strstreambuf buf(my_alloc, my_free);
        std::ostream s(&buf);
        s << 1.23 << std::ends;
        std::cout << buf.str() << '\n';
        buf.freeze(false);
    } // destructor called here, buffer deallocated
 
    {
        std::strstreambuf buf(my_alloc, my_free);
        std::ostream s(&buf);
        s << 1.23 << std::ends;
        std::cout << buf.str() << '\n';
//      buf.freeze(false);
    } // destructor called here, memory leak!
}
```
