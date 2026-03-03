---
title: "iswalnum"
source_path: "c/string/wide/iswalnum"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is an alphanumeric character, i.e. either a number (0123456789), an uppercase letter (ABCDEFGHIJKLMNOPQRSTUVWXYZ), a lowercase letter (abcdefghijklmnopqrstuvwxyz) or any alphanumeric character specific to the current locale.

## Declarations
```cpp
int iswalnum( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is an alphanumeric character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX alnum category.

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u13ad'; // the Cherokee letter HA ('Ꭽ')
    printf("in the default locale, iswalnum(%#x) = %d\n", c, !!iswalnum(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("in Unicode locale, iswalnum(%#x) = %d\n", c, !!iswalnum(c));
}
```

## See also
- [isalnum](/c/string/byte/isalnum/)
- [C++ documentation](/cpp/string/wide/iswalnum/)
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
