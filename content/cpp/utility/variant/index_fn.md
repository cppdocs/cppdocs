---
title: "std::variant<Types...>::index"
source_path: "cpp/utility/variant/index"
url: "/cpp/utility/variant/index/"
category: "utility"
since: "C++17"
---

Returns the zero-based index of the alternative that is currently held by the variant.

## Declarations
```cpp
constexpr std::size_t index() const noexcept;
```
_(since C++17)_

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::variant<int, std::string> v = "abc";
    std::cout << "v.index = " << v.index() << '\n';
    v = {};
    std::cout << "v.index = " << v.index() << '\n';
}
```

## See also
- [holds_alternative](/cpp/utility/variant/holds_alternative/)
- [get(std::variant)](/cpp/utility/variant/get/)
