---
title: "iswprint"
source_path: "c/string/wide/iswprint"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character can be printed, i.e. it is either a number (0123456789), an uppercase letter (ABCDEFGHIJKLMNOPQRSTUVWXYZ), a lowercase letter (abcdefghijklmnopqrstuvwxyz), a punctuation character (!"#$%&'()*+,-./:;<=>?@[\]^_`{!}~), space or any printable character specific to the current C locale.

## Declarations
```cpp
int iswprint( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character can be printed, zero otherwise.

## Notes
[ISO 30112](http://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are included in POSIX print category.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u2002'; // Unicode character 'EN SPACE'
    printf("in the default locale, iswprint(%#x) = %d\n", c, !!iswprint(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("in Unicode locale, iswprint(%#x) = %d\n", c, !!iswprint(c));
    wchar_t c2 = L'\x82'; // break permitted
    printf("in Unicode locale, iswprint(%#x) = %d\n", c2, !!iswprint(c2));
}
```

## See also
- [isprint](/c/string/byte/isprint/)
- [C++ documentation](/cpp/string/wide/iswprint/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
- [isprint](/c/string/byte/isprint/)
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
