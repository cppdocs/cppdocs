---
title: "std::iswxdigit"
source_path: "cpp/string/wide/iswxdigit"
header: "<cwctype>"
category: "string"
---

Checks if the given wide character corresponds (if narrowed) to a hexadecimal numeric character, i.e. one of 0123456789abcdefABCDEF.

## Declarations
```cpp
int iswxdigit( wint_t ch );
```

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a hexadecimal numeric character, zero otherwise.

## Notes
[std::iswdigit](/cpp/string/wide/iswdigit/) and std::iswxdigit are the only standard wide character classification functions that are not affected by the currently installed C locale.

## Example
```cpp
#include <cwctype>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha
              << (std::iswxdigit(L'a') != 0) << ' '
              << (std::iswxdigit(L'ä') != 0) << '\n';
}
```

## See also
- [isxdigit(std::locale)](/cpp/locale/isxdigit/)
- [isxdigit](/cpp/string/byte/isxdigit/)
- [C documentation](/c/string/wide/iswxdigit/)
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
- [isxdigit](/cpp/string/byte/isxdigit/)
