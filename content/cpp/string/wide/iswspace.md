---
title: "std::iswspace"
source_path: "cpp/string/wide/iswspace"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character is a wide whitespace character as classified by the currently installed C locale. In the default locale, the whitespace characters are the following:

## Declarations
```cpp
int iswspace( wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a whitespace character, zero otherwise.

## Notes
ISO 30112 defines POSIX space characters as Unicode characters U+0009..U+000D, U+0020, U+1680, U+180E, U+2000..U+2006, U+2008..U+200A, U+2028, U+2029, U+205F, and U+3000.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
void try_with(wchar_t c, const char* loc)
{
    std::setlocale(LC_ALL, loc);
    std::wcout << "isspace('" << c << "') in " << loc << " locale returned "
               << std::boolalpha << static_cast<bool>(std::iswspace(c)) << '\n';
}
 
int main()
{
    const wchar_t EM_SPACE = L'\u2003'; // Unicode character 'EM SPACE'
    try_with(EM_SPACE, "C");
    try_with(EM_SPACE, "en_US.UTF8");
}
```

## See also
- [isspace(std::locale)](/cpp/locale/isspace/)
- [isspace](/cpp/string/byte/isspace/)
- [C documentation](/c/string/wide/iswspace/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
- [isspace](/cpp/string/byte/isspace/)
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
