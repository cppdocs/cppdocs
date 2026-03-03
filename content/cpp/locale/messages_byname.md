---
title: "std::messages_byname"
source_path: "cpp/locale/messages_byname"
header: "<locale>"
category: "locale"
---

std::messages_byname is a [std::messages](/cpp/locale/messages/) facet which encapsulates retrieval of strings from message catalogs of the locale specified at its construction.

## Declarations
```cpp
template< class CharT >
class messages_byname : public std::messages<CharT>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_with(const std::locale& loc)
{
    const std::messages<char>& facet = std::use_facet<std::messages<char>>(loc);
 
    std::messages<char>::catalog cat = facet.open("sed", std::cout.getloc());
    if (cat < 0)
        std::cout << "Could not open \"sed\" message catalog\n";
    else
        std::cout << "\"No match\" "
                  << facet.get(cat, 0, 0, "No match") << '\n'
                  << "\"Memory exhausted\" " 
                  << facet.get(cat, 0, 0, "Memory exhausted") << '\n';
 
    facet.close(cat);
}
 
int main()
{
    std::locale loc("en_US.utf8");
    std::cout.imbue(loc);
 
    try_with(std::locale(loc, new std::messages_byname<char>("de_DE.utf8")));
    try_with(std::locale(loc, new std::messages_byname<char>("fr_FR.utf8")));
    try_with(std::locale(loc, new std::messages_byname<char>("ja_JP.utf8")));
}
```

## See also
- [messages](/cpp/locale/messages/)
