---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::clear"
source_path: "cpp/container/flat_map/clear"
category: "container"
since: "C++23"
---

Erases all elements from the container adaptor. After this call, size() returns zero.

## Declarations
```cpp
void clear() noexcept;
```
_(since C++23)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
#include <flat_map>
 
void print_info(std::string_view rem, const std::flat_map<int, char>& v)
{
    std::cout << rem << "{ ";
    for (const auto& [key, value] : v)
        std::cout << '[' << key << "]:" << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::flat_map<int, char> container{{1, 'x'}, {2, 'y'}, {3, 'z'}};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## See also
- [erase](/cpp/container/flat_map/erase/)
