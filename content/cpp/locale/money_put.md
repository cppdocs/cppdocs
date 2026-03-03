---
title: "std::money_put"
source_path: "cpp/locale/money_put"
header: "<locale>"
category: "locale"
---

Class std::money_put encapsulates the rules for formatting monetary values as strings. The standard I/O manipulator [std::put_money](/cpp/io/manip/put_money/) uses the std::money_put facet of the I/O stream's locale.

## Declarations
```cpp
template<
class CharT,
class OutputIt = std::ostreambuf_iterator<CharT>
> class money_put;
```

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <locale>
 
int main()
{
    // using the I/O manipulator
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << "American locale: "
              << std::showbase << std::put_money(12345678.9) << '\n';
 
    // using the facet directly
    std::cout.imbue(std::locale("de_DE.UTF-8"));
    std::cout << "German locale: ";
    auto& f = std::use_facet<std::money_put<char>>(std::cout.getloc());
    f.put({std::cout}, false, std::cout, std::cout.fill(), 12345678.9);
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 427 | C++98 | money_put was guaranteed to accept any CharT thatmeets the requirements for a character on whichany of the iostream components can be instantiated | only guarantees to accept char,wchar_t and other implementation-defined character types |
| LWG 2392 | C++98 | only character type CharT could beguaranteed to be accepted by money_put | can guarantee to accept implementation-defined character container types |

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [money_get](/cpp/locale/money_get/)
- [put_money](/cpp/io/manip/put_money/)
