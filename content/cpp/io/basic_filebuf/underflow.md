---
title: "std::basic_filebuf<CharT,Traits>::underflow"
source_path: "cpp/io/basic_filebuf/underflow"
category: "io"
---

Reads more data into the input area.

## Declarations
```cpp
protected:
virtual int_type underflow()
```

## Return value
Traits::to_int_type(*gptr()) (the first character of the pending sequence) in case of success, or Traits::eof() in case of failure.

## Example
```cpp
#include <fstream>
#include <iostream>
 
struct mybuf : std::filebuf
{
    int underflow()
    {
         std::cout << "Before underflow(): size of the get area is "
                   << egptr()-eback() << " with "
                   << egptr()-gptr() << " read positions available\n";
         int rc = std::filebuf::underflow();
         std::cout << "underflow() returns " << rc << ".\nAfter the call, "
                   << "size of the get area is "
                   << egptr()-eback() << " with "
                   << egptr()-gptr() << " read positions available\n";
        return rc;
    }
};
 
int main()
{
    mybuf buf;
    buf.open("test.txt", std::ios_base::in);
    std::istream stream(&buf);
    while (stream.get()) ;
}
```

## See also
- [underflow](/cpp/io/basic_streambuf/underflow/)
- [underflow](/cpp/io/basic_stringbuf/underflow/)
- [underflow](/cpp/io/strstreambuf/underflow/)
- [uflow](/cpp/io/basic_filebuf/uflow/)
- [overflow](/cpp/io/basic_filebuf/overflow/)
- [sgetc](/cpp/io/basic_streambuf/sgetc/)
