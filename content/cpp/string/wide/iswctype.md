---
title: "std::iswctype"
source_path: "cpp/string/wide/iswctype"
header: "<cwctype>"
category: "string"
---

Classifies the wide character wc using the current C locale's [LC_CTYPE](/cpp/locale/lc_categories/) category identified by desc.

## Declarations
```cpp
int iswctype( std::wint_t wc, std::wctype_t desc );
```

## Parameters
- `wc`: the wide character to classify
- `desc`: the LC_CTYPE category, obtained from a call to std::wctype

## Return value
Non-zero if the character wc has the property identified by desc in [LC_CTYPE](/cpp/locale/lc_categories/) facet of the current C locale, zero otherwise.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
bool classify(wchar_t wc, const std::string& cat)
{
    return std::iswctype(wc, std::wctype(cat.c_str()));
}
 
int main()
{
    std::setlocale(LC_ALL, "ja_JP.UTF-8");
    std::cout << "The character \u6c34 is...\n";
    for (std::string s : {"digit", "alpha", "space", "cntrl", "jkanji"})
        std::cout << s << "? " << std::boolalpha << classify(L'\u6c34', s) << '\n';
}
```

## See also
- [wctype](/cpp/string/wide/wctype/)
- [C documentation](/c/string/wide/iswctype/)
