---
title: "std::moneypunct<CharT,International>::pos_format, do_pos_format, neg_format, do_neg_format"
source_path: "cpp/locale/moneypunct/pos_format"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_pos_format of the most derived class.

## Declarations
```cpp
public:
pattern pos_format() const;
```

```cpp
public:
pattern neg_format() const;
```

```cpp
protected:
virtual pattern do_pos_format() const;
```

```cpp
protected:
virtual pattern do_neg_format() const;
```

## Return value
The object of type [std::money_base::format](/cpp/locale/money_base/) describing the formatting used by this locale.

## Notes
While [std::money_put](/cpp/locale/money_put/) uses pos_format for formatting positive values and neg_format for formatting negative values, [std::money_get](/cpp/locale/money_get/) uses neg_format for parsing all monetary values: it assumes that neg_format is compatible with pos_format.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
struct my_punct : std::moneypunct_byname<char, false>
{
    my_punct(const char* name) : moneypunct_byname(name) {}
    pattern do_pos_format() const { return {value, space, symbol, sign}; }
    pattern do_neg_format() const { return {value, space, symbol, sign}; }
};
 
int main()
{
    std::cout.imbue(std::locale("en_US.utf8"));
    std::cout << "american locale: " << std::showbase
              << std::put_money(12345678.0) << '\n';
 
    std::cout.imbue(std::locale(std::cout.getloc(), new my_punct("en_US.utf8")));
    std::cout << "locale with modified moneypunct:\n"
              << std::put_money(12345678.0) << '\n'
              << std::put_money(-12345678.0) << '\n';
}
```

## See also
- [do_curr_symbol](/cpp/locale/moneypunct/curr_symbol/)
- [do_positive_signdo_negative_sign](/cpp/locale/moneypunct/positive_sign/)
- [do_get](/cpp/locale/money_get/get/)
- [do_put](/cpp/locale/money_put/put/)
