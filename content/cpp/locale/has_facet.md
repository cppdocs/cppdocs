---
title: "std::has_facet"
source_path: "cpp/locale/has_facet"
header: "<locale>"
category: "locale"
since: "C++11"
---

Checks if the locale loc implements the facet Facet.

## Declarations
```cpp
template< class Facet >
bool has_facet( const locale& loc ) throw();
```
_(until C++11)_

```cpp
template< class Facet >
bool has_facet( const locale& loc ) noexcept;
```
_(since C++11)_

## Parameters
- `loc`: the locale object to query

## Return value
Returns true if the facet Facet was installed in the locale loc, false otherwise.

## Notes
std::has_facet must return true for all locales loc if Facet is one of the standard facets given [here](/cpp/locale/locale/).

## Example
```cpp
#include <iostream>
#include <locale>
 
// minimal custom facet
struct myfacet : public std::locale::facet
{
    static std::locale::id id;
};
 
std::locale::id myfacet::id;
 
int main()
{
    // loc is a "C" locale with myfacet added
    std::locale loc(std::locale::classic(), new myfacet);
    std::cout << std::boolalpha
              << "Can loc classify chars? "
              << std::has_facet<std::ctype<char>>(loc) << '\n'
              << "Can loc classify char32_t? "
              << std::has_facet<std::ctype<char32_t>>(loc) << '\n'
              << "Does loc implement myfacet? "
              << std::has_facet<myfacet>(loc) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 436 | C++98 | it was unclear whether Facet can be cv-qualified | it can be const-qualified, but not volatile-qualified |

## See also
- [locale](/cpp/locale/locale/)
- [use_facet](/cpp/locale/use_facet/)
