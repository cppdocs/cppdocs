---
title: "std::basic_string_view<CharT,Traits>::operator="
source_path: "cpp/string/basic_string_view/operator"
category: "string"
since: "C++17"
---

Replaces the view with that of view.

## Declarations
```cpp
constexpr basic_string_view& operator=( const basic_string_view& view ) noexcept = default;
```
_(since C++17)_

## Parameters
- `view`: view to copy

## Return value
*this

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main()
{
    std::string_view v = "Hello, world";
    v = v.substr(7);
    std::cout << v << '\n';
}
```

## See also
- [(constructor)](/cpp/string/basic_string_view/basic_string_view/)
- [operator=](/cpp/string/basic_string/operator/)
