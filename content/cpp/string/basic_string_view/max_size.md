---
title: "std::basic_string_view<CharT,Traits>::max_size"
source_path: "cpp/string/basic_string_view/max_size"
category: "string"
since: "C++17"
---

The largest possible number of char-like objects that can be referred to by a basic_string_view.

## Declarations
```cpp
constexpr size_type max_size() const noexcept;
```
_(since C++17)_

## Return value
Maximum number of characters.

## Example
```cpp
#include <cstdint>
#include <iostream>
#include <limits>
#include <string_view>
 
int main()
{
    std::cout << std::numeric_limits<std::int64_t>::max()
              << " <- numeric_limits<int64_t>::max()\n"
              << std::string_view{}.max_size()
              << " <- string_view::max_size()\n"
              << std::basic_string_view<char>{}.max_size()
              << " <- basic_string_view<char>::max_size()\n"
              << std::basic_string_view<char16_t>{}.max_size()
              << " <- basic_string_view<char16_t>::max_size()\n"
              << std::wstring_view{}.max_size()
              << " <- wstring_view::max_size()\n"
              << std::basic_string_view<char32_t>{}.max_size()
              << " <- basic_string_view<char32_t>::max_size()\n";
}
```

## See also
- [sizelength](/cpp/string/basic_string_view/size/)
- [empty](/cpp/string/basic_string_view/empty/)
- [max_size](/cpp/string/basic_string/max_size/)
