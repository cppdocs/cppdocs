---
title: "C attribute: deprecated (since C23)"
source_path: "c/language/attributes/deprecated"
category: "c"
---

Indicates that the name or entity declared with this attribute is [deprecated](https://en.wikipedia.org/wiki/Deprecation), that is, the use is allowed, but discouraged for some reason.

## Example
```cpp
#include <stdio.h>
 
[[deprecated]]
void TriassicPeriod(void)
{
    puts("Triassic Period: [251.9 - 208.5] million years ago.");
}
 
[[deprecated("Use NeogenePeriod() instead.")]]
void JurassicPeriod(void)
{
    puts("Jurassic Period: [201.3 - 152.1] million years ago.");
}
 
[[deprecated("Use calcSomethingDifferently(int).")]]
int calcSomething(int x)
{
    return x * 2;
}
 
int main(void)
{
    TriassicPeriod();
    JurassicPeriod();
}
```

## See also
- [C++ documentation](/cpp/language/attributes/deprecated/)
