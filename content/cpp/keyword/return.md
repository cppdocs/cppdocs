---
title: "C++ keyword: return"
source_path: "cpp/keyword/return"
category: "keyword"
---

[return](/cpp/language/return/) statement: as the declaration of the statement

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
[[nodiscard]] constexpr auto clamp(int value, int min, int max) noexcept
{
    if (value <= min)
        return min;
    else if (max <= value)
        return max;
 
    return value;
    // won't be executed past 'return' statement
 
    std::exit(value);
}
 
int main() noexcept
{
    std::cout << clamp(1, 2, 4);
    std::cout << clamp(3, 2, 4);
    std::cout << clamp(5, 2, 4);
 
    return 0; // the value '0' that in main() indicates a success
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
- [co_return](/cpp/language/return/)
- [co_return](/cpp/keyword/co_return/)
- [do-while](/cpp/language/do/)
- [while loop](/cpp/language/while/)
- [do](/cpp/keyword/do/)
- [while](/cpp/keyword/while/)
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
