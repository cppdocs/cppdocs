---
title: "C++ keyword: while"
source_path: "cpp/keyword/while"
category: "keyword"
---

[while](/cpp/language/while/) loop: as the declaration of the loop

## Example
```cpp
#include <iostream>
 
int main() noexcept
{
    int i{3};
 
    // The following 'while' loop statement:
    // 1. (condition) Checks if value of the variable 'i' is greater than zero
    //                and if not, ends the loop execution with end of this point.
    //                Post-decrements the variable 'i' (decreases its value by 1).
    // 2. (statement) Writes out a current value of the variable 'i' to the stdout.
    // 3.             Returns to the point 1 (condition).
 
    while (i --> 0)     // condition: i-- > 0
        std::cout << i; // statement: std::cout << i;
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
- [do](/cpp/keyword/do/)
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
