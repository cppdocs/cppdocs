---
title: "std::money_get<CharT,InputIt>::~money_get"
source_path: "cpp/locale/money_get/~money_get"
header: "<locale>"
category: "locale"
---

Destructs a [std::money_get](/cpp/locale/money_get/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::money_get](/cpp/locale/money_get/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::money_get](/cpp/locale/money_get/) and implements a public destructor.

## Declarations
```cpp
protected: ~money_get();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_money_get : public std::money_get<wchar_t>
{
    Destructible_money_get(std::size_t refs = 0) : money_get(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_money_get dc;
    // std::money_get<wchar_t> c; // compile error: protected destructor
}
```
