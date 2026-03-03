---
title: "std::money_get<CharT,InputIt>::get, do_get"
source_path: "cpp/locale/money_get/get"
header: "<locale>"
category: "locale"
---

Parses monetary value from an input iterator and writes the result to a long double or string.

## Declarations
```cpp
public:
iter_type get( iter_type beg, iter_type end, bool intl, std::ios_base& str,
std::ios_base::iostate& err, long double& units ) const;
```

```cpp
iter_type get( iter_type beg, iter_type end, bool intl, std::ios_base& str,
std::ios_base::iostate& err, string_type& digits ) const;
```

```cpp
protected:
virtual iter_type do_get( iter_type beg, iter_type end, bool intl, std::ios_base& str,
std::ios_base::iostate& err, long double& units ) const;
```

```cpp
virtual iter_type do_get( iter_type beg, iter_type end, bool intl, std::ios_base& str,
std::ios_base::iostate& err, string_type& digits ) const;
```

## Return value
An iterator pointing immediately after the last character recognized as a valid part of the monetary string input.

## Notes
The currency units are assumed to be the smallest non-fractional units of the currency: cents in the U.S, yen in Japan. Thus, the input sequence "$1,056.23" in a U.S. locale produces the number 105623.0 in units or a string "105623" in digits.

Because currency symbol is optional if showbase is off but the entire multicharacter negative_sign() is required, given the formatting pattern {sign, value, space, symbol} with showbase off and negative_sign of "-", the string "-1.23 €" parses as -123 and leaves "€" unconsumed on the input stream, but if negative_sign is "()", the string "(1.23 €)" is consumed completely.

The I/O manipulator [std::get_money](/cpp/io/manip/get_money/) offers a simpler interface to this function.

## Example
```cpp
#include <iostream>
#include <locale>
#include <sstream>
 
void demo_money_get(std::locale loc, const std::string& input)
{
    std::istringstream str(input);
    str.imbue(loc);
    long double units;
 
    // The following can be written simpler with std::get_money(units)
    std::ios_base::iostate err = std::ios_base::goodbit;
    std::istreambuf_iterator<char> ret =
        std::use_facet<std::money_get<char>>(loc).get(
            std::istreambuf_iterator<char>(str),
            std::istreambuf_iterator<char>(),
            false, str, err, units);
    str.setstate(err);
    std::istreambuf_iterator<char> last{};
    if (str)
    {
        std::cout << "Successfully parsed '" << str.str() << "' as "
                  << units / 100 << " units\n";
        if (ret != last)
        {
            std::cout << "Remaining content: '";
            std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
            std::cout << "'\n";
        }
        else
            std::cout << "The input was fully consumed\n";
    }
    else
    {
        std::cout << "Parse failed. Unparsed string: '";
        std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
        std::cout << "'\n";
    }
}
 
int main()
{
    demo_money_get(std::locale("en_US.utf8"), "-$5.12 abc");
    demo_money_get(std::locale("ms_MY.utf8"), "(RM5.12) def");
}
```

## See also
- [moneypunct](/cpp/locale/moneypunct/)
- [std::money_get](/cpp/locale/money_get/)
- [std::money_put](/cpp/locale/money_put/)
- [money_get](/cpp/locale/money_get/)
- [get_money](/cpp/io/manip/get_money/)
