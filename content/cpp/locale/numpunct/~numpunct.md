---
title: "std::numpunct<CharT>::~numpunct"
source_path: "cpp/locale/numpunct/~numpunct"
header: "<locale>"
category: "locale"
---

Destructs a [std::numpunct](/cpp/locale/numpunct/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::numpunct](/cpp/locale/numpunct/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::numpunct](/cpp/locale/numpunct/) and implements a public destructor.

## Declarations
```cpp
protected: ~numpunct();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_numpunct : public std::numpunct<wchar_t>
{
    Destructible_numpunct(std::size_t refs = 0) : numpunct(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_numpunct dc;
    // std::numpunct<wchar_t> c; // compile error: protected destructor
}
```
