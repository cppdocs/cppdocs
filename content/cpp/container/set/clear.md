---
title: "std::set<Key,Compare,Allocator>::clear"
source_path: "cpp/container/set/clear"
category: "container"
---

Erases all elements from the container. After this call, [size()](/cpp/container/set/size/) returns zero.

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
#include <set>
 
void print_info(std::string_view rem, const std::set<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::set<int> container{1, 2, 3};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 224 | C++98 | the complexity was log(size()) + N, but N was not defined | corrected to 'linear in size()' |

## See also
- [erase](/cpp/container/set/erase/)
