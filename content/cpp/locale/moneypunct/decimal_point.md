---
title: "std::moneypunct<CharT,International>::decimal_point, do_decimal_point"
source_path: "cpp/locale/moneypunct/decimal_point"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_decimal_point of the most derived class.

## Declarations
```cpp
public:
CharT decimal_point() const;
```

```cpp
protected:
virtual CharT do_decimal_point() const;
```

## Return value
The object of type CharT holding the decimal point character.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
void show_dpt(const char* locname)
{
    std::locale loc(locname);
    std::cout.imbue(loc);
    std::cout << locname << " decimal point is '"
              << std::use_facet<std::moneypunct<char>>(loc).decimal_point()
              << "' for example: " << std::showbase << std::put_money(123);
    if (std::use_facet<std::moneypunct<char>>(loc).frac_digits() == 0)
        std::cout << " (does not use frac digits)";
 
    std::cout << '\n';
}
 
int main()
{
    show_dpt("en_US.utf8");
    show_dpt("ja_JP.utf8");
    show_dpt("sv_SE.utf8");
    show_dpt("de_DE.utf8");
}
```

## See also
- [do_frac_digits](/cpp/locale/moneypunct/frac_digits/)
