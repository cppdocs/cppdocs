---
title: "std::codecvt_utf8_utf16"
source_path: "cpp/locale/codecvt_utf8_utf16"
header: "<codecvt>"
category: "locale"
---

std::codecvt_utf8_utf16 is a [std::codecvt](/cpp/locale/codecvt/) facet which encapsulates conversion between a UTF-8 encoded byte string and UTF-16 encoded character string. If Elem is a 32-bit type, one UTF-16 code unit will be stored in each 32-bit character of the output sequence.

## Declarations
```cpp
template<
class Elem,
unsigned long Maxcode = 0x10ffff,
std::codecvt_mode Mode = (std::codecvt_mode)0 >
class codecvt_utf8_utf16
: public std::codecvt<Elem, char, std::mbstate_t>;
```
_(since C++11) (deprecated in C++17) (removed in C++26)_

## Parameters
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <cassert>
#include <codecvt>
#include <cstdint>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    std::string u8 = "z\u00df\u6c34\U0001f34c";
    std::u16string u16 = u"z\u00df\u6c34\U0001f34c";
 
    // UTF-8 to UTF-16/char16_t
    std::u16string u16_conv = std::wstring_convert<
        std::codecvt_utf8_utf16<char16_t>, char16_t>{}.from_bytes(u8);
    assert(u16 == u16_conv);
    std::cout << "UTF-8 to UTF-16 conversion produced " << u16_conv.size()
              << " code units:\n" << std::showbase << std::hex;
    for (char16_t c : u16_conv)
        std::cout << static_cast<std::uint16_t>(c) << ' ';
 
    // UTF-16/char16_t to UTF-8
    std::string u8_conv = std::wstring_convert<
        std::codecvt_utf8_utf16<char16_t>, char16_t>{}.to_bytes(u16);
    assert(u8 == u8_conv);
    std::cout << "\nUTF-16 to UTF-8 conversion produced "
              << std::dec << u8_conv.size() << " bytes:\n" << std::hex;
    for (char c : u8_conv)
        std::cout << +static_cast<unsigned char>(c) << ' ';
    std::cout << '\n';
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
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbrtoc32](/cpp/string/multibyte/mbrtoc32/)
- [c32rtomb](/cpp/string/multibyte/c32rtomb/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [use_facet](/cpp/locale/use_facet/)
- [codecvt](/cpp/locale/codecvt/)
- [locale](/cpp/locale/locale/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_mode](/cpp/locale/codecvt_mode/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
