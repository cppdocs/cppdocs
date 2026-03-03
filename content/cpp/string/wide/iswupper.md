---
title: "std::iswupper"
source_path: "cpp/string/wide/iswupper"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character is an uppercase letter, i.e. one of ABCDEFGHIJKLMNOPQRSTUVWXYZ or any uppercase letter specific to the current locale.

## Declarations
```cpp
int iswupper( std::wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is an uppercase letter, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX upper category.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    const wchar_t c = L'\u053d'; // Armenian capital letter xeh ('Խ')
 
    std::cout << std::hex << std::showbase << std::boolalpha;
    std::cout << "in the default locale, iswupper("
              << static_cast<std::wint_t>(c) << ") = "
              << static_cast<bool>(std::iswupper(c)) << '\n';
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, iswupper("
              << static_cast<std::wint_t>(c) << ") = "
              << static_cast<bool>(std::iswupper(c)) << '\n';
}
```

## See also
- [isupper(std::locale)](/cpp/locale/isupper/)
- [isupper](/cpp/string/byte/isupper/)
- [C documentation](/c/string/wide/iswupper/)
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
- [islower](/cpp/string/byte/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
