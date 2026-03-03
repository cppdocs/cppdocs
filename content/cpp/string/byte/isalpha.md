---
title: "std::isalpha"
source_path: "cpp/string/byte/isalpha"
header: "<cctype>"
category: "string"
---

Checks if the given character is an alphabetic character as classified by the currently installed C locale. In the default locale, the following characters are alphabetic:

## Declarations
```cpp
int isalpha( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is an alphabetic character, zero otherwise.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::isalpha is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <clocale>
#include <iostream>
 
int main()
{
    unsigned char c = '\xdf'; // German letter ß in ISO-8859-1
 
    std::cout << "isalpha(\'\\xdf\', default C locale) returned "
              << std::boolalpha << !!std::isalpha(c) << '\n';
 
    std::setlocale(LC_ALL, "de_DE.iso88591");
    std::cout << "isalpha(\'\\xdf\', ISO-8859-1 locale) returned "
              << static_cast<bool>(std::isalpha(c)) << '\n';
 
}
```

## See also
- [isalpha(std::locale)](/cpp/locale/isalpha/)
- [iswalpha](/cpp/string/wide/iswalpha/)
- [C documentation](/c/string/byte/isalpha/)
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
- [iswalpha](/cpp/string/wide/iswalpha/)
- [isupper](/cpp/string/byte/isupper/)
- [iswupper](/cpp/string/wide/iswupper/)
- [islower](/cpp/string/byte/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
