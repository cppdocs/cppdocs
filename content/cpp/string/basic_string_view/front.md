---
title: "std::basic_string_view<CharT,Traits>::front"
source_path: "cpp/string/basic_string_view/front"
category: "string"
since: "C++17"
---

Returns reference to the first character in the view. The behavior is undefined if empty() == true.

## Declarations
```cpp
constexpr const_reference front() const;
```
_(since C++17)_

## Return value
Reference to the first character, equivalent to operator[](0).

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main()
{
    for (std::string_view str{"ABCDEF"}; !str.empty(); str.remove_prefix(1))
        std::cout << str.front() << ' ' << str << '\n';
}
```

## See also
- [back](/cpp/string/basic_string_view/back/)
- [empty](/cpp/string/basic_string_view/empty/)
- [front](/cpp/string/basic_string/front/)
