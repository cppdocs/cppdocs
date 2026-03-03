---
title: "std::iswcntrl"
source_path: "cpp/string/wide/iswcntrl"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character is a control character, i.e. codes 0x00-0x1F and 0x7F and any control characters specific to the current locale.

## Declarations
```cpp
int iswcntrl( std::wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a control character, zero otherwise.

## Notes
ISO 30112 defines POSIX control characters as Unicode characters U+0000..U+001F, U+007F..U+009F, U+2028, and U+2029 (Unicode classes Cc, Zl, and Zp).

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    wchar_t c = L'\u2028'; // the Unicode character "line separator" 
 
    std::cout << std::hex << std::showbase << std::boolalpha;
    std::cout << "in the default locale, iswcntrl(" << (std::wint_t)c << ") = "
              << (bool)std::iswcntrl(c) << '\n';
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, iswcntrl(" << (std::wint_t)c << ") = "
              << (bool)std::iswcntrl(c) << '\n';
}
```

## See also
- [iscntrl(std::locale)](/cpp/locale/iscntrl/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [C documentation](/c/string/wide/iswcntrl/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
- [isspace](/cpp/string/byte/isspace/)
- [iswspace](/cpp/string/wide/iswspace/)
- [isblank](/cpp/string/byte/isblank/)
- [iswblank](/cpp/string/wide/iswblank/)
- [isgraph](/cpp/string/byte/isgraph/)
- [iswgraph](/cpp/string/wide/iswgraph/)
- [ispunct](/cpp/string/byte/ispunct/)
- [iswpunct](/cpp/string/wide/iswpunct/)
- [isalnum](/cpp/string/byte/isalnum/)
- [iswalnum](/cpp/string/wide/iswalnum/)
- [isalpha](/cpp/string/byte/isalpha/)
- [iswalpha](/cpp/string/wide/iswalpha/)
- [isupper](/cpp/string/byte/isupper/)
- [iswupper](/cpp/string/wide/iswupper/)
- [islower](/cpp/string/byte/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
