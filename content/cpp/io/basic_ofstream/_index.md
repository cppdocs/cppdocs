---
title: "std::basic_ofstream"
source_path: "cpp/io/basic_ofstream"
header: "<fstream>"
category: "io"
---

The class template basic_ofstream implements high-level output operations on file based streams. It interfaces a file-based streambuffer ([std::basic_filebuf](/cpp/io/basic_filebuf/)) with the high-level interface of ([std::basic_ostream](/cpp/io/basic_ostream/)).

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_ofstream : public std::basic_ostream<CharT, Traits>
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
    {
        std::ofstream ostrm(filename, std::ios::binary);
        double d = 3.14;
        ostrm.write(reinterpret_cast<char*>(&d), sizeof d); // binary output
        ostrm << 123 << "abc" << '\n';                      // text output
    }
 
    // read back
    std::ifstream istrm(filename, std::ios::binary);
    double d;
    istrm.read(reinterpret_cast<char*>(&d), sizeof d);
    int n;
    std::string s;
    istrm >> n >> s;
    std::cout << " read back: " << d << ' ' << n << ' ' << s << '\n';
}
```
