---
title: "std::basic_string_view<CharT,Traits>::back"
source_path: "cpp/string/basic_string_view/back"
category: "string"
since: "C++17"
---

Returns reference to the last character in the view. The behavior is undefined if empty() == true.

## Declarations
```cpp
constexpr const_reference back() const;
```
_(since C++17)_

## Return value
Reference to the last character, equivalent to operator[](size() - 1).

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main()
{
    for (std::string_view str{"ABCDEF"}; !str.empty(); str.remove_suffix(1))
        std::cout << str.back() << ' ' << str << '\n';
}
```

## See also
- [front](/cpp/string/basic_string_view/front/)
- [empty](/cpp/string/basic_string_view/empty/)
- [back](/cpp/string/basic_string/back/)
