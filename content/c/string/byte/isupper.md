---
title: "isupper"
source_path: "c/string/byte/isupper"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is an uppercase character according to the current C locale. In the default "C" locale, isupper returns true only for the uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ).

## Declarations
```cpp
int isupper( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is an uppercase letter, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\xc6'; // letter Æ in ISO-8859-1
    printf("In the default C locale, \\xc6 is %suppercase\n",
           isupper(c) ? "" : "not " );
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\xc6 is %suppercase\n",
           isupper(c) ? "" : "not " );
}
```

## See also
- [iswupper](/c/string/wide/iswupper/)
- [C++ documentation](/cpp/string/byte/isupper/)
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
- [iswupper](/c/string/wide/iswupper/)
- [islower](/c/string/byte/islower/)
- [iswlower](/c/string/wide/iswlower/)
- [isdigit](/c/string/byte/isdigit/)
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
