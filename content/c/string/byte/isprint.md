---
title: "isprint"
source_path: "c/string/byte/isprint"
header: "<ctype.h>"
category: "c"
---

Checks if the given character can be printed, i.e. it is either a number (0123456789), an uppercase letter (ABCDEFGHIJKLMNOPQRSTUVWXYZ), a lowercase letter (abcdefghijklmnopqrstuvwxyz), a punctuation character(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~), or space, or any character classified as printable by the current C locale.

## Declarations
```cpp
int isprint( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character can be printed, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\xa0'; // the non-breaking space in ISO-8859-1
    printf("In the default C locale, \\xa0 is %sprintable\n", isprint(c)?"":"not ");
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\xa0 is %sprintable\n", isprint(c)?"":"not ");
}
```

## See also
- [iswprint](/c/string/wide/iswprint/)
- [C++ documentation](/cpp/string/byte/isprint/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
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
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
