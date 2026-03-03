---
title: "C++ keyword: goto"
source_path: "cpp/keyword/goto"
category: "keyword"
---

[goto](/cpp/language/goto/) statement: as the declaration of the statement

## Example
```cpp
#include <cassert>
#include <string>
 
[[nodiscard]] auto get_first_line(const std::string& string)
{
    std::string first_line{};
    for (const auto character : string)
        switch (character)
        {
            case '\n':
                goto past_for; // breaks from 'range-for loop'
            default:
                first_line += character;
                break;
        }
past_for:
    return first_line;
}
 
int main()
{
    assert(get_first_line("Hello\nworld!") == "Hello");
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
- [for](/cpp/language/for/)
- [range-based for loop](/cpp/language/range-for/)
- [for](/cpp/keyword/for/)
