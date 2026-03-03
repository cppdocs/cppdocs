---
title: "iscntrl"
source_path: "c/string/byte/iscntrl"
header: "<ctype.h>"
category: "c"
---

Checks if the given character is a control character, i.e. codes 0x00-0x1F and 0x7F.

## Declarations
```cpp
int iscntrl( int ch );
```

## Parameters
- `ch`: character to classify

## Return value
Non-zero value if the character is a control character, zero otherwise.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
 
int main(void)
{
    unsigned char c = '\x94'; // the control code CCH in ISO-8859-1
    printf("In the default C locale, \\x94 is %sa control character\n",
           iscntrl(c) ? "" : "not " );
    setlocale(LC_ALL, "en_GB.iso88591");
    printf("In ISO-8859-1 locale, \\x94 is %sa control character\n",
           iscntrl(c) ? "" : "not " );
}
```

## See also
- [iswcntrl](/c/string/wide/iswcntrl/)
- [C++ documentation](/cpp/string/byte/iscntrl/)
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
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
