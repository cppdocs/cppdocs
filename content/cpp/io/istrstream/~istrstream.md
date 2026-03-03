---
title: "std::istrstream::~istrstream"
source_path: "cpp/io/istrstream/~istrstream"
category: "io"
---

Destroys a std::istrstream object, which also destroys the member [std::strstreambuf](/cpp/io/strstreambuf/).

## Declarations
```cpp
virtual ~istrstream();
```
_(deprecated in C++98) (removed in C++26)_

## Notes
The constructors of [std::istrstream](/cpp/io/istrstream/) do not create the underlying [std::strstreambuf](/cpp/io/strstreambuf/) in dynamically allocated mode, so the memory leaks that are possible with [std::ostrstream::~ostrstream](/cpp/io/ostrstream/~ostrstream/) or [std::strstream::~strstream](/cpp/io/strstream/~strstream/) do not apply.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    {
        std::istrstream s("1.234");
        double d;
        s >> d;
        std::cout << d << '\n';
    } // destructor called
}
```
