---
title: "C++ keyword: break"
source_path: "cpp/keyword/break"
category: "keyword"
---

[break statement](/cpp/language/break/): as the declaration of the statement

## Example
```cpp
#include <iostream>
 
int main() noexcept
{
    for (int i{0}; i < 69; ++i)
    {
        if (i == 3) [[unlikely]]
            break; // breaks from the 'for' loop
        std::cout << i;
    }
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
- [return](/cpp/language/return/)
- [return](/cpp/keyword/return/)
- [co_return](/cpp/language/return/)
- [co_return](/cpp/keyword/co_return/)
- [do-while](/cpp/language/do/)
- [while loop](/cpp/language/while/)
- [do](/cpp/keyword/do/)
- [while](/cpp/keyword/while/)
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
