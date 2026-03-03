---
title: "iswlower"
source_path: "c/string/wide/iswlower"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is a lowercase letter, i.e. one of abcdefghijklmnopqrstuvwxyz or any lowercase letter specific to the current locale.

## Declarations
```cpp
int iswlower( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is an lowercase letter, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX lower category.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u0444'; // Cyrillic small letter ef ('ф')
    printf("In the default locale, iswlower(%#x) = %d\n", c, !!iswlower(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("In Unicode locale, iswlower(%#x) = %d\n", c, !!iswlower(c));
}
```

## See also
- [islower](/c/string/byte/islower/)
- [C++ documentation](/cpp/string/wide/iswlower/)
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
- [isdigit](/c/string/byte/isdigit/)
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
