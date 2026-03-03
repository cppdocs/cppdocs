---
title: "std::streamsize"
source_path: "cpp/io/streamsize"
header: "<ios>"
category: "io"
---

The type std::streamsize is a signed integral type used to represent the number of characters transferred in an I/O operation or the size of an I/O buffer. It is used as a signed counterpart of [std::size_t](/cpp/types/size_t/), similar to the POSIX type ssize_t.

## Declarations
```cpp
typedef /*implementation-defined*/ streamsize;
```

## Notes
Except in the constructors of [std::strstreambuf](/cpp/io/strstreambuf/), negative values of std::streamsize are never used.

## Example
```cpp
#include <iostream>
#include <type_traits>
 
static_assert(std::is_signed_v<std::streamsize>);
 
int main()
{
    std::cout << sizeof(std::streamsize) << '\n';
}
```

## See also
- [gcount](/cpp/io/basic_istream/gcount/)
- [ignore](/cpp/io/basic_istream/ignore/)
- [read](/cpp/io/basic_istream/read/)
- [write](/cpp/io/basic_ostream/write/)
