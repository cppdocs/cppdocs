---
title: "std::flat_set<Key,Compare,KeyContainer>::clear"
source_path: "cpp/container/flat_set/clear"
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
#include <flat_set>
 
void print_info(std::string_view rem, const std::flat_set<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::flat_set<int> container{1, 2, 3};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## See also
- [erase](/cpp/container/flat_set/erase/)
