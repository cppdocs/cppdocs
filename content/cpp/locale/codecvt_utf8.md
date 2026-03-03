---
title: "std::codecvt_utf8"
source_path: "cpp/locale/codecvt_utf8"
header: "<codecvt>"
category: "locale"
---

std::codecvt_utf8 is a [std::codecvt](/cpp/locale/codecvt/) facet which encapsulates conversion between a UTF-8 encoded byte string and UCS-2 or UTF-32 character string (depending on the type of Elem). This [std::codecvt](/cpp/locale/codecvt/) facet can be used to read and write UTF-8 files, both text and binary.

## Declarations
```cpp
template<
class Elem,
unsigned long Maxcode = 0x10ffff,
std::codecvt_mode Mode = (std::codecvt_mode)0 >
class codecvt_utf8
: public std::codecvt<Elem, char, std::mbstate_t>;
```
_(since C++11) (deprecated in C++17) (removed in C++26)_

## Parameters
- `refs`: the number of references that link to the facet

## Notes
Although the standard requires that this facet works with UCS-2 when the size of Elem is 16 bits, some implementations use UTF-16 instead. The term "UCS-2" was deprecated and removed from ISO 10646.

## Example
```cpp
#include <codecvt>
#include <cstdint>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    // UTF-8 data. The character U+1d10b, musical sign segno, does not fit in UCS-2
    std::string utf8 = "z\u6c34\U0001d10b";
 
    // the UTF-8 / UTF-16 standard conversion facet
    std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> utf16conv;
    std::u16string utf16 = utf16conv.from_bytes(utf8);
    std::cout << "UTF-16 conversion produced " << utf16.size() << " code units:\n"
              << std::showbase << std::hex;
    for (char16_t c : utf16)
        std::cout << static_cast<std::uint16_t>(c) << ' ';
 
    // the UTF-8 / UCS-2 standard conversion facet
    std::wstring_convert<std::codecvt_utf8<char16_t>, char16_t> ucs2conv;
    try
    {
        std::u16string ucs2 = ucs2conv.from_bytes(utf8);
    }
    catch(const std::range_error& e)
    {
        std::u16string ucs2 = ucs2conv.from_bytes(utf8.substr(0, ucs2conv.converted()));
        std::cout << "\nUCS-2 failed after producing " << std::dec << ucs2.size()
                  << " characters:\n" << std::showbase << std::hex;
        for (char16_t c : ucs2)
            std::cout << static_cast<std::uint16_t>(c) << ' ';
        std::cout << '\n';
    }
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
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbrtoc32](/cpp/string/multibyte/mbrtoc32/)
- [c32rtomb](/cpp/string/multibyte/c32rtomb/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [use_facet](/cpp/locale/use_facet/)
- [codecvt](/cpp/locale/codecvt/)
- [locale](/cpp/locale/locale/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_mode](/cpp/locale/codecvt_mode/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
