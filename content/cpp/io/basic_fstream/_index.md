---
title: "std::basic_fstream"
source_path: "cpp/io/basic_fstream"
header: "<fstream>"
category: "io"
---

The class template basic_fstream implements high-level input/output operations on file based streams. It interfaces a file-based streambuffer ([std::basic_filebuf](/cpp/io/basic_filebuf/)) with the high-level interface of ([std::basic_iostream](/cpp/io/basic_iostream/)).

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_fstream : public std::basic_iostream<CharT, Traits>
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_fstream_native_handle
202306L
(C++26)
native handles support

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    std::string filename{"test.bin"};
    std::fstream s{filename, s.binary | s.trunc | s.in | s.out};
 
    if (!s.is_open())
        std::cout << "failed to open " << filename << '\n';
    else
    {
        // write
        double d{3.14};
        s.write(reinterpret_cast<char*>(&d), sizeof d); // binary output
        s << 123 << "abc";                              // text output
 
        // for fstream, this moves the file position pointer (both put and get)
        s.seekp(0);
 
        // read
        d = 2.71828;
        s.read(reinterpret_cast<char*>(&d), sizeof d); // binary input
        int n;
        std::string str;
        if (s >> n >> str)                             // text input
            std::cout << "read back from file: " << d << ' ' << n << ' ' << str << '\n';
    }
}
```

## See also
- [getline](/cpp/string/basic_string/getline/)
