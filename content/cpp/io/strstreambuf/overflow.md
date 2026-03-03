---
title: "std::strstreambuf::overflow"
source_path: "cpp/io/strstreambuf/overflow"
category: "io"
---

Appends the character c to the put area of the buffer, reallocating if possible.

## Declarations
```cpp
protected:
virtual int_type overflow( int_type c = EOF );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `c`: the character to store in the put area

## Return value
If c == [EOF](/cpp/io/c/), returns some value other than [EOF](/cpp/io/c/). Otherwise, returns (unsigned char)(c) on success, [EOF](/cpp/io/c/) on failure.

## Example
```cpp
#include <iostream>
#include <strstream>
 
struct mybuf : std::strstreambuf
{
    int_type overflow(int_type c) 
    {
        std::cout << "Before overflow(): size of the put area is " << epptr()-pbase()
                  << " with " << epptr()-pptr() << " write positions available\n";
        int_type rc = std::strstreambuf::overflow(c);
        std::cout << "After overflow(): size of the put area is " << epptr()-pbase()
                  << " with " << epptr()-pptr() << " write positions available\n";
        return rc;
    }
};
 
int main()
{
    mybuf sbuf; // read-write dynamic strstreambuf
    std::iostream stream(&sbuf);
 
    stream << "Sufficiently long string to overflow the initial allocation, at least "
           << " on some systems.";
}
```

## See also
- [overflow](/cpp/io/basic_streambuf/overflow/)
- [overflow](/cpp/io/basic_stringbuf/overflow/)
- [overflow](/cpp/io/basic_filebuf/overflow/)
- [sputc](/cpp/io/basic_streambuf/sputc/)
- [put](/cpp/io/basic_ostream/put/)
