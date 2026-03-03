---
title: "isgraph"
source_path: "c/string/byte/isgraph"
header: "<ctype.h>"
category: "c"
---

Checks if the given character has a graphical representation, i.e. it is either a number (0123456789), an uppercase letter (ABCDEFGHIJKLMNOPQRSTUVWXYZ), a lowercase letter (abcdefghijklmnopqrstuvwxyz), or a punctuation character (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~), or any graphical character specific to the current C locale.

## Declarations
```cpp
int isgraph( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character has a graphical representation character, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\xb6'; // the character ¶ in ISO-8859-1
    printf("In the default C locale, \\xb6 is %sgraphical\n",
           isgraph(c) ? "" : "not " );
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\xb6 is %sgraphical\n",
           isgraph(c) ? "" : "not " );
}
```

## See also
- [iswgraph](/c/string/wide/iswgraph/)
- [C++ documentation](/cpp/string/byte/isgraph/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
- [isprint](/c/string/byte/isprint/)
- [iswprint](/c/string/wide/iswprint/)
- [isspace](/c/string/byte/isspace/)
- [iswspace](/c/string/wide/iswspace/)
- [isblank](/c/string/byte/isblank/)
- [iswblank](/c/string/wide/iswblank/)
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
