---
title: "std::iswdigit"
source_path: "cpp/string/wide/iswdigit"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character corresponds (if narrowed) to one of the ten decimal digit characters 0123456789.

## Declarations
```cpp
int iswdigit( wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a numeric character, zero otherwise.

## Notes
std::iswdigit and [std::iswxdigit](/cpp/string/wide/iswxdigit/) are the only standard wide character classification functions that are not affected by the currently installed C locale.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
void test(wchar_t a3, wchar_t u3, wchar_t j3)
{
    std::wcout << std::boolalpha
               << "\t   '" << a3 << "'   '" << u3 << "'  '" << j3  << "'\n"
               << "iswdigit: "
               << (bool)std::iswdigit(a3) << "  "
               << (bool)std::iswdigit(u3) << " "
               << (bool)std::iswdigit(j3) << '\n'
               << "jdigit:   "
               << (bool)std::iswctype(a3, std::wctype("jdigit")) << ' '
               << (bool)std::iswctype(u3, std::wctype("jdigit")) << ' '
               << (bool)std::iswctype(j3, std::wctype("jdigit")) << '\n';
}
 
int main()
{
    wchar_t a3 = L'3';  // the ASCII digit 3
    wchar_t u3 = L'三'; // the CJK numeral 3
    wchar_t j3 = L'３'; // the full-width digit 3
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout << "In American locale:\n";
    test(a3, u3, j3);
 
    std::wcout << "\nIn Japanese locale:\n";
    std::setlocale(LC_ALL, "ja_JP.utf8");
    test(a3, u3, j3);
}
```

## See also
- [isdigit(std::locale)](/cpp/locale/isdigit/)
- [isdigit](/cpp/string/byte/isdigit/)
- [C documentation](/c/string/wide/iswdigit/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
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
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
