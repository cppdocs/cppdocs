---
title: "std::wstring_convert"
source_path: "cpp/locale/wstring_convert"
header: "<locale>"
category: "locale"
---

Class template std::wstring_convert performs conversions between byte string [std::string](/cpp/string/basic_string/) and wide string [std::basic_string](/cpp/string/basic_string/)<Elem>, using an individual code conversion facet Codecvt. std::wstring_convert assumes ownership of the conversion facet, and cannot use a facet managed by a locale.

## Declarations
```cpp
template<
class Codecvt,
class Elem = wchar_t,
class Wide_alloc = std::allocator<Elem>,
class Byte_alloc = std::allocator<char>
> class wstring_convert;
```
_(since C++11) (deprecated in C++17) (removed in C++26)_

## See also
- [mbrtoc16](/cpp/string/multibyte/mbrtoc16/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [codecvt](/cpp/locale/codecvt/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
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
- [wbuffer_convert](/cpp/locale/wbuffer_convert/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
