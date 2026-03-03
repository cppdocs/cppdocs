---
title: "iswblank"
source_path: "c/string/wide/iswblank"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is classified as blank character (that is, a whitespace character used to separate words in a sentence) by the current C locale. In the default C locale, only space (0x20) and horizontal tab (0x09) are blank characters.

## Declarations
```cpp
int iswblank( wint_t ch );
```
_(since C99)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a blank character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) defines POSIX blank characters as Unicode characters U+0009, U+0020, U+1680, U+180E, U+2000..U+2006, U+2008, U+200A, U+205F, and U+3000.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u3000'; // Ideographic space ('　')
    printf("In the default locale, iswblank(%#x) = %d\n", c, !!iswblank(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("In Unicode locale, iswblank(%#x) = %d\n", c, !!iswblank(c));
}
```

## See also
- [isblank](/c/string/byte/isblank/)
- [C++ documentation](/cpp/string/wide/iswblank/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
- [isprint](/c/string/byte/isprint/)
- [iswprint](/c/string/wide/iswprint/)
- [isspace](/c/string/byte/isspace/)
- [iswspace](/c/string/wide/iswspace/)
- [isblank](/c/string/byte/isblank/)
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
