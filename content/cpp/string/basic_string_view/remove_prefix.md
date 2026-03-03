---
title: "std::basic_string_view<CharT,Traits>::remove_prefix"
source_path: "cpp/string/basic_string_view/remove_prefix"
category: "string"
since: "C++17"
---

Moves the start of the view forward by n characters.

## Declarations
```cpp
constexpr void remove_prefix( size_type n );
```
_(since C++17)_

## Parameters
- `n`: number of characters to remove from the start of the view

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
 
using namespace std::literals;
 
[[nodiscard("a pure function")]]
constexpr std::size_t count_substrings(std::string_view hive, std::string_view const bee)
{
    if (hive.empty() || bee.empty())
        return 0U;
 
    std::size_t buzz{};
    while (bee.size() <= hive.size())
    {
        const auto pos = hive.find(bee);
        if (pos == hive.npos)
            break;
        ++buzz;
        hive.remove_prefix(pos + bee.size());
    }
    return buzz;
}
 
int main()
{
    std::string str = "   trim me";
    std::string_view v = str;
    v.remove_prefix(std::min(v.find_first_not_of(" "), v.size()));
    std::cout << "String: '" << str << "'\n"
              << "View  : '" << v << "'\n";
 
    constexpr auto hive{"bee buzz bee buzz bee"};
    std::cout << "There are " << count_substrings(hive, "bee") << " bees in this hive.\n";
}
```

## See also
- [remove_suffix](/cpp/string/basic_string_view/remove_suffix/)
