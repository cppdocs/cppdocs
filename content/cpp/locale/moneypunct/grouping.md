---
title: "std::moneypunct<CharT,International>::grouping, do_grouping"
source_path: "cpp/locale/moneypunct/grouping"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_grouping of the most derived class.

## Declarations
```cpp
public:
std::string grouping() const;
```

```cpp
protected:
virtual std::string do_grouping() const;
```

## Return value
The object of type [std::string](/cpp/string/basic_string/) holding the groups. The standard specializations of std::moneypunct return an empty string, indicating no grouping. Typical groupings (e.g. the en_US locale) return "\003".

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <locale>
 
struct space_out : std::moneypunct<char>
{
    pattern do_pos_format() const { return {value, none, none, none}; }
    int do_frac_digits() const { return 0; }
    char_type do_thousands_sep() const { return ' '; }
    string_type do_grouping() const { return "\002"; }
};
 
int main()
{
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << "american locale: " << std::showbase
              << std::put_money(12345678.0) << '\n';
 
    std::cout.imbue(std::locale(std::cout.getloc(), new space_out));
    std::cout << "locale with modified moneypunct: "
              << std::put_money(12345678.0) << '\n';
}
```

## See also
- [do_thousands_sep](/cpp/locale/moneypunct/thousands_sep/)
- [do_decimal_point](/cpp/locale/moneypunct/decimal_point/)
