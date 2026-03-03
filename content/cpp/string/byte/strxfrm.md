---
title: "std::strxfrm"
source_path: "cpp/string/byte/strxfrm"
header: "<cstring>"
category: "string"
---

Transforms the null-terminated byte string pointed to by src into the implementation-defined form such that comparing two transformed strings with [std::strcmp](/cpp/string/byte/strcmp/) gives the same result as comparing the original strings with [std::strcoll](/cpp/string/byte/strcoll/), in the current C locale.

## Declarations
```cpp
std::size_t strxfrm( char* dest, const char* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the first element of the array where the transformed string will be written
- `src`: pointer to the first character of a null-terminated byte string to transform
- `count`: maximum number of characters to be written

## Return value
The length of the transformed string, not including the terminating null-character.

## Notes
The correct length of the buffer that can receive the entire transformed string is 1 + std::strxfrm(nullptr, src, 0).

This function is used when making multiple locale-dependent comparisons using the same string or set of strings, because it is more efficient to use std::strxfrm to transform all the strings just once, and subsequently compare the transformed strings with [std::strcmp](/cpp/string/byte/strcmp/).

## Example
```cpp
#include <cassert>
#include <cstring>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    char* loc = std::setlocale(LC_COLLATE, "cs_CZ.iso88592");
    assert(loc);
 
    std::string in1 = "hrnec";
    std::string out1(1 + std::strxfrm(nullptr, in1.c_str(), 0), ' ');
    std::string in2 = "chrt";
    std::string out2(1 + std::strxfrm(nullptr, in2.c_str(), 0), ' ');
 
    std::strxfrm(&out1[0], in1.c_str(), out1.size());
    std::strxfrm(&out2[0], in2.c_str(), out2.size());
 
    std::cout << "In the Czech locale: ";
    if (out1 < out2)
        std::cout << in1 << " before " << in2 << '\n';
    else
        std::cout << in2 << " before " << in1 << '\n';
 
    std::cout << "In lexicographical comparison: ";
    if (in1 < in2)
        std::cout << in1 << " before " << in2 << '\n';
    else
        std::cout << in2 << " before " << in1 << '\n';
}
```

## See also
- [wcsxfrm](/cpp/string/wide/wcsxfrm/)
- [do_transform](/cpp/locale/collate/transform/)
- [strcoll](/cpp/string/byte/strcoll/)
- [C documentation](/c/string/byte/strxfrm/)
