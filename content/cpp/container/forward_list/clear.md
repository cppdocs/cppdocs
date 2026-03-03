---
title: "std::forward_list<T,Allocator>::clear"
source_path: "cpp/container/forward_list/clear"
category: "container"
since: "C++11"
---

Erases all elements from the container.

## Declarations
```cpp
void clear() noexcept;
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string_view>
#include <forward_list>
 
void print_info(std::string_view rem, const std::forward_list<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
}
 
int main()
{
    std::forward_list<int> container{1, 2, 3};
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
- [erase_after](/cpp/container/forward_list/erase_after/)
