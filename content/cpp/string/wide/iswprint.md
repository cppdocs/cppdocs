---
title: "std::iswprint"
source_path: "cpp/string/wide/iswprint"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character can be printed, i.e. it is either a number (0123456789), an uppercase letter (ABCDEFGHIJKLMNOPQRSTUVWXYZ), a lowercase letter (abcdefghijklmnopqrstuvwxyz), a punctuation character (!"#$%&'()*+,-./:;<=>?@[\]^_`{!}~), space or any printable character specific to the current C locale.

## Declarations
```cpp
int iswprint( std::wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character can be printed, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX print category.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
void demo_iswprint(std::string_view rem, const std::wint_t c)
{
    std::cout << std::boolalpha << std::hex << std::showbase
              << rem << "iswprint('" << c << "') = "
              << !!std::iswprint(c) << '\n';
}
 
int main()
{
    const wchar_t c1 = L'\u2002'; // en-space
    const wchar_t c2 = L'\u0082'; // break permitted
 
    demo_iswprint("In default locale:\n", c1);
 
    std::setlocale(LC_ALL, "en_US.utf8");
    demo_iswprint("In Unicode locale:\n", c1);
    demo_iswprint("", c2);
}
```

## See also
- [isprint(std::locale)](/cpp/locale/isprint/)
- [isprint](/cpp/string/byte/isprint/)
- [C documentation](/c/string/wide/iswprint/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
- [isprint](/cpp/string/byte/isprint/)
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
