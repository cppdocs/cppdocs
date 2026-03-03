---
title: "iswupper"
source_path: "c/string/wide/iswupper"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is an uppercase letter, i.e. one of ABCDEFGHIJKLMNOPQRSTUVWXYZ or any uppercase letter specific to the current locale.

## Declarations
```cpp
int iswupper( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is an uppercase letter, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX upper category.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u053d'; // Armenian capital letter xeh ('Խ')
    printf("In the default locale, iswupper(%#x) = %d\n", c, !!iswupper(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("In Unicode locale, iswupper(%#x) = %d\n", c, !!iswupper(c));
}
```

## See also
- [isupper](/c/string/byte/isupper/)
- [C++ documentation](/cpp/string/wide/iswupper/)
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
- [islower](/c/string/byte/islower/)
- [iswlower](/c/string/wide/iswlower/)
- [isdigit](/c/string/byte/isdigit/)
- [iswdigit](/c/string/wide/iswdigit/)
- [isxdigit](/c/string/byte/isxdigit/)
- [iswxdigit](/c/string/wide/iswxdigit/)
