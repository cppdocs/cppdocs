---
title: "C++ keyword: continue"
source_path: "cpp/keyword/continue"
category: "keyword"
---

[continue statement](/cpp/language/continue/): as the declaration of the statement

## Example
```cpp
#include <iostream>
#include <string>
 
[[nodiscard]] constexpr auto get_digits(const std::string& string) noexcept
{
    std::string digits{};
 
    for (const auto& character: string)
    {
        if (character < '0' || character > '9') [[likely]]
            continue; // conditionally skips the following statement
        digits += character;
    }
 
    return digits;
}
 
int main() noexcept
{
    std::cout << get_digits("H3LL0, W0RLD!");
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
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
