---
title: "std::forward_list<T,Allocator>::reverse"
source_path: "cpp/container/forward_list/reverse"
category: "container"
since: "C++11"
---

Reverses the order of the elements in the container. No references or iterators become invalidated.

## Declarations
```cpp
void reverse() noexcept;
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <forward_list>
 
std::ostream& operator<<(std::ostream& ostr, const std::forward_list<int>& list)
{
    for (auto& i : list)
        ostr << ' ' << i;
    return ostr;
}
 
int main()
{
    std::forward_list<int> list = {8, 7, 5, 9, 0, 1, 3, 2, 6, 4};
    std::cout << "initially: " << list << '\n';
 
    list.sort();
    std::cout << "ascending: " << list << '\n';
 
    list.reverse();
    std::cout << "descending:" << list << '\n';
}
```

## See also
- [sort](/cpp/container/forward_list/sort/)
