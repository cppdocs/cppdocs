---
title: "iswpunct"
source_path: "c/string/wide/iswpunct"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is a punctuation character, i.e. it is one of !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ or any punctuation character specific to the current locale.

## Declarations
```cpp
int iswpunct( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a punctuation character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which Unicode characters are include in POSIX punct category.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
#include <locale.h>
 
int main(void)
{
    const wchar_t c = L'\u2051'; // Two asterisks ('⁑')
    printf("in the default locale, iswpunct(%#x) = %d\n", c, !!iswpunct(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("in Unicode locale, iswpunct(%#x) = %d\n", c, !!iswpunct(c));
}
```

## See also
- [ispunct](/c/string/byte/ispunct/)
- [C++ documentation](/cpp/string/wide/iswpunct/)
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
