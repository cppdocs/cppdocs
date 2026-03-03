---
title: "tolower"
source_path: "c/string/byte/tolower"
header: "<ctype.h>"
category: "c"
---

Converts the given character to lowercase according to the character conversion rules defined by the currently installed C locale.

## Declarations
```cpp
int tolower( int ch );
```

## Parameters
- `ch`: character to be converted. If the value of ch is not representable as unsigned char and does not equal EOF, the behavior is undefined.

## Return value
Lowercase version of ch or unmodified ch if no lowercase version is listed in the current C locale.

## Example
```cpp
#include <stdio.h>
#include <ctype.h>
#include <locale.h>
#include <limits.h>
 
int main(void)
{
    /* In the default locale: */
    for (unsigned char u = 0; u < UCHAR_MAX; u++) {
        unsigned char l = tolower(u);
        if (l != u) printf("%c%c ", u, l);
    }
    printf("\n\n");
 
    unsigned char c = '\xb4'; // the character Ž in ISO-8859-15
                              // but ´ (acute accent) in ISO-8859-1
    setlocale(LC_ALL, "en_US.iso88591");
    printf("in iso8859-1, tolower('0x%x') gives 0x%x\n", c, tolower(c));
    setlocale(LC_ALL, "en_US.iso885915");
    printf("in iso8859-15, tolower('0x%x') gives 0x%x\n", c, tolower(c));
}
```

## See also
- [toupper](/c/string/byte/toupper/)
- [towlower](/c/string/wide/towlower/)
- [C++ documentation](/cpp/string/byte/tolower/)
