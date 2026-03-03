---
title: "std::strstreambuf::str"
source_path: "cpp/io/strstreambuf/str"
category: "io"
---

Calls [freeze()](/cpp/io/strstreambuf/freeze/), then returns a copy of start pointer of the get area, [std::streambuf::eback()](/cpp/io/basic_streambuf/gptr/).

## Declarations
```cpp
char* str();
```
_(deprecated in C++98) (removed in C++26)_

## Return value
A copy of [eback()](/cpp/io/basic_streambuf/gptr/), which may be a null pointer.

## Notes
This function is typically called through the [std::strstream](/cpp/io/strstream/) interface.

The call to [freeze()](/cpp/io/strstreambuf/freeze/) guarantees that the returned pointer remains valid until the next explicit call to [freeze](/cpp/io/strstreambuf/freeze/)(false): otherwise (on a dynamic buffer) any output operation could trigger buffer reallocation which would invalidate the pointer. It also causes a memory leak in the destructor of std::strstreambuf, unless freeze(false) is called before the buffer (or, more commonly, the [std::strstream](/cpp/io/strstream/) that manages it) is destroyed.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::strstream dyn; // dynamically-allocated read/write buffer
    dyn << "Test: " << 1.23 << std::ends;
    std::strstreambuf* buf = dyn.rdbuf();
    std::cout << "R/W buffer holds [" << buf->str() // or dyn.str()
              << "]\n";
    dyn.freeze(false); // after calling .str() on a dynamic strstream
 
    char arr[10];
    std::ostrstream user(arr, 10); // fixed-size write-only buffer
    buf = user.rdbuf();
    user << 1.23 << std::ends;
    std::cout << "Write-only buffer holds [" << buf->str() // or user.str()
              << "]\n";
 
    std::istrstream lit("1 2 3"); // fixed-size read-only buffer
    buf = lit.rdbuf();
    std::cout << "Read-only buffer holds [" << buf->str() // or lit.str()
              << "]\n";
}
```

## See also
- [str](/cpp/io/strstream/str/)
- [str](/cpp/io/ostrstream/str/)
- [str](/cpp/io/istrstream/str/)
