---
title: "std::numpunct<CharT>::grouping, std::numpunct<CharT>::do_grouping"
source_path: "cpp/locale/numpunct/grouping"
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
The object of type [std::string](/cpp/string/basic_string/) holding the groups. The standard specializations of std::numpunct return an empty string, indicating no grouping. Typical groupings (e.g. the en_US locale) return "\003".

## Example
```cpp
#include <iostream>
#include <limits>
#include <locale>
 
struct space_out : std::numpunct<char>
{
    char do_thousands_sep()   const { return ' ';  } // separate with spaces
    std::string do_grouping() const { return "\1"; } // groups of 1 digit
};
 
struct g123 : std::numpunct<char>
{
    std::string do_grouping() const { return "\1\2\3"; }
};
 
int main()
{
    std::cout << "Default locale: " << 12345678 << '\n';
    std::cout.imbue(std::locale(std::cout.getloc(), new space_out));
    std::cout << "Locale with modified numpunct: " << 12345678 << '\n';
    std::cout.imbue(std::locale(std::cout.getloc(), new g123));
    std::cout << "Locale with \\1\\2\\3 grouping: "
              << std::numeric_limits<unsigned long long>::max() << '\n'
              << "Same, for a floating-point number: "
              << std::fixed << 123456789.123456789 << '\n';
}
```

## See also
- [do_thousands_sep](/cpp/locale/numpunct/thousands_sep/)
