---
title: "iswdigit"
source_path: "c/string/wide/iswdigit"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character corresponds (if narrowed) to one of the ten decimal digit characters 0123456789.

## Declarations
```cpp
int iswdigit( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a numeric character, zero otherwise.

## Notes
iswdigit and [iswxdigit](/c/string/wide/iswxdigit/) are the only standard wide character classification functions that are not affected by the currently installed C locale.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
void test(wchar_t a3, wchar_t u3, wchar_t j3)
{
    printf("\t '%lc'  '%lc' '%lc'\n", a3, u3, j3);
    printf("iswdigit: %d    %d    %d\n",
           !!iswdigit(a3),
           !!iswdigit(u3),
           !!iswdigit(j3));
    printf("jdigit:   %d    %d    %d\n",
           !!iswctype(a3, wctype("jdigit")),
           !!iswctype(u3, wctype("jdigit")),
           !!iswctype(j3, wctype("jdigit")));
}
 
int main(void)
{
    wchar_t a3 = L'3';  // the ASCII digit 3
    wchar_t u3 = L'三'; // the CJK numeral 3
    wchar_t j3 = L'３'; // the full-width digit 3
 
    setlocale(LC_ALL, "en_US.utf8");
    puts("In American locale:");
    test(a3, u3, j3);
 
    setlocale(LC_ALL, "ja_JP.utf8");
    puts("\nIn Japanese locale:");
    test(a3, u3, j3);
}
```

## See also
- [isdigit](/c/string/byte/isdigit/)
- [C++ documentation](/cpp/string/wide/iswdigit/)
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
- [isdigit](/c/string/byte/isdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
