---
title: "std::strstream::~strstream"
source_path: "cpp/io/strstream/~strstream"
category: "io"
---

Destroys a std::strstream object, which also destroys the member [std::strstreambuf](/cpp/io/strstreambuf/), which may call the deallocation function if the underlying buffer was dynamically-allocated and not frozen.

## Declarations
```cpp
virtual ~strstream();
```
_(deprecated in C++98) (removed in C++26)_

## Notes
If [str()](/cpp/io/strstream/str/) was called on a dynamic strstream and [freeze(false)](/cpp/io/strstream/freeze/) was not called after that, this destructor leaks memory.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    {
        std::ostrstream s; // dynamic buffer 
        s << 1.23 << std::ends;
        std::cout << s.str() << '\n';
        s.freeze(false);
    } // destructor called, buffer deallocated 
 
    {
        std::ostrstream s;
        s << 1.23 << std::ends;
        std::cout << s.str() << '\n';
//      buf.freeze(false);
    } // destructor called, memory leaked
 
    {
        std::istrstream s("1.23"); // constant buffer
        double d;
        s >> d;
        std::cout << d << '\n';
    } // destructor called, nothing to deallocate
}
```
