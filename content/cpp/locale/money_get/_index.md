---
title: "std::money_get"
source_path: "cpp/locale/money_get"
header: "<locale>"
category: "locale"
---

Class template std::money_get encapsulates the rules for parsing monetary values from character streams. The standard I/O manipulator [std::get_money](/cpp/io/manip/get_money/) uses the std::money_get facet of the I/O stream's locale.

## Declarations
```cpp
template<
class CharT,
class InputIt = std::istreambuf_iterator<CharT>
> class money_get;
```

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <locale>
#include <sstream>
 
int main()
{
    std::string str = "$1.11 $2.22 $3.33";
    std::cout << std::fixed << std::setprecision(2);
 
    std::cout << '\"' << str << "\" parsed with the I/O manipulator: ";
    std::istringstream s1(str);
    s1.imbue(std::locale("en_US.UTF-8"));
 
    long double val;
    while (s1 >> std::get_money(val))
        std::cout << val / 100 << ' ';
    std::cout << '\n';
 
    str = "USD  1,234.56";
    std::cout << '\"' << str << "\" parsed with the facet directly: ";
    std::istringstream s2(str);
    s2.imbue(std::locale("en_US.UTF-8"));
 
    auto& f = std::use_facet<std::money_get<char>>(s2.getloc());
    std::ios_base::iostate err;
    std::istreambuf_iterator<char> beg(s2), end;
    f.get(beg, end, true, s2, err, val);
 
    std::cout << val / 100 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 427 | C++98 | money_get was guaranteed to accept any CharT thatmeets the requirements for a character on whichany of the iostream components can be instantiated | only guarantees to accept char,wchar_t and other implementation-defined character types |
| LWG 2392 | C++98 | only character type CharT could beguaranteed to be accepted by money_get | can guarantee to accept implementation-defined character container types |

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_put](/cpp/locale/money_put/)
- [money_put](/cpp/locale/money_put/)
- [get_money](/cpp/io/manip/get_money/)
