---
title: "ispunct"
source_path: "c/string/byte/ispunct"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is a punctuation character in the current C locale. The default C locale classifies the characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ as punctuation.

## Declarations
```cpp
int ispunct( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a punctuation character, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\xd7'; // the character × (multiplication sign) in ISO-8859-1
    printf("In the default C locale, \\xd7 is %spunctuation\n",
           ispunct(c) ? "" : "not " );
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\xd7 is %spunctuation\n",
           ispunct(c) ? "" : "not " );
}
```

## See also
- [iswpunct](/c/string/wide/iswpunct/)
- [C++ documentation](/cpp/string/byte/ispunct/)
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
