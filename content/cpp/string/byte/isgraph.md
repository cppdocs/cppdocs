---
title: "std::isgraph"
source_path: "cpp/string/byte/isgraph"
header: "<cctype>"
category: "string"
---

Checks if the given character is graphic (has a graphical representation) as classified by the currently installed C locale. In the default C locale, the following characters are graphic:

## Declarations
```cpp
int isgraph( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character has a graphical representation character, zero otherwise.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::isgraph is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <clocale>
#include <iostream>
 
int main()
{
    unsigned char c = '\xb6'; // the character ¶ in ISO-8859-1
 
    std::cout << "isgraph(\'\\xb6\', default C locale) returned "
              << std::boolalpha << (std::isgraph(c) != 0) << '\n';
 
    std::setlocale(LC_ALL, "en_GB.iso88591");
    std::cout << "isgraph(\'\\xb6\', ISO-8859-1 locale) returned "
              << std::boolalpha << (std::isgraph(c) != 0) << '\n';
}
```

## See also
- [isgraph(std::locale)](/cpp/locale/isgraph/)
- [iswgraph](/cpp/string/wide/iswgraph/)
- [C documentation](/c/string/byte/isgraph/)
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
- [isspace](/cpp/string/byte/isspace/)
- [iswspace](/cpp/string/wide/iswspace/)
- [isblank](/cpp/string/byte/isblank/)
- [iswblank](/cpp/string/wide/iswblank/)
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
