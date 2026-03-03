---
title: "std::use_facet"
source_path: "cpp/locale/use_facet"
header: "<locale>"
category: "locale"
---

Obtains a reference to a facet implemented by loc.

## Declarations
```cpp
template< class Facet >
const Facet& use_facet( const std::locale& loc );
```

## Parameters
- `loc`: the locale object to query

## Return value
Returns a reference to the facet. The reference returned by this function is valid as long as any [std::locale](/cpp/locale/locale/) object refers to that facet.

## Notes
A [std::locale](/cpp/locale/locale/) object should not be a temporary if a reference to the Facet object obtained from use_facet is used after the end of statement:

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    for (const char* name: {"en_US.UTF-8", "de_DE.UTF-8", "en_GB.UTF-8"})
        std::cout << "Your currency string is "
                  << std::use_facet<std::moneypunct<char, true>>(std::locale{name}).
                     curr_symbol() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 31 | C++98 | the returned reference remained usableas long as the locale value itself exists | the returned reference remains usable aslong as some locale object refers to that facet |
| LWG 38 | C++98 | Facet was not required to have a direct member id | required |
| LWG 436 | C++98 | it was unclear whether Facet can be cv-qualified | it can be const-qualified, but not volatile-qualified |

## See also
- [locale](/cpp/locale/locale/)
- [has_facet](/cpp/locale/has_facet/)
