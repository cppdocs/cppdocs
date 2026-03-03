---
title: "std::basic_string_view<CharT,Traits>::swap"
source_path: "cpp/string/basic_string_view/swap"
category: "string"
since: "C++17"
---

Exchanges the view with that of v.

## Declarations
```cpp
constexpr void swap( basic_string_view& v ) noexcept;
```
_(since C++17)_

## Parameters
- `v`: view to swap with

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main() 
{
    std::string_view a = "AAA";
    std::string_view b = "BBBB";
 
    std::cout << "Before swap:\n"
                 "a = " << a << "\n"
                 "b = " << b << "\n\n";
 
    a.swap(b);
 
    std::cout << "After swap:\n"
                 "a = " << a << "\n"
                 "b = " << b << '\n';
}
```

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [swap](/cpp/string/basic_string/swap/)
