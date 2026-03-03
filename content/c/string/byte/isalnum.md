---
title: "isalnum"
source_path: "c/string/byte/isalnum"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is an alphanumeric character as classified by the current C locale. In the default locale, the following characters are alphanumeric:

## Declarations
```cpp
int isalnum( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is an alphanumeric character, 0 otherwise.

## Example
```cpp
#include <ctype.h>
#include <locale.h>
#include <stdio.h>
 
int main(void)
{
    unsigned char c = '\xdf'; // German letter ß in ISO-8859-1
 
    printf("isalnum('\\xdf') in default C locale returned %d\n", !!isalnum(c));
 
    if (setlocale(LC_CTYPE, "de_DE.iso88591"))
        printf("isalnum('\\xdf') in ISO-8859-1 locale returned %d\n", !!isalnum(c));
}
```

## See also
- [iswalnum](/c/string/wide/iswalnum/)
- [C++ documentation](/cpp/string/byte/isalnum/)
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
