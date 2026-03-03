---
title: "std::wcsxfrm"
source_path: "cpp/string/wide/wcsxfrm"
header: "<cwchar>"
category: "string"
---

Transforms the null-terminated wide string pointed to by src into the implementation-defined form such that comparing two transformed strings with [std::wcscmp](/cpp/string/wide/wcscmp/) gives the same result as comparing the original strings with [std::wcscoll](/cpp/string/wide/wcscoll/), in the current C locale.

## Declarations
```cpp
std::size_t wcsxfrm( wchar_t* dest, const wchar_t* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the first element of a wide null-terminated string to write the transformed string to
- `src`: pointer to the null-terminated wide character string to transform
- `count`: maximum number of characters to output

## Return value
The length of the transformed wide string, not including the terminating null-character.

## Notes
The correct length of the buffer that can receive the entire transformed string is 1 + std::wcsxfrm(nullptr, src, 0).

This function is used when making multiple locale-dependent comparisons using the same wide string or set of wide strings, because it is more efficient to use std::wcsxfrm to transform all the strings just once, and subsequently compare the transformed wide strings with [std::wcscmp](/cpp/string/wide/wcscmp/).

## Example
```cpp
#include <cwchar>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "sv_SE.utf8");
 
    std::wstring in1 = L"\u00e5r";
    std::wstring out1(1 + std::wcsxfrm(nullptr, in1.c_str(), 0), L' ');
    std::wstring in2 = L"\u00e4ngel";
    std::wstring out2(1 + std::wcsxfrm(nullptr, in2.c_str(), 0), L' ');
 
    std::wcsxfrm(&out1[0], in1.c_str(), out1.size());
    std::wcsxfrm(&out2[0], in2.c_str(), out2.size());
 
    std::wcout << "In the Swedish locale: ";
    if (out1 < out2)
        std::wcout << in1 << " before " << in2 << '\n';
    else
        std::wcout << in2 << " before " << in1 << '\n';
 
    std::wcout << "In lexicographical comparison: ";
    if (in1 < in2)
        std::wcout << in1 << " before " << in2 << '\n';
    else
        std::wcout << in2 << " before " << in1 << '\n';
 
}
```

## See also
- [strxfrm](/cpp/string/byte/strxfrm/)
- [do_transform](/cpp/locale/collate/transform/)
- [wcscoll](/cpp/string/wide/wcscoll/)
- [C documentation](/c/string/wide/wcsxfrm/)
