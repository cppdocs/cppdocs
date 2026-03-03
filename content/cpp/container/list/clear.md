---
title: "std::list<T,Allocator>::clear"
source_path: "cpp/container/list/clear"
category: "container"
---

Erases all elements from the container. After this call, [size()](/cpp/container/list/size/) returns zero.

## Declarations
```cpp
void clear();
```
_(noexcept since C++11)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
#include <list>
 
void print_info(std::string_view rem, const std::list<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::list<int> container{1, 2, 3};
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
- [erase](/cpp/container/list/erase/)
