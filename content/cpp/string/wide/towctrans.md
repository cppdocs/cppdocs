---
title: "std::towctrans"
source_path: "cpp/string/wide/towctrans"
header: "<cwctype>"
category: "string"
---

Maps the wide character ch using the current C locale's [LC_CTYPE](/cpp/locale/lc_categories/) mapping category identified by desc.

## Declarations
```cpp
std::wint_t towctrans( std::wint_t ch, std::wctrans_t desc );
```

## Parameters
- `ch`: the wide character to map
- `desc`: the LC_CTYPE mapping, obtained from a call to std::wctrans

## Return value
The mapped value of ch using the mapping identified by desc in [LC_CTYPE](/cpp/locale/lc_categories/) facet of the current C locale.

## Example
```cpp
#include <algorithm>
#include <clocale>
#include <cwctype>
#include <iostream>
 
std::wstring tohira(std::wstring str)
{
    std::transform(str.begin(), str.end(), str.begin(), [](wchar_t c)
    {
         return std::towctrans(c, std::wctrans("tojhira"));
    });
    return str;
}
 
int main()
{
    std::setlocale(LC_ALL, "ja_JP.UTF-8");
    std::wstring kana = L"ヒラガナ";
    std::wcout << "katakana characters " << kana
               << " are " << tohira(kana) << " in hiragana\n";
}
```

## See also
- [wctrans](/cpp/string/wide/wctrans/)
- [C documentation](/c/string/wide/towctrans/)
