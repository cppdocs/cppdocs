---
title: "iswspace"
source_path: "c/string/wide/iswspace"
header: "<wctype.h>"
category: "c"
---

Checks if the given wide character is a whitespace character, i.e. either space (0x20), form feed (0x0c), line feed (0x0a), carriage return (0x0d), horizontal tab (0x09), vertical tab (0x0b) or any whitespace character specific to the current locale.

## Declarations
```cpp
int iswspace( wint_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character

## Return value
Non-zero value if the wide character is a whitespace character, zero otherwise.

## Notes
[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) defines POSIX space characters as Unicode characters U+0009..U+000D, U+0020, U+1680, U+180E, U+2000..U+2006, U+2008..U+200A, U+2028, U+2029, U+205F, and U+3000.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t c = L'\u2003'; // Unicode character 'EM SPACE'
    printf("In the default locale, iswspace(%#x) = %d\n", c, !!iswspace(c));
    setlocale(LC_ALL, "en_US.utf8");
    printf("In Unicode locale, iswspace(%#x) = %d\n", c, !!iswspace(c));
}
```

## See also
- [isspace](/c/string/byte/isspace/)
- [C++ documentation](/cpp/string/wide/iswspace/)
- [iscntrl](/c/string/byte/iscntrl/)
- [iswcntrl](/c/string/wide/iswcntrl/)
- [isprint](/c/string/byte/isprint/)
- [iswprint](/c/string/wide/iswprint/)
- [isspace](/c/string/byte/isspace/)
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
