---
title: "std::numpunct_byname"
source_path: "cpp/locale/numpunct_byname"
header: "<locale>"
category: "locale"
---

std::numpunct_byname is a [std::numpunct](/cpp/locale/numpunct/) facet which encapsulates numeric punctuation preferences of a locale specified at its construction.

## Declarations
```cpp
template< class CharT >
class numpunct_byname : public std::numpunct<CharT>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const double number = 1000.25;
    std::wcout << L"default locale: " << number << L'\n';
    std::wcout.imbue(std::locale(std::wcout.getloc(),
                                 new std::numpunct_byname<wchar_t>("ru_RU.UTF8")));
    std::wcout << L"default locale with russian numpunct: " << number << L'\n';
}
```

## See also
- [numpunct](/cpp/locale/numpunct/)
