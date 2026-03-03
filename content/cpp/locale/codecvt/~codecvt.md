---
title: "std::codecvt<InternT,ExternT,StateT>::~codecvt"
source_path: "cpp/locale/codecvt/~codecvt"
header: "<locale>"
category: "locale"
---

Destructs a [std::codecvt](/cpp/locale/codecvt/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::codecvt](/cpp/locale/codecvt/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::codecvt](/cpp/locale/codecvt/) and implements a public destructor.

## Declarations
```cpp
protected: ~codecvt();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_codecvt : public std::codecvt<wchar_t, char, std::mbstate_t>
{
    Destructible_codecvt(std::size_t refs = 0) : codecvt(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_codecvt dc;
    // std::codecvt<wchar_t> c; // compile error: protected destructor
}
```
