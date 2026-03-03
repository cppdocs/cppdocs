---
title: "std::locale::combine"
source_path: "cpp/locale/locale/combine"
category: "locale"
---

Constructs a locale object which is a copy of *this except for the facet of type Facet, which is copied from other.

## Declarations
```cpp
template< class Facet >
locale combine( const locale& other ) const;
```

## Return value
The new, nameless, locale.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const double number = 1000.25;
    std::cout << "\"C\" locale: " << number << '\n';
    std::locale loc = std::locale()
        .combine<std::numpunct<char>>(std::locale("en_US.UTF8"));
    std::cout.imbue(loc);
    std::cout << "\"C\" locale with en_US numpunct: " << number << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 14 | C++98 | locale::combine was non-const | made const |
| LWG 436 | C++98 | it was unclear whether Facet can be cv-qualified | it can be const-qualified, but not volatile-qualified |

## See also
- [(constructor)](/cpp/locale/locale/locale/)
