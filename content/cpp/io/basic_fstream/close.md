---
title: "std::basic_fstream<CharT,Traits>::close"
source_path: "cpp/io/basic_fstream/close"
category: "io"
---

Closes the associated file.

## Declarations
```cpp
void close();
```

## Return value
(none)

## Notes
This function is called by the destructor of basic_fstream when the stream object goes out of scope and is not usually invoked directly.

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    std::fstream f1("example1", std::ios::out),
                 f2("example2", std::ios::out),
                 f3("example3", std::ios::out);
 
    std::cout << std::boolalpha
              << f1.is_open() << '\n'
              << f2.is_open() << '\n'
              << f3.is_open() << '\n';
 
    f1.close();
    f2.close();
 
    std::cout << f1.is_open() << '\n'
              << f2.is_open() << '\n'
              << f3.is_open() << '\n';
}
```

## See also
- [is_open](/cpp/io/basic_fstream/is_open/)
- [open](/cpp/io/basic_fstream/open/)
- [close](/cpp/io/basic_filebuf/close/)
