---
title: "std::num_put<CharT,OutputIt>::~num_put"
source_path: "cpp/locale/num_put/~num_put"
header: "<locale>"
category: "locale"
---

Destructs a [std::num_put](/cpp/locale/num_put/) facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::num_put](/cpp/locale/num_put/), like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::num_put](/cpp/locale/num_put/) and implements a public destructor.

## Declarations
```cpp
protected: ~num_put();
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct Destructible_num_put : public std::num_put<wchar_t>
{
    Destructible_num_put(std::size_t refs = 0) : num_put(refs) {}
    // note: the implicit destructor is public
};
 
int main()
{
    Destructible_num_put dc;
    // std::num_put<wchar_t> c; // compile error: protected destructor
}
```
