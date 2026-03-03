---
title: "std::time_get<CharT,InputIt>::date_order, std::time_get<CharT,InputIt>::do_date_order"
source_path: "cpp/locale/time_get/date_order"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_date_order of the most derived class.

## Declarations
```cpp
public:
dateorder date_order() const;
```

```cpp
protected:
virtual dateorder do_date_order() const;
```

## Return value
A value of type dateorder.

## Notes
This function is optional, it may return no_order in every case.

## Example
```cpp
#include <iostream>
#include <locale>
 
void show_date_order()
{
    std::time_base::dateorder d = std::use_facet<std::time_get<char>>(
                                      std::locale()
                                  ).date_order();
    switch (d)
    {
        case std::time_base::no_order:
            std::cout << "no_order\n";
            break;
        case std::time_base::dmy:
            std::cout << "day, month, year\n";
            break;
        case std::time_base::mdy:
            std::cout << "month, day, year\n";
            break;
        case std::time_base::ymd:
            std::cout << "year, month, day\n";
            break;
        case std::time_base::ydm:
            std::cout << "year, day, month\n";
            break;
    }
}
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::cout << "In U.S. locale, the default date order is: ";
    show_date_order();
 
    std::locale::global(std::locale("ja_JP.utf8"));
    std::cout << "In Japanese locale, the default date order is: ";
    show_date_order();
 
    std::locale::global(std::locale("de_DE.utf8"));
    std::cout << "In German locale, the default date order is: ";
    show_date_order();
}
```

## See also
- [do_get_date](/cpp/locale/time_get/get_date/)
- [time_base](/cpp/locale/time_base/)
