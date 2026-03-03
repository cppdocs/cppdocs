---
title: "std::islower"
source_path: "cpp/string/byte/islower"
header: "<cctype>"
category: "string"
---

Checks if the given character is classified as a lowercase character according to the current C locale. In the default "C" locale, std::islower returns a nonzero value only for the lowercase letters (abcdefghijklmnopqrstuvwxyz).

## Declarations
```cpp
int islower( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a lowercase letter, zero otherwise.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::islower is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <clocale>
#include <iostream>
 
int main()
{
    unsigned char c = '\xe5'; // letter å in ISO-8859-1
 
    std::cout << "islower(\'\\xe5\', default C locale) returned "
              << std::boolalpha << (bool)std::islower(c) << '\n';
 
    std::setlocale(LC_ALL, "en_GB.iso88591");
    std::cout << "islower(\'\\xe5\', ISO-8859-1 locale) returned "
              << std::boolalpha << (bool)std::islower(c) << '\n';
 
}
```

## See also
- [islower(std::locale)](/cpp/locale/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
- [C documentation](/c/string/byte/islower/)
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
- [iswlower](/cpp/string/wide/iswlower/)
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
