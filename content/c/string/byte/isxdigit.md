---
title: "isxdigit"
source_path: "c/string/byte/isxdigit"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is a hexadecimal numeric character (0123456789abcdefABCDEF) or is classified as a hexadecimal character.

## Declarations
```cpp
int isxdigit( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is an hexadecimal numeric character, zero otherwise.

## Notes
isdigit and isxdigit are the only standard narrow character classification functions that are not affected by the currently installed C locale, although some implementations (e.g. Microsoft in 1252 codepage) may classify additional single-byte characters as digits.

## Example
```cpp
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
 
int main(void)
{
    for (int ndx = 0; UCHAR_MAX >= ndx; ++ndx)
        if (isxdigit(ndx))
            printf("%c", ndx);
    printf("\n");
}
```

## See also
- [iswxdigit](/c/string/wide/iswxdigit/)
- [C++ documentation](/cpp/string/byte/isxdigit/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
- [isprint](/c/string/byte/isprint/)
- [iswprint](/c/string/wide/iswprint/)
- [isspace](/c/string/byte/isspace/)
- [iswspace](/c/string/wide/iswspace/)
- [isblank](/c/string/byte/isblank/)
- [iswblank](/c/string/wide/iswblank/)
- [isgraph](/c/string/byte/isgraph/)
- [iswgraph](/c/string/wide/iswgraph/)
- [ispunct](/c/string/byte/ispunct/)
- [iswpunct](/c/string/wide/iswpunct/)
- [isalnum](/c/string/byte/isalnum/)
- [iswalnum](/c/string/wide/iswalnum/)
- [isalpha](/c/string/byte/isalpha/)
- [iswalpha](/c/string/wide/iswalpha/)
- [isupper](/c/string/byte/isupper/)
- [iswupper](/c/string/wide/iswupper/)
- [islower](/c/string/byte/islower/)
- [iswlower](/c/string/wide/iswlower/)
- [isdigit](/c/string/byte/isdigit/)
- [iswdigit](/c/string/wide/iswdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
