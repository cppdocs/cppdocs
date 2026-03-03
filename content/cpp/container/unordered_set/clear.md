---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::clear"
source_path: "cpp/container/unordered_set/clear"
category: "container"
since: "C++11"
---

Erases all elements from the container. After this call, [size()](/cpp/container/unordered_set/size/) returns zero.

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
#include <unordered_set>
 
void print_info(std::string_view rem, const std::unordered_set<int>& v)
{
    std::cout << rem << "{ ";
    for (const auto& value : v)
        std::cout << value << ' ';
    std::cout << "}\n";
    std::cout << "Size=" << v.size() << '\n';
}
 
int main()
{
    std::unordered_set<int> container{1, 2, 3};
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
- [erase](/cpp/container/unordered_set/erase/)
