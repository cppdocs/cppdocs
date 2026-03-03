---
title: "std::experimental::basic_string_view<CharT,Traits>::remove_prefix"
source_path: "cpp/experimental/basic_string_view/remove_prefix"
category: "experimental"
---

Moves the start of the view forward by n characters.

## Declarations
```cpp
constexpr void remove_prefix(size_type n);
```
_(library fundamentals TS)_

## Parameters
- `n`: number of characters to remove from the start of the view

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <experimental/string_view>
int main()
{
    std::string str = "   trim me";
    std::experimental::string_view v = str;
    v.remove_prefix(std::min(v.find_first_not_of(" "), v.size()));
    std::cout << "String: '" << str << "'\n"
              << "View  : '" << v << "'\n";
}
```

## See also
- [remove_suffix](/cpp/experimental/basic_string_view/remove_suffix/)
