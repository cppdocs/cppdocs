---
title: "std::moneypunct<CharT,International>::curr_symbol, do_curr_symbol"
source_path: "cpp/locale/moneypunct/curr_symbol"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_curr_symbol of the most derived class.

## Declarations
```cpp
public:
string_type curr_symbol() const;
```

```cpp
protected:
virtual string_type do_curr_symbol() const;
```

## Return value
The object of type string_type holding the currency symbol or code.

## Example
```cpp
#include <iostream>
#include <locale>
 
void show_ccy(const char* locname)
{
    std::locale loc(locname);
    std::cout << locname << " currency symbol is "
              << std::use_facet<std::moneypunct<char, true>>(loc).curr_symbol()
              << "or " << std::use_facet<std::moneypunct<char>>(loc).curr_symbol()
              << " for short\n";
}
 
int main()
{
    show_ccy("en_US.utf8");
    show_ccy("ja_JP.utf8");
    show_ccy("sv_SE.utf8");
    show_ccy("ru_RU.utf8");
    show_ccy("vi_VN.utf8");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 666 | C++98 | the length of the identifier string was required to be 4 if International is true | not required |

## See also
- [do_pos_formatdo_neg_format](/cpp/locale/moneypunct/pos_format/)
