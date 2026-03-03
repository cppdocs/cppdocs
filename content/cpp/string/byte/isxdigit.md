---
title: "std::isxdigit"
source_path: "cpp/string/byte/isxdigit"
header: "<cctype>"
category: "string"
---

Checks if the given character is a hexadecimal numeric character (0123456789ABCDEFabcdef).

## Declarations
```cpp
int isxdigit( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a hexadecimal numeric character, zero otherwise.

## Notes
std::isdigit and std::isxdigit are the only standard narrow character classification functions that are not affected by the currently installed C locale. although some implementations (e.g. Microsoft in 1252 codepage) may classify additional single-byte characters as digits.

Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::isxdigit is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <climits>
#include <iostream>
 
int main()
{
    for (int c = 0; UCHAR_MAX >= c; ++c)
        if (isxdigit(c))
            std::cout << static_cast<char>(c);
    std::cout << '\n';
}
```

## See also
- [isxdigit(std::locale)](/cpp/locale/isxdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
- [C documentation](/c/string/byte/isxdigit/)
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
- [iswdigit](/cpp/string/wide/iswdigit/)
- [iswxdigit](/cpp/string/wide/iswxdigit/)
