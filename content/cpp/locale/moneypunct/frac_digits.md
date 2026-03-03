---
title: "std::moneypunct<CharT,International>::frac_digits, do_frac_digits"
source_path: "cpp/locale/moneypunct/frac_digits"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_frac_digits of the most derived class.

## Declarations
```cpp
public:
int frac_digits() const;
```

```cpp
protected:
virtual int do_frac_digits() const;
```

## Return value
The number of digits to be displayed after the decimal point. In common U.S. locales, this is the value 2.

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
