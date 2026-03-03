---
title: "std::num_get"
source_path: "cpp/locale/num_get"
header: "<locale>"
category: "locale"
---

Class std::num_get encapsulates the rules for parsing string representations of numeric values. Specifically, types bool, unsigned short, unsigned int, long, unsigned long, long long, unsigned long long(since C++11), float, double, long double, and void* are supported. The standard formatting input operators (such as cin >> n;) use the std::num_get facet of the I/O stream's locale to parse the text representations of the numbers.

## Declarations
```cpp
template<
class CharT,
class InputIt = std::istreambuf_iterator<CharT>
> class num_get;
```

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
#include <sstream>
#include <string>
 
int main()
{
    std::string de_double = "1.234.567,89";
    std::string us_double = "1,234,567.89";
 
    // parse using streams
    std::istringstream de_in(de_double);
    de_in.imbue(std::locale("de_DE.UTF-8"));
    double f1;
    de_in >> f1;
 
    std::istringstream us_in(de_double);
    us_in.imbue(std::locale("en_US.UTF-8"));
    double f2;
    us_in >> f2;
 
    std::cout << "Parsing " << de_double << " as double gives " << std::fixed
              << f1 << " in de_DE locale and " << f2 << " in en_US\n";
 
    // use the facet directly
    std::istringstream s3(us_double);
    s3.imbue(std::locale("en_US.UTF-8"));
 
    auto& f = std::use_facet<std::num_get<char>>(s3.getloc());
    std::istreambuf_iterator<char> beg(s3), end;
    double f3;
    std::ios::iostate err;
    f.get(beg, end, s3, err, f3);
 
    std::cout << "parsing " << us_double
              << " as double using raw en_US facet gives " << f3 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 427 | C++98 | num_get was guaranteed to accept any CharT thatmeets the requirements for a character on whichany of the iostream components can be instantiated | only guarantees to accept char,wchar_t and other implementation-defined character types |
| LWG 2392 | C++98 | only character type CharT could beguaranteed to be accepted by num_get | can guarantee to accept implementation-defined character container types |

## See also
- [numpunct](/cpp/locale/numpunct/)
- [num_put](/cpp/locale/num_put/)
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
