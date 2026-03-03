---
title: "std::ranges::split_view<V,Pattern>::base"
source_path: "cpp/ranges/split_view/base"
category: "ranges"
since: "C++20"
---

Returns a copy of the underlying view [base_](/cpp/ranges/split_view/#base).

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++20)_

```cpp
constexpr V base() &&;
```
_(since C++20)_

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr std::string_view keywords{"this throw true try typedef typeid"};
    std::ranges::split_view split_view{keywords, ' '};
    std::cout << "base() = " << std::quoted(split_view.base()) << "\n"
                 "substrings: ";
    for (auto split : split_view)
        std::cout << std::quoted(std::string_view{split}) << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3590 | C++20 | the const& overload additionally required validity of copy-assignment | constraints relaxed |

## See also
- [base](/cpp/ranges/lazy_split_view/base/)
