---
title: "iswcntrl"
source_path: "c/string/wide/iswcntrl"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is a control character, i.e. codes 0x00-0x1F and 0x7F and any control characters specific to the current locale.

## Declarations
```cpp
int iswcntrl( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a control character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) defines POSIX control characters as Unicode characters U+0000..U+001F, U+007F..U+009F, U+2028, and U+2029 (Unicode classes Cc, Zl, and Zp)

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u2028'; // the Unicode character "line separator"
    printf("In the default locale, iswcntrl(%#x) = %d\n", c, !!iswcntrl(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("In Unicode locale, iswcntrl(%#x) = %d\n", c, !!iswcntrl(c));
}
```

## See also
- [iscntrl](/c/string/byte/iscntrl/)
- [C++ documentation](/cpp/string/wide/iswcntrl/)
- [iscntrl](/c/string/byte/iscntrl/)
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
