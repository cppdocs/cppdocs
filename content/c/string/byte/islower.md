---
title: "islower"
source_path: "c/string/byte/islower"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is classified as a lowercase character according to the current C locale. In the default "C" locale, islower returns true only for the lowercase letters (abcdefghijklmnopqrstuvwxyz).

## Declarations
```cpp
int islower( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a lowercase letter, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\xe5'; // letter å in ISO-8859-1
    printf("In the default C locale, \\xe5 is %slowercase\n",
           islower(c) ? "" : "not " );
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\xe5 is %slowercase\n",
           islower(c) ? "" : "not " );
}
```

## See also
- [iswlower](/c/string/wide/iswlower/)
- [C++ documentation](/cpp/string/byte/islower/)
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
- [iswlower](/c/string/wide/iswlower/)
- [isdigit](/c/string/byte/isdigit/)
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
