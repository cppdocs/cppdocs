---
title: "std::basic_string_view<CharT,Traits>::substr"
source_path: "cpp/string/basic_string_view/substr"
category: "string"
since: "C++17"
---

Returns a view of the substring [pos,pos + rlen), where rlen is the smaller of count and size() - pos.

## Declarations
```cpp
constexpr basic_string_view substr( size_type pos = 0,
size_type count = npos ) const;
```
_(since C++17)_

## Parameters
- `pos`: position of the first character
- `count`: requested length

## Return value
View of the substring [pos,pos + rlen).

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <stdexcept>
#include <string_view>
 
int main()
{
    typedef std::size_t count_t, pos_t;
 
    constexpr std::string_view data{"ABCDEF"};
 
    std::cout << data.substr() << '\n'; // ABCDEF, i.e. data[0, 5] that is [0, 6)
    std::cout << data.substr(pos_t(1)) << '\n'; // BCDEF, i.e. [1, 6)
    std::cout << data.substr(pos_t(2), count_t(3)) << '\n'; // CDE, i.e. [2, 2 + 3)
    std::cout << data.substr(pos_t(4), count_t(42)) << '\n'; // EF, i.e. [4, 6)
 
    try
    {
        [[maybe_unused]]
        auto sub = data.substr(pos_t(666), count_t(1)); // throws: pos > size()
    }
    catch (std::out_of_range const& ex)
    {
        std::cout << ex.what() << '\n';
    }
}
```

## See also
- [copy](/cpp/string/basic_string_view/copy/)
- [find](/cpp/string/basic_string_view/find/)
- [substr](/cpp/string/basic_string/substr/)
