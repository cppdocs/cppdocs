---
title: "std::wbuffer_convert"
source_path: "cpp/locale/wbuffer_convert"
header: "<locale>"
category: "locale"
---

std::wbuffer_convert is a wrapper over stream buffer of type [std::basic_streambuf](/cpp/io/basic_streambuf/)<char> which gives it the appearance of [std::basic_streambuf](/cpp/io/basic_streambuf/)<Elem>. All I/O performed through std::wbuffer_convert undergoes character conversion as defined by the facet Codecvt. std::wbuffer_convert assumes ownership of the conversion facet, and cannot use a facet managed by a locale.

## Declarations
```cpp
template<
class Codecvt,
class Elem = wchar_t,
class Tr = std::char_traits<Elem>
> class wbuffer_convert : public std::basic_streambuf<Elem, Tr>
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
- [wstring_convert](/cpp/locale/wstring_convert/)
- [codecvt_utf8](/cpp/locale/codecvt_utf8/)
- [codecvt_utf8_utf16](/cpp/locale/codecvt_utf8_utf16/)
