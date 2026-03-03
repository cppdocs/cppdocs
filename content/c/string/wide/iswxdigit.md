---
title: "iswxdigit"
source_path: "c/string/wide/iswxdigit"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character corresponds (if narrowed) to a hexadecimal numeric character, i.e. one of 0123456789abcdefABCDEF.

## Declarations
```cpp
int iswxdigit( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a hexadecimal numeric character, zero otherwise.

## Notes
[iswdigit](/c/string/wide/iswdigit/) and iswxdigit are the only standard wide character classification functions that are not affected by the currently installed C locale.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
void test(wchar_t a3, wchar_t u3, wchar_t j3)
{
    printf("\t  '%lc'  '%lc' '%lc'\n", a3, u3, j3);
    printf("iswxdigit: %d    %d    %d\n",
           !!iswxdigit(a3),
           !!iswxdigit(u3),
           !!iswxdigit(j3));
    printf("jdigit:    %d    %d    %d\n",
           !!iswctype(a3, wctype("jdigit")),
           !!iswctype(u3, wctype("jdigit")),
           !!iswctype(j3, wctype("jdigit")));
}
 
int main(void)
{
    wchar_t a3 = L'9';  // the ASCII digit 9
    wchar_t u3 = L'〩'; // the CJK numeral 9
    wchar_t j3 = L'９'; // the full-width digit 9
 
    setlocale(LC_ALL, "en_US.utf8");
    puts("In American locale:");
    test(a3, u3, j3);
 
    setlocale(LC_ALL, "ja_JP.utf8");
    puts("\nIn Japanese locale:");
    test(a3, u3, j3);
}
```

## See also
- [isxdigit](/c/string/byte/isxdigit/)
- [C++ documentation](/cpp/string/wide/iswxdigit/)
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
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
