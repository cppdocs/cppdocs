---
title: "std::basic_ifstream"
source_path: "cpp/io/basic_ifstream"
header: "<fstream>"
category: "io"
---

The class template basic_ifstream implements high-level input operations on file-based streams. It interfaces a file-based streambuffer ([std::basic_filebuf](/cpp/io/basic_filebuf/)) with the high-level interface of ([std::basic_istream](/cpp/io/basic_istream/)).

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_ifstream : public std::basic_istream<CharT, Traits>
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
    std::string filename = "Test.b";
 
    // prepare a file to read
    double d = 3.14;
    std::ofstream(filename, std::ios::binary)
        .write(reinterpret_cast<char*>(&d), sizeof d) << 123 << "abc";
 
    // open file for reading
    std::ifstream istrm(filename, std::ios::binary);
    if (!istrm.is_open())
        std::cout << "failed to open " << filename << '\n';
    else
    {
        double d;
        istrm.read(reinterpret_cast<char*>(&d), sizeof d); // binary input
        int n;
        std::string s;
        if (istrm >> n >> s)                               // text input
            std::cout << "read back from file: " << d << ' ' << n << ' ' << s << '\n';
    }
}
```
