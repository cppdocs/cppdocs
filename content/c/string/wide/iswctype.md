---
title: "iswctype"
source_path: "c/string/wide/iswctype"
header: "<wctype.h>"
category: "c"
---

Classifies the wide character wc using the current C locale's [LC_CTYPE](/c/locale/LC_categories/) category identified by desc.

## Declarations
```cpp
int iswctype( wint_t wc, wctype_t desc );
```
_(since C95)_

## Parameters
- `wc`: the wide character to classify
- `desc`: the LC_CTYPE category, obtained from a call to wctype

## Return value
Non-zero if the character wc has the property identified by desc in [LC_CTYPE](/c/locale/LC_categories/) facet of the current C locale, zero otherwise.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
#include <wctype.h>
 
const char* classify(wchar_t wc, const char* cat)
{
    return iswctype(wc, wctype(cat)) ? "true" : "false";
}
 
int main(void)
{
    setlocale(LC_ALL, "ja_JP.UTF-8");
    puts("The character \u6c34 is...");
    const char* cats[] = {"digit", "alpha", "space", "cntrl", "jkanji"};
    for (int n = 0; n < 5; ++n)
        printf("%s?\t%s\n", cats[n], classify(L'\u6c34', cats[n]));
}
```

## See also
- [wctype](/c/string/wide/wctype/)
