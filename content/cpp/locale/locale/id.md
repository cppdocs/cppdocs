---
title: "std::locale::id"
source_path: "cpp/locale/locale/id"
header: "<locale>"
category: "locale"
---

The class std::locale::id provides implementation-specific identification of a locale facet. Each [facet](/cpp/locale/locale/facet/) has a public static member named id of type std::locale::id and each [std::locale](/cpp/locale/locale/) object maintains a list of facets it implements, indexed by their ids.

## Declarations
```cpp
class locale::id;
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct myfacet : std::locale::facet
{
    myfacet(std::size_t refs = 0) : facet(refs) {}
    static ::std::locale::id id;
};
 
std::locale::id myfacet::id;
 
int main()
{
    std::locale myloc(std::locale(), new myfacet);
    std::cout << "has_facet<myfacet>(myloc) returns " << std::boolalpha
              << std::has_facet<myfacet>(myloc) << '\n';
}
```

## See also
- [facet](/cpp/locale/locale/facet/)
