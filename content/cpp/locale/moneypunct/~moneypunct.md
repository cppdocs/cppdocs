---
title: "std::moneypunct<CharT,International>::~moneypunct"
source_path: "cpp/locale/moneypunct/~moneypunct"
header: "<locale>"
category: "locale"
---

Destructs a [std::moneypunct](/cpp/locale/moneypunct/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::moneypunct](/cpp/locale/moneypunct/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::moneypunct](/cpp/locale/moneypunct/) and implements a public destructor.

## Declarations
```cpp
protected: ~moneypunct();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_moneypunct : public std::moneypunct<wchar_t>
{
    Destructible_moneypunct(std::size_t refs = 0) : moneypunct(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_moneypunct dc;
    // std::moneypunct<wchar_t> c; // compile error: protected destructor
}
```
