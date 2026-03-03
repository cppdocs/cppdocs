---
title: "C++ keyword: do"
source_path: "cpp/keyword/do"
category: "keyword"
---

[do-while loop](/cpp/language/do/): as the declaration of the loop

## Example
```cpp
#include <iostream>
 
int main() noexcept
{
    int i{0};
 
    // executes statement 'std::cout << ++i;'
    // before checking the condition 'i <= 2'
    do
        std::cout << ++i;
    while (i <= 2);
}
```

## See also
- [if](/cpp/language/if/)
- [if](/cpp/keywords/if/)
- [else](/cpp/keyword/else/)
- [constexpr if statement](/cpp/language/if/#Constexpr_if)
- [constexpr](/cpp/keyword/constexpr/)
- [consteval if statement](/cpp/language/if/#Consteval_if)
- [consteval](/cpp/keyword/consteval/)
- [switch](/cpp/language/switch/)
- [switch](/cpp/keyword/switch/)
- [case](/cpp/keyword/case/)
- [default](/cpp/language/switch/)
- [default](/cpp/keyword/default/)
- [goto](/cpp/language/goto/)
- [goto](/cpp/keyword/goto/)
- [continue](/cpp/language/continue/)
- [continue](/cpp/keyword/continue/)
- [break](/cpp/language/break/)
- [break](/cpp/keyword/break/)
- [return](/cpp/language/return/)
- [return](/cpp/keyword/return/)
- [co_return](/cpp/language/return/)
- [co_return](/cpp/keyword/co_return/)
- [do-while](/cpp/language/do/)
- [while loop](/cpp/language/while/)
- [while](/cpp/keyword/while/)
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
