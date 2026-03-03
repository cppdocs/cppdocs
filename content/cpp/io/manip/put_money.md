---
title: "std::put_money"
source_path: "cpp/io/manip/put_money"
header: "<iomanip>"
category: "io"
since: "C++11"
---

When used in an expression out << put_money(mon, intl), converts the monetary value mon to its character representation as specified by the [std::money_put](/cpp/locale/money_put/) facet of the locale currently imbued in out.

## Declarations
```cpp
template< class MoneyT >
/*unspecified*/ put_money( const MoneyT& mon, bool intl = false );
```
_(since C++11)_

## Parameters
- `mon`: a monetary value, either long double or std::basic_string
- `intl`: use international currency strings if true, use currency symbols otherwise

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
 
int main()
{
    long double mon = 123.45; // or std::string mon = "123.45";
 
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::showbase
              << "en_US: " << std::put_money(mon)
              << " or " << std::put_money(mon, true) << '\n';
 
    std::cout.imbue(std::locale("ru_RU.UTF-8"));
    std::cout << "ru_RU: " << std::put_money(mon)
              << " or " << std::put_money(mon, true) << '\n';
 
    std::cout.imbue(std::locale("ja_JP.UTF-8"));
    std::cout << "ja_JP: " << std::put_money(mon)
              << " or " << std::put_money(mon, true) << '\n';
}
```

## See also
- [money_put](/cpp/locale/money_put/)
- [get_money](/cpp/io/manip/get_money/)
