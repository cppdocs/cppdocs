---
title: "std::codecvt_utf16"
source_path: "cpp/locale/codecvt_utf16"
header: "<codecvt>"
category: "locale"
---

std::codecvt_utf16 is a [std::codecvt](/cpp/locale/codecvt/) facet which encapsulates conversion between a UTF-16 encoded byte string and UCS-2 or UTF-32 character string (depending on the type of Elem). This [std::codecvt](/cpp/locale/codecvt/) facet can be used to read and write UTF-16 files in binary mode.

## Declarations
```cpp
template<
class Elem,
unsigned long Maxcode = 0x10ffff,
std::codecvt_mode Mode = (std::codecvt_mode)0 >
class codecvt_utf16
: public std::codecvt<Elem, char, std::mbstate_t>;
```
_(since C++11) (deprecated in C++17) (removed in C++26)_

## Parameters
- `refs`: the number of references that link to the facet

## Notes
Although the standard requires that this facet works with UCS-2 when the size of Elem is 16 bits, some implementations use UTF-16 instead, making this a non-converting locale. The term "UCS-2" was deprecated and removed from ISO 10646.

## Example
```cpp
#include <codecvt>
#include <cwchar>
#include <fstream>
#include <iostream>
#include <locale>
#include <string>
 
void prepare_file()
{
    // UTF-16le data (if host system is little-endian)
    char16_t utf16le[4] = {0x007a,          // latin small letter 'z' U+007a
                           0x6c34,          // CJK ideograph "water"  U+6c34
                           0xd834, 0xdd0b}; // musical sign segno U+1d10b    
 
    // store in a file
    std::ofstream fout("text.txt");
    fout.write(reinterpret_cast<char*>(utf16le), sizeof utf16le);
}
 
int main()
{
    prepare_file();
    // open as a byte stream
    std::wifstream fin("text.txt", std::ios::binary);
    // apply facet
    fin.imbue(std::locale(fin.getloc(),
        new std::codecvt_utf16<wchar_t, 0x10ffff, std::little_endian>));
 
    wchar_t c = 0;
    for (std::cout << std::showbase << std::hex; fin.get(c);
         std::cout << static_cast<std::wint_t>(c) << '\n');
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2229 | C++98 | the constructor and destructor were not specified | specifies them |

## See also
- [mbrtoc16](/cpp/string/multibyte/mbrtoc16/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [mbrtoc32](/cpp/string/multibyte/mbrtoc32/)
- [c32rtomb](/cpp/string/multibyte/c32rtomb/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [use_facet](/cpp/locale/use_facet/)
- [codecvt](/cpp/locale/codecvt/)
- [locale](/cpp/locale/locale/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_mode](/cpp/locale/codecvt_mode/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
