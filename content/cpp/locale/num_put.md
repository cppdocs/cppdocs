---
title: "std::num_put"
source_path: "cpp/locale/num_put"
header: "<locale>"
category: "locale"
---

Class std::num_put encapsulates the rules for formatting numeric values as strings. Specifically, the types bool, long, unsigned long, long long, unsigned long long(since C++11), double, long double, void*, and of all types implicitly convertible to these (such as int or float) are supported. The standard formatting output operators (such as cout << n;) use the std::num_put facet of the I/O stream's locale to generate text representation of numbers.

## Declarations
```cpp
template<
class CharT,
class OutputIt = std::ostreambuf_iterator<CharT>
> class num_put;
```

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
#include <string>
 
int main()
{
    double n = 1234567.89;
    std::cout.imbue(std::locale("de_DE.UTF-8"));
    std::cout << "Direct conversion to string:\n"
              << std::to_string(n) << '\n'
              << "Output using a german locale:\n"
              << std::fixed << n << '\n'
              << "Output using an american locale:\n";
 
    // use the facet directly
    std::cout.imbue(std::locale("en_US.UTF-8"));
    auto& f = std::use_facet<std::num_put<char>>(std::cout.getloc());
    f.put(std::ostreambuf_iterator<char>(std::cout), std::cout, ' ', n);
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 427 | C++98 | num_put was guaranteed to accept any CharT thatmeets the requirements for a character on whichany of the iostream components can be instantiated | only guarantees to accept char,wchar_t and other implementation-defined character types |
| LWG 2392 | C++98 | only character type CharT could beguaranteed to be accepted by num_put | can guarantee to accept implementation-defined character container types |

## See also
- [numpunct](/cpp/locale/numpunct/)
- [num_get](/cpp/locale/num_get/)
- [to_string](/cpp/string/basic_string/to_string/)
- [to_wstring](/cpp/string/basic_string/to_wstring/)
