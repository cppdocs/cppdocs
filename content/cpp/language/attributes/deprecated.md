---
title: "C++ attribute: deprecated (since C++14)"
source_path: "cpp/language/attributes/deprecated"
category: "language"
since: "C++14"
---

Indicates that the name or entity declared with this attribute is [deprecated](https://en.wikipedia.org/wiki/Deprecation), that is, the use is allowed, but discouraged for some reason.

## Example
```cpp
#include <iostream>
 
[[deprecated]]
void TriassicPeriod()
{
    std::clog << "Triassic Period: [251.9 - 208.5] million years ago.\n";
}
 
[[deprecated("Use NeogenePeriod() instead.")]]
void JurassicPeriod()
{
    std::clog << "Jurassic Period: [201.3 - 152.1] million years ago.\n";
}
 
[[deprecated("Use calcSomethingDifferently(int).")]]
int calcSomething(int x)
{
    return x * 2;
}
 
int main()
{
    TriassicPeriod();
    JurassicPeriod();
}
```

## See also
- [C documentation](/c/language/attributes/deprecated/)
