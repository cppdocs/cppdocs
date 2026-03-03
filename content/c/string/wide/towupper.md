---
title: "towupper"
source_path: "c/string/wide/towupper"
header: "<wctype.h>"
category: "c"
---

Converts the given wide character to uppercase, if possible.

## Declarations
```cpp
wint_t towupper( wint_t wc );
```
_(since C95)_

## Parameters
- `wc`: wide character to be converted

## Return value
Uppercase version of wc or unmodified wc if no uppercase version is listed in the current C locale.

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the uppercase form of 'ß' is (with some exceptions) the two-character string "SS", which cannot be obtained by towupper.

[ISO 30112](http://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which pairs of Unicode characters are included in this mapping.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
#include <locale.h>
 
int main(void)
{
    wchar_t wc =  L'\u017f'; // Latin small letter Long S ('ſ')
    printf("in the default locale, towupper(%#x) = %#x\n", wc, towupper(wc));
    setlocale(LC_ALL, "en_US.utf8");
    printf("in Unicode locale, towupper(%#x) = %#x\n", wc, towupper(wc));
}
```

## See also
- [towlower](/c/string/wide/towlower/)
- [toupper](/c/string/byte/toupper/)
- [C++ documentation](/cpp/string/wide/towupper/)
