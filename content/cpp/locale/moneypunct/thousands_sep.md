---
title: "std::moneypunct<CharT,International>::thousands_sep, do_thousands_sep"
source_path: "cpp/locale/moneypunct/thousands_sep"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_thousands_sep of the most derived class.

## Declarations
```cpp
public:
char_type thousands_sep() const;
```

```cpp
protected:
virtual char_type do_thousands_sep() const;
```

## Return value
The object of type char_type to use as the thousands separator. In common U.S. locales, this is ',' or L','.

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
- [do_grouping](/cpp/locale/moneypunct/grouping/)
