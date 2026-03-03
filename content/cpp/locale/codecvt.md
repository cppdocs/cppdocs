---
title: "std::codecvt"
source_path: "cpp/locale/codecvt"
header: "<locale>"
category: "locale"
---

Class template std::codecvt encapsulates conversion of character strings, including wide and multibyte, from one encoding to another. All file I/O operations performed through [std::basic_fstream](/cpp/io/basic_fstream/)<CharT> use the std::codecvt<CharT, char, [std::mbstate_t](/cpp/string/multibyte/mbstate_t/)> facet of the locale imbued in the stream.

## Declarations
```cpp
template<
class InternT,
class ExternT,
class StateT
> class codecvt;
```

## Example
```cpp
#include <codecvt>
#include <cstdint>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <locale>
#include <string>
 
// utility wrapper to adapt locale-bound facets for wstring/wbuffer convert
template<class Facet>
struct deletable_facet : Facet
{
    template<class... Args>
    deletable_facet(Args&&... args) : Facet(std::forward<Args>(args)...) {}
    ~deletable_facet() {}
};
 
int main()
{
    // UTF-8 narrow multibyte encoding
    std::string data = reinterpret_cast<const char*>(+u8"z\u00df\u6c34\U0001f34c");
                       // or reinterpret_cast<const char*>(+u8"zß水🍌")
                       // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c"
 
    std::ofstream("text.txt") << data;
 
    // using system-supplied locale's codecvt facet
    std::wifstream fin("text.txt");
    // reading from wifstream will use codecvt<wchar_t, char, std::mbstate_t>
    // this locale's codecvt converts UTF-8 to UCS4 (on systems such as Linux)
    fin.imbue(std::locale("en_US.UTF-8"));
    std::cout << "The UTF-8 file contains the following UCS4 code units:\n" << std::hex;
    for (wchar_t c; fin >> c;)
        std::cout << "U+" << std::setw(4) << std::setfill('0')
                  << static_cast<uint32_t>(c) << ' ';
 
    // using standard (locale-independent) codecvt facet
    std::wstring_convert<
        deletable_facet<std::codecvt<char16_t, char, std::mbstate_t>>, char16_t> conv16;
    std::u16string str16 = conv16.from_bytes(data);
 
    std::cout << "\n\nThe UTF-8 file contains the following UTF-16 code units:\n"
              << std::hex;
    for (char16_t c : str16)
        std::cout << "U+" << std::setw(4) << std::setfill('0')
                  << static_cast<uint16_t>(c) << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3767 | C++20 | std::codecvt<char16_t, char8_t, std::mbstate_t> andstd::codecvt<char32_t, char8_t, std::mbstate_t> are locale-independent | deprecated them |

## See also
- [mbrtoc16](/cpp/string/multibyte/mbrtoc16/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbrtoc32](/cpp/string/multibyte/mbrtoc32/)
- [c32rtomb](/cpp/string/multibyte/c32rtomb/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [use_facet](/cpp/locale/use_facet/)
- [locale](/cpp/locale/locale/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt_base](/cpp/locale/codecvt_base/)
- [codecvt_byname](/cpp/locale/codecvt_byname/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf16](/cpp/locale/codecvt_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
