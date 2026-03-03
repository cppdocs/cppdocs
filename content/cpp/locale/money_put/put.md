---
title: "std::money_put<CharT,OutputIt>::put, do_put"
source_path: "cpp/locale/money_put/put"
header: "<locale>"
category: "locale"
---

Formats monetary value and writes the result to output stream.

## Declarations
```cpp
public:
iter_type put( iter_type out, bool intl, std::ios_base& f,
char_type fill, long double quant ) const;
```

```cpp
iter_type put( iter_type out, bool intl, std::ios_base& f,
char_type fill, const string_type& quant ) const;
```

```cpp
protected:
virtual iter_type do_put( iter_type out, bool intl, std::ios_base& str,
char_type fill, long double units ) const;
```

```cpp
virtual iter_type do_put( iter_type out, bool intl, std::ios_base& str,
char_type fill, const string_type& digits ) const;
```

## Return value
An iterator pointing immediately after the last character produced.

## Notes
The currency units are assumed to be the smallest non-fractional units of the currency: cents in the U.S, yen in Japan.

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
    std::locale loc("ru_RU.utf8");
    std::cout.imbue(loc);
    long double units = -123.45;
    std::cout << "In Russian locale, " << units << " prints as " << std::showbase;
 
    // note, the following is equivalent to simply std::put_money(units)
    std::use_facet<std::money_put<char>>(loc).put(
        {std::cout}, false, std::cout, std::cout.fill(), units);
    std::cout << '\n';
 
    std::cout.imbue(std::locale(std::cout.getloc(), new my_punct("ru_RU.utf8")));
    std::cout << "With negative_sign set to \"()\", it prints as ";
    std::use_facet<std::money_put<char>>(loc).put(
        {std::cout}, false, std::cout, std::cout.fill(), units);
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 328 | C++98 | the format string used for std::sprintf was "%.01f" | corrected to "%.0Lf" |

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [std::money_put](/cpp/locale/money_put/)
- [money_get](/cpp/locale/money_get/)
- [put_money](/cpp/io/manip/put_money/)
