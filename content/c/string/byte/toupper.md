---
title: "toupper"
source_path: "c/string/byte/toupper"
header: "<ctype.h>"
category: "c"
---

Converts the given character to uppercase according to the character conversion rules defined by the currently installed C locale.

## Declarations
```cpp
int toupper( int ch );
```

## Parameters
- `ch`: character to be converted. If the value of ch is not representable as unsigned char and does not equal EOF, the behavior is undefined.

## Return value
Uppercase version of ch or unmodified ch if no uppercase version is listed in the current C locale.

## Example
```cpp
#include <ctype.h>
#include <limits.h>
#include <locale.h>
#include <stdio.h>
 
int main(void)
{
    // in the default locale:
    for (unsigned char l = 0, u; l != UCHAR_MAX; ++l)
        if ((u = toupper(l)) != l)
            printf("%c%c ", l, u);
    printf("\n\n");
 
    unsigned char c = '\xb8'; // the character ž in ISO-8859-15
                              // but ¸ (cedilla) in ISO-8859-1
    setlocale(LC_ALL, "en_US.iso88591");
    printf("in iso8859-1, toupper('0x%x') gives 0x%x\n", c, toupper(c));
    setlocale(LC_ALL, "en_US.iso885915");
    printf("in iso8859-15, toupper('0x%x') gives 0x%x\n", c, toupper(c));
}
```

## See also
- [tolower](/c/string/byte/tolower/)
- [towupper](/c/string/wide/towupper/)
- [C++ documentation](/cpp/string/byte/toupper/)
