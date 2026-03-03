---
title: "towlower"
source_path: "c/string/wide/towlower"
header: "<wctype.h>"
category: "c"
---

Converts the given wide character to lowercase, if possible.

## Declarations
```cpp
wint_t towlower( wint_t wc );
```
_(since C95)_

## Parameters
- `wc`: wide character to be converted

## Return value
Lowercase version of wc or unmodified wc if no lowercase version is listed in the current C locale.

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the Greek uppercase letter 'Σ' has two lowercase forms, depending on the position in a word: 'σ' and 'ς'. A call to towlower cannot be used to obtain the correct lowercase form in this case.

[ISO 30112](http://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which pairs of Unicode characters are included in this mapping.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
int main(void)
{
    wchar_t wc = L'\u0190'; // Latin capital open E ('Ɛ')
    printf("in the default locale, towlower(%#x) = %#x\n", wc, towlower(wc));
    setlocale(LC_ALL, "en_US.utf8");
    printf("in Unicode locale, towlower(%#x) = %#x\n", wc, towlower(wc));
}
```

## See also
- [towupper](/c/string/wide/towupper/)
- [tolower](/c/string/byte/tolower/)
- [C++ documentation](/cpp/string/wide/towlower/)
