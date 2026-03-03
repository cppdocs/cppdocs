---
title: "std::strstream::str"
source_path: "cpp/io/strstream/str"
category: "io"
---

Returns the pointer to the beginning of the buffer, after freezing it. Effectively calls rdbuf()->str().

## Declarations
```cpp
char* str();
```
_(deprecated in C++98) (removed in C++26)_

## Return value
Pointer to the beginning of the buffer in the associated [std::strstreambuf](/cpp/io/strstreambuf/) or a null pointer if no buffer is available.

## Notes
Before a call to str() that uses the result as a C-string, the stream buffer must be null-terminated. Regular output such as with stream << 1.2 does not store a null terminator, it must be appended explicitly, typically with the manipulator [std::ends](/cpp/io/manip/ends/).

After a call to str(), dynamic streams become frozen. A call to [freeze(false)](/cpp/io/strstream/freeze/) is required before exiting the scope in which this strstream object was created. otherwise the destructor will leak memory. Also, additional output to a frozen stream may be truncated once it reaches the end of the allocated buffer, which may leave the buffer not null-terminated.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::strstream dyn; // dynamically-allocated output buffer
    dyn << "Test: " << 1.23; // not adding std::ends to demonstrate append behavior
    std::cout << "The output stream holds \"";
    std::cout.write(dyn.str(), dyn.pcount()) << "\"\n"; 
    // the stream is now frozen due to str()
    dyn << " More text" << std::ends;
    std::cout << "The output stream holds \"";
    std::cout.write(dyn.str(), dyn.pcount()) << "\"\n";
    dyn.freeze(false);
}
```

## See also
- [str](/cpp/io/strstreambuf/str/)
