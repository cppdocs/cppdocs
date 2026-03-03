---
title: "std::basic_osyncstream<CharT,Traits,Allocator>::get_wrapped"
source_path: "cpp/io/basic_osyncstream/get_wrapped"
category: "io"
since: "C++20"
---

Returns a pointer to the wrapped [std::basic_streambuf](/cpp/io/basic_streambuf/), obtained by calling [get_wrapped()](/cpp/io/basic_syncbuf/get_wrapped/) on the underlying std::basic_syncbuf.

## Declarations
```cpp
streambuf_type* get_wrapped() const noexcept;
```

## Example
```cpp
#include <iostream>
#include <syncstream>
 
int main()
{
    std::osyncstream bout1(std::cout);
    bout1 << "Hello, ";
    {
        std::osyncstream(bout1.get_wrapped()) << "Goodbye, " << "Planet!" << '\n';
    } // emits the contents of the temporary buffer
    bout1 << "World!" << '\n';
} // emits the contents of bout1
```

## See also
- [(destructor)](/cpp/io/basic_osyncstream/~basic_osyncstream/)
- [get_wrapped](/cpp/io/basic_syncbuf/get_wrapped/)
