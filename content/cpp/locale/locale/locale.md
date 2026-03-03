---
title: "std::locale::locale"
source_path: "cpp/locale/locale/locale"
category: "locale"
since: "C++11"
---

Constructs a new locale object.

## Declarations
```cpp
locale() throw();
```
_(until C++11)_

```cpp
locale() noexcept;
```
_(since C++11)_

```cpp
locale( const locale& other ) throw();
```
_(until C++11)_

```cpp
locale( const locale& other ) noexcept;
```
_(since C++11)_

```cpp
explicit locale( const char* std_name );
```

```cpp
explicit locale( const std::string& std_name );
```
_(since C++11)_

```cpp
locale( const locale& other, const char* std_name, category cats );
```

```cpp
locale( const locale& other, const std::string& std_name, category cats );
```
_(since C++11)_

```cpp
template< class Facet >
locale( const locale& other, Facet* f );
```

```cpp
locale( const locale& other, const locale& one, category cats );
```

## Parameters
- `other`: another locale to copy
- `std_name`: name of the system locale to use
- `f`: pointer to a facet to merge with other
- `cats`: the facet categories used to identify the facets to merge with other
- `one`: another locale to take facets from

## Notes
Overload ([7](#Version_7)) is typically called with its second argument, f, obtained directly from a new-expression: the locale is responsible for calling the matching delete from its own destructor.

## Example
```cpp
#include <codecvt>
#include <iostream>
#include <locale>
 
std::ostream& operator<< (std::ostream& os, const std::locale& loc)
{
    if (loc.name().length() <= 80)
        os << loc.name();
    else
        for (const auto c : loc.name())
            os << c << (c == ';' ? "\n  " : "");
 
    return os << '\n';
}
 
int main()
{
    std::locale l1;
    std::cout << "Name of a copy of the classic \"C\" locale: " << l1;
 
    std::locale l2("en_US.UTF-8");
    std::cout << "Name of unicode locale: " << l2;
 
    std::locale l3(l1, new std::codecvt_utf8<wchar_t>);
    std::cout << "Name of \"C\" locale except for codecvt: " << l3;
 
    std::locale l4(l1, l2, std::locale::ctype);
    std::cout << "Name of \"C\" locale except for ctype, which is unicode:\n  " << l4;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 436 | C++98 | for overload (7), it was unclearwhether Facet can be cv-qualified | it can be const-qualified,but not volatile-qualified |
| LWG 2295 | C++98 | for overload (7), the constructed locale had no name even if f is null | it has the name of other |

## See also
- [(destructor)](/cpp/locale/locale/~locale/)
