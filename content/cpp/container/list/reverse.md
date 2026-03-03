---
title: "std::list<T,Allocator>::reverse"
source_path: "cpp/container/list/reverse"
category: "container"
---

Reverses the order of the elements in the container. No references or iterators become invalidated.

## Declarations
```cpp
void reverse();
```
_(noexcept since C++11)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <list>
 
std::ostream& operator<<(std::ostream& ostr, const std::list<int>& list)
{
    for (auto& i : list)
        ostr << ' ' << i;
    return ostr;
}
 
int main()
{
    std::list<int> list = {8, 7, 5, 9, 0, 1, 3, 2, 6, 4};
    std::cout << "initially: " << list << '\n';
 
    list.sort();
    std::cout << "ascending: " << list << '\n';
 
    list.reverse();
    std::cout << "descending:" << list << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1207 | C++98 | it was unclear whether iterators and/or references will be invalidated | keep valid |

## See also
- [sort](/cpp/container/list/sort/)
