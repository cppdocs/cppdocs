---
title: "std::moneypunct_byname"
source_path: "cpp/locale/moneypunct_byname"
header: "<locale>"
category: "locale"
---

std::moneypunct_byname is a [std::moneypunct](/cpp/locale/moneypunct/) facet which encapsulates monetary formatting preferences of a locale specified at its construction.

## Declarations
```cpp
template< class CharT, bool Intl = false >
class moneypunct_byname : public std::moneypunct<CharT, Intl>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
int main()
{
    long double mon = 1234567;
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
    std::wcout << L"american locale: " << std::showbase
               << std::put_money(mon) << '\n';
    std::wcout.imbue(std::locale(std::wcout.getloc(),
                                 new std::moneypunct_byname<wchar_t>("ru_RU.utf8")));
    std::wcout << L"american locale with russian moneypunct: "
               << std::put_money(mon) << '\n';
}
```

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [std::money_put](/cpp/locale/money_put/)
