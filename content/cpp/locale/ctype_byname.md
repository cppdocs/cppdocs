---
title: "std::ctype_byname"
source_path: "cpp/locale/ctype_byname"
header: "<locale>"
category: "locale"
---

std::ctype_byname is a [std::ctype](/cpp/locale/ctype/) facet which encapsulates character classification rules of the locale specified at its construction.

## Declarations
```cpp
template< class CharT >
class ctype_byname : public std::ctype<CharT>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Notes
std::ctype_byname<char> was incorrectly declared as an explicit specialization in the synopsis of [<locale>](/cpp/header/locale/), and the declaration was removed by the resolution of [LWG issue 1298](https://cplusplus.github.io/LWG/issue1298), but it remains a required specialization, just like std::ctype_byname<wchar_t>.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    wchar_t c = L'\u00de'; // capital letter thorn
 
    std::locale loc("C");
 
    std::cout << "isupper('Þ', C locale) returned "
              << std::boolalpha << std::isupper(c, loc) << '\n';
 
    loc = std::locale(loc, new std::ctype_byname<wchar_t>("en_US.utf8"));
 
    std::cout << "isupper('Þ', C locale with Unicode ctype) returned "
              << std::boolalpha << std::isupper(c, loc) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 16 | C++98 | the definition of the explicit specialization std::ctype_byname<char>misspecified the name and parameter list of do_narrow | corrected |
| LWG 616 | C++98 | the typename disambiguator was missing in the definition of mask | added |

## See also
- [ctype](/cpp/locale/ctype/)
- [ctype<char>](/cpp/locale/ctype_char/)
- [std::ctype](/cpp/locale/ctype/)
