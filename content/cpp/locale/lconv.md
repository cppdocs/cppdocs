---
title: "std::lconv"
source_path: "cpp/locale/lconv"
header: "<clocale>"
category: "locale"
---

The class std::lconv contains numeric and monetary formatting rules as defined by a C locale. Objects of this struct may be obtained with [std::localeconv](/cpp/locale/localeconv/). The members of std::lconv are values of type char and of type char*. Each char* member except decimal_point may be pointing at a null character (that is, at an empty C-string). The members of type char are all non-negative numbers, any of which may be [CHAR_MAX](/cpp/types/climits/) if the corresponding value is not available in the current C locale.

## Declarations
```cpp
struct lconv;
```

## Example
```cpp
#include <clocale>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "ja_JP.UTF-8");
    std::lconv* lc = std::localeconv();
    std::cout << "Japanese currency symbol: " << lc->currency_symbol
              << '(' << lc->int_curr_symbol << ")\n";
}
```

## See also
- [localeconv](/cpp/locale/localeconv/)
- [numpunct](/cpp/locale/numpunct/)
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [std::money_put](/cpp/locale/money_put/)
- [C documentation](/c/locale/lconv/)
