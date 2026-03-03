---
title: "std::moneypunct<CharT,International>::positive_sign, do_positive_sign, negative_sign, do_negative_sign"
source_path: "cpp/locale/moneypunct/positive_sign"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_positive_sign of the most derived class.

## Declarations
```cpp
public:
string_type positive_sign() const;
```

```cpp
public:
string_type negative_sign() const;
```

```cpp
protected:
virtual string_type do_positive_sign() const;
```

```cpp
protected:
virtual string_type do_negative_sign() const;
```

## Return value
The string of type string_type holding the characters to be used as positive or negative sign.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
struct my_punct : std::moneypunct_byname<char, false>
{
    my_punct(const char* name) : moneypunct_byname(name) {}
    string_type do_negative_sign() const { return "()"; }
};
 
int main()
{
    std::locale loc("de_DE.utf8");
    std::cout.imbue(loc);
    std::cout << loc.name() << " negative sign is '"
              << std::use_facet<std::moneypunct<char>>(loc).negative_sign()
              << "' for example: " << std::showbase << std::put_money(-1234) << '\n';
 
    std::locale loc2("ms_MY.utf8");
    std::cout.imbue(loc2);
    std::cout << loc2.name() << " negative sign is '"
              << std::use_facet<std::moneypunct<char>>(loc2).negative_sign()
              << "' for example: " << std::put_money(-1234) << '\n';
 
    std::cout.imbue(std::locale(std::cout.getloc(), new my_punct("de_DE.utf8")));
    std::cout << "de_DE.utf8 with negative_sign set to \"()\": "
              << std::put_money(-1234) << '\n';
}
```

## See also
- [do_pos_formatdo_neg_format](/cpp/locale/moneypunct/pos_format/)
