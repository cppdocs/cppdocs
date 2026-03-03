---
title: "towctrans"
source_path: "c/string/wide/towctrans"
header: "<wctype.h>"
category: "c"
---

Maps the wide character wc using the current C locale's [LC_CTYPE](/c/locale/LC_categories/) mapping category identified by desc.

## Declarations
```cpp
wint_t towctrans( wint_t wc, wctrans_t desc );
```
_(since C95)_

## Parameters
- `wc`: the wide character to map
- `desc`: the LC_CTYPE mapping, obtained from a call to wctrans

## Return value
The mapped value of wc using the mapping identified by desc in [LC_CTYPE](/c/locale/LC_categories/) facet of the current C locale.

## Example
```cpp
#include <locale.h>
#include <wctype.h>
#include <wchar.h>
#include <stdio.h>
 
int main(void)
{
    setlocale(LC_ALL, "ja_JP.UTF-8");
    const wchar_t kana[] = L"ヒラガナ";
    size_t sz = sizeof kana / sizeof *kana;
    wchar_t hira[sz];
    for (size_t n = 0; n < sz; ++n)
        hira[n] = towctrans(kana[n], wctrans("tojhira"));
    printf("katakana characters %ls are %ls in hiragana\n", kana, hira);
}
```

## See also
- [wctrans](/c/string/wide/wctrans/)
- [C++ documentation](/cpp/string/wide/towctrans/)
