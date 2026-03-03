---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::setbuf"
source_path: "cpp/io/basic_stringbuf/setbuf"
category: "io"
---

If s is a null pointer and n is zero, this function has no effect.

## Declarations
```cpp
protected:
virtual std::basic_streambuf<CharT, Traits>* setbuf( char_type* s, std::streamsize n )
```

## Parameters
- `s`: pointer to the first CharT in the user-provided buffer or null
- `n`: the number of CharT elements in the user-provided buffer or zero

## Return value
this

## Notes
The deprecated stream buffer [std::strstreambuf](/cpp/io/strstreambuf/) or the boost.IOStreams device [boost::basic_array](https://www.boost.org/doc/libs/release/libs/iostreams/doc/classes/array.html#array) may be used to implement I/O buffering over a user-provided char array in portable manner.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream ss;
    char c[1024] = {};
    ss.rdbuf()->pubsetbuf(c, 1024);
    ss << 3.14 << '\n';
    std::cout << c << '\n';
}
```

## See also
- [pubsetbuf](/cpp/io/basic_streambuf/pubsetbuf/)
