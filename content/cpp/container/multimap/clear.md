---
title: "std::multimap<Key,T,Compare,Allocator>::clear"
source_path: "cpp/container/multimap/clear"
category: "container"
---

Erases all elements from the container. After this call, [size()](/cpp/container/multimap/size/) returns zero.

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
#include <map>
 
void print_info(std::string_view rem, const std::multimap<int, char>& v)
{
    std::cout << rem << "{ ";
    for (const auto& [key, value] : v)
        std::cout << '[' << key << "]:" << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::multimap<int, char> container{{1, 'x'}, {2, 'y'}, {3, 'z'}};
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
- [erase](/cpp/container/multimap/erase/)
