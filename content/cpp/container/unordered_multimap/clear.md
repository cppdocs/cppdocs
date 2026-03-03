---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::clear"
source_path: "cpp/container/unordered_multimap/clear"
category: "container"
since: "C++11"
---

Erases all elements from the container. After this call, [size()](/cpp/container/unordered_multimap/size/) returns zero.

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
#include <unordered_map>
 
void print_info(std::string_view rem, const std::unordered_multimap<int, char>& v)
{
    std::cout << rem << "{ ";
    for (const auto& [key, value] : v)
        std::cout << '[' << key << "]:" << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::unordered_multimap<int, char> container{{1, 'x'}, {2, 'y'}, {3, 'z'}};
    print_info("Before clear: ", container);
    container.clear();
    print_info("After clear: ", container);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2550 | C++11 | for unordered associative containers, unclear if complexityis linear in the number of elements or buckets | clarified that it's linear in the number of elements |

## See also
- [erase](/cpp/container/unordered_multimap/erase/)
