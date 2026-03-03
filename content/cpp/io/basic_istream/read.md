---
title: "std::basic_istream<CharT,Traits>::read"
source_path: "cpp/io/basic_istream/read"
category: "io"
---

Extracts characters from stream.

## Declarations
```cpp
basic_istream& read( char_type* s, std::streamsize count );
```

## Parameters
- `s`: pointer to the character array to store the characters to
- `count`: number of characters to read

## Return value
*this

## Notes
When using a non-converting locale (the default locale is non-converting), the overrider of this function in [std::basic_ifstream](/cpp/io/basic_ifstream/) may be optimized for zero-copy bulk I/O (by means of overriding [std::streambuf::xsgetn](/cpp/io/basic_streambuf/sgetn/)).

## Example
```cpp
#include <cstdint>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    // read() is often used for binary I/O
    std::string bin = {'\x12', '\x12', '\x12', '\x12'};
    std::istringstream raw(bin);
    std::uint32_t n;
    if (raw.read(reinterpret_cast<char*>(&n), sizeof n))
        std::cout << std::hex << std::showbase << n << '\n';
 
    // prepare file for next snippet
    std::ofstream("test.txt", std::ios::binary) << "abcd1\nabcd2\nabcd3";
 
    // read entire file into string
    if (std::ifstream is{"test.txt", std::ios::binary | std::ios::ate})
    {
        auto size = is.tellg();
        std::string str(size, '\0'); // construct string to stream size
        is.seekg(0);
        if (is.read(&str[0], size))
            std::cout << str << '\n';
    }
}
```

## See also
- [write](/cpp/io/basic_ostream/write/)
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
- [readsome](/cpp/io/basic_istream/readsome/)
- [get](/cpp/io/basic_istream/get/)
- [getline](/cpp/io/basic_istream/getline/)
- [fread](/cpp/io/c/fread/)
