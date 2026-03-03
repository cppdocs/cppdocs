---
title: "std::collate<CharT>::~collate"
source_path: "cpp/locale/collate/~collate"
header: "<locale>"
category: "locale"
---

Destructs a [std::collate](/cpp/locale/collate/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::collate](/cpp/locale/collate/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::collate](/cpp/locale/collate/) and implements a public destructor.

## Declarations
```cpp
protected: ~collate();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_collate : public std::collate<wchar_t>
{
    Destructible_collate(std::size_t refs = 0) : collate(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_collate dc;
    // std::collate<wchar_t> c; // compile error: protected destructor
}
```
