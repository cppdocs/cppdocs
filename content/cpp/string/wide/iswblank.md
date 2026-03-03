---
title: "std::iswblank"
source_path: "cpp/string/wide/iswblank"
header: "<cwctype>"
category: "string"
since: "C++11"
---

Checks if the given wide character is classified as blank character (that is, a whitespace character used to separate words in a sentence) by the current C locale. In the default C locale, only space (0x20) and horizontal tab (0x09) are blank characters.

## Declarations
```cpp
int iswblank( std::wint_t ch );
```
_(since C++11)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a blank character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) defines POSIX blank characters as Unicode characters U+0009, U+0020, U+1680, U+180E, U+2000..U+2006, U+2008, U+200A, U+205F, and U+3000.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    wchar_t c = L'\u3000'; // Ideographic space ('　')
 
    std::cout << std::hex << std::showbase << std::boolalpha;
    std::cout << "in the default locale, iswblank(" << (std::wint_t)c << ") = "
              << (bool)std::iswblank(c) << '\n';
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, iswblank(" << (std::wint_t)c << ") = "
              << (bool)std::iswblank(c) << '\n';
}
```

## See also
- [isblank(std::locale)](/cpp/locale/isblank/)
- [isblank](/cpp/string/byte/isblank/)
- [C documentation](/c/string/wide/iswblank/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
- [isspace](/cpp/string/byte/isspace/)
- [iswspace](/cpp/string/wide/iswspace/)
- [isblank](/cpp/string/byte/isblank/)
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
