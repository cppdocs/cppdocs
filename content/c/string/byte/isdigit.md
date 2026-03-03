---
title: "isdigit"
source_path: "c/string/byte/isdigit"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is a numeric character (0123456789).

## Declarations
```cpp
int isdigit( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a numeric character, zero otherwise.

## Notes
isdigit and [isxdigit](/c/string/byte/isxdigit/) are the only standard narrow character classification functions that are not affected by the currently installed C locale, although some implementations (e.g. Microsoft in [1252 codepage](https://en.wikipedia.org/wiki/Windows-1252)) may classify additional single-byte characters as digits.

## Example
```cpp
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
 
int main(void)
{
    for (int ndx = 0; ndx <= UCHAR_MAX; ++ndx)
        if (isdigit(ndx))
            printf("%c", ndx);
    printf("\n");
}
```

## See also
- [iswdigit](/c/string/wide/iswdigit/)
- [C++ documentation](/cpp/string/byte/isdigit/)
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
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
