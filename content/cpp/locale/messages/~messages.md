---
title: "std::messages<CharT>::~messages"
source_path: "cpp/locale/messages/~messages"
header: "<locale>"
category: "locale"
---

Destructs a [std::messages](/cpp/locale/messages/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::messages](/cpp/locale/messages/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::messages](/cpp/locale/messages/) and implements a public destructor.

## Declarations
```cpp
protected: ~messages();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_messages : public std::messages<wchar_t>
{
    Destructible_messages(std::size_t refs = 0) : messages(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_messages dc;
    // std::messages<wchar_t> c; // compile error: protected destructor
}
```
