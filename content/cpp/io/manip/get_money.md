---
title: "std::get_money"
source_path: "cpp/io/manip/get_money"
header: "<iomanip>"
category: "io"
since: "C++11"
---

When used in an expression in >> get_money(mon, intl), parses the character input as a monetary value, as specified by the [std::money_get](/cpp/locale/money_get/) facet of the locale currently imbued in in, and stores the value in mon.

## Declarations
```cpp
template< class MoneyT >
/*unspecified*/ get_money( MoneyT& mon, bool intl = false );
```
_(since C++11)_

## Parameters
- `mon`: variable where monetary value will be written. Can be either long double or std::basic_string
- `intl`: expects to find required international currency strings if true, expects optional currency symbols otherwise

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    std::istringstream in("$1,234.56 2.22 USD  3.33");
    long double v1, v2;
    std::string v3;
 
    in.imbue(std::locale("en_US.UTF-8"));
    in >> std::get_money(v1) >> std::get_money(v2) >> std::get_money(v3, true);
 
    if (in)
        std::cout << std::quoted(in.str()) << " parsed as: "
                  << v1 << ", " << v2 << ", " << v3 << '\n';
    else
        std::cout << "Parse failed";
}
```

## See also
- [money_get](/cpp/locale/money_get/)
- [put_money](/cpp/io/manip/put_money/)
