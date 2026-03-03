---
title: "std::wbuffer_convert<Codecvt,Elem,Tr>::~wbuffer_convert"
source_path: "cpp/locale/wbuffer_convert/~wbuffer_convert"
category: "locale"
---

Destroys the wbuffer_convert object and deletes [cvtptr](/cpp/locale/wbuffer_convert/#cvtptr) ﻿.

## Declarations
```cpp
~wbuffer_convert();
```

## Notes
Some implementations are able to delete any facet, including the locale-specific facets with protected destructors. Other implementations require the facet to have a public destructor, similar to the locale-independent facets from [<codecvt>](/cpp/header/codecvt/).

## Example
```cpp
#include <codecvt>
#include <iostream>
#include <locale>
#include <utility>
 
// Utility wrapper to adapt locale-bound facets for wstring/wbuffer convert
template<class Facet>
struct deletable_facet : Facet
{
    template<class... Args>
    deletable_facet(Args&&... args) : Facet(std::forward<Args>(args)...) {}
    ~deletable_facet() {}
};
 
int main()
{
// GB18030 / UCS4 conversion, using locale-based facet directly
//  typedef std::codecvt_byname<char32_t, char, std::mbstate_t> gbfacet_t;
// Compiler error: "calling a protected destructor of codecvt_byname<> in ~wbuffer_convert"
//  std::wbuffer_convert<gbfacet_t, char32_t>
//      gbto32(std::cout.rdbuf(), new gbfacet_t("zh_CN.gb18030"));
 
// GB18030 / UCS4 conversion facet using a facet with public destructor
    typedef deletable_facet<std::codecvt_byname<char32_t, char, std::mbstate_t>> gbfacet_t;
    std::wbuffer_convert<gbfacet_t, char32_t>
        gbto32(std::cout.rdbuf(), new gbfacet_t("zh_CN.gb18030"));
} // destructor called here
```

## See also
- [(destructor)](/cpp/locale/wstring_convert/~wstring_convert/)
