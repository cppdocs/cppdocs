---
title: "std::inplace_vector<T,N>::clear"
source_path: "cpp/container/inplace_vector/clear"
category: "container"
since: "C++26"
---

Erases all elements from the container. After this call, size() returns zero.

## Declarations
```cpp
constexpr void clear() noexcept;
```
_(since C++26)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
#include <inplace_vector>
 
void print_info(std::string_view rem, const std::inplace_vector<int, 3>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::inplace_vector<int, 3> container{1, 2, 3};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## See also
- [erase](/cpp/container/inplace_vector/erase/)
