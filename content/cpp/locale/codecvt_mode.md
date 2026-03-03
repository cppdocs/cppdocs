---
title: "std::codecvt_mode"
source_path: "cpp/locale/codecvt_mode"
header: "<codecvt>"
category: "locale"
---

The facets [std::codecvt_utf8](/cpp/locale/codecvt_utf8/), [std::codecvt_utf16](/cpp/locale/codecvt_utf16/), and [std::codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/) accept an optional value of type std::codecvt_mode as a template argument, which specifies optional features of the unicode string conversion.

## Declarations
```cpp
enum codecvt_mode {
consume_header = 4,
generate_header = 2,
little_endian = 1
};
```
_(since C++11) (deprecated in C++17) (removed in C++26)_

## Example
```cpp
#include <codecvt>
#include <cwchar>
#include <fstream>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    // UTF-8 data with BOM
    std::ofstream{"text.txt"} << "\ufeffz\u6c34\U0001d10b";
 
    // read the UTF-8 file, skipping the BOM
    std::wifstream fin{"text.txt"};
    fin.imbue(std::locale(fin.getloc(),
                          new std::codecvt_utf8<wchar_t, 0x10ffff, std::consume_header>));
 
    for (wchar_t c; fin.get(c);)
        std::cout << std::hex << std::showbase << (std::wint_t)c << '\n';
}
```

## See also
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
