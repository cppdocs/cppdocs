---
title: "std::iswpunct"
source_path: "cpp/string/wide/iswpunct"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character is a punctuation character, i.e. it is one of !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ or any punctuation character specific to the current locale.

## Declarations
```cpp
int iswpunct( std::wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a punctuation character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX punct category.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    wchar_t c = L'\u2051'; // Two asterisks ('⁑')
 
    std::cout << std::hex << std::showbase << std::boolalpha
              << "in the default locale, iswpunct("
              << static_cast<std::wint_t>(c) << ") = "
              << static_cast<bool>(std::iswpunct(c)) << '\n';
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, iswpunct("
              << static_cast<std::wint_t>(c) << ") = "
              << static_cast<bool>(std::iswpunct(c)) << '\n';
}
```

## See also
- [ispunct(std::locale)](/cpp/locale/ispunct/)
- [ispunct](/cpp/string/byte/ispunct/)
- [C documentation](/c/string/wide/iswpunct/)
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
