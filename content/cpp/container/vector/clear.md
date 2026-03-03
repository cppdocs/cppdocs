---
title: "std::vector<T,Allocator>::clear"
source_path: "cpp/container/vector/clear"
category: "container"
---

Erases all elements from the container. After this call, [size()](/cpp/container/vector/size/) returns zero.

## Declarations
```cpp
void clear();
```
_(noexcept since C++11)(constexpr since C++20)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
#include <vector>
 
void print_info(std::string_view rem, const std::vector<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << ", Capacity=" << v.capacity() << '\n';
}
 
int main()
{
    std::vector<int> container{1, 2, 3};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2231 | C++11 | complexity guarantee was mistakenly omitted in C++11 | complexity reaffirmed as linear |

## See also
- [erase](/cpp/container/vector/erase/)
