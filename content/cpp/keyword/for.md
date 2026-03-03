---
title: "C++ keyword: for"
source_path: "cpp/keyword/for"
category: "keyword"
---

[for](/cpp/language/for/) loop: as the declaration of the loop

## Example
```cpp
#include <iostream>
 
int main() noexcept
{
    // The following 'for' loop statement:
    // 1. (init-statement) Declares an integer named 'i' and initializes it with value '0'.
    // 2. (condition)      Checks if i is less than 3 and if not, ends the loop execution.
    // 3. (statement)      Writes out a current value of the integer 'i' to the stdout.
    // 4. (expression)     Pre-increments the integer 'i' (increases its value by 1).
    // 5.                  Returns to the point 2 (condition).
 
                                // init-statement: int i{0};
                                // condition:      i < 3
    for (int i{0}; i < 3; ++i)  // expression:     ++i
        std::cout << i;         // statement:      std::cout << i;
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
- [while](/cpp/keyword/while/)
