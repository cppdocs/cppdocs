---
title: "std::ostrstream::~ostrstream"
source_path: "cpp/io/ostrstream/~ostrstream"
category: "io"
---

Destroys a [std::ostrstream](/cpp/io/ostrstream/) object, which also destroys the member [std::strstreambuf](/cpp/io/strstreambuf/), which may call the deallocation function if the underlying buffer was dynamically-allocated and not frozen.

## Declarations
```cpp
virtual ~ostrstream();
```
_(deprecated in C++98) (removed in C++26)_

## Notes
If [str()](/cpp/io/ostrstream/str/) was called on a dynamic ostrstream and [freeze(false)](/cpp/io/ostrstream/freeze/) was not called after that, this destructor leaks memory.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    {
        std::ostrstream s; // dynamic buffer 
        s << 1.23;
        std::cout << s.str() << '\n';
        s.freeze(false);
    } // destructor called, buffer deallocated 
 
    {
        std::ostrstream s;
        s << 1.23;
        std::cout << s.str() << '\n';
//      buf.freeze(false);
    } // destructor called, memory leaked
}
```
