---
title: "std::vector<T,Allocator>::shrink_to_fit"
source_path: "cpp/container/vector/shrink_to_fit"
category: "container"
---

Requests the removal of unused capacity.

## Declarations
```cpp
void shrink_to_fit();
```
_(constexpr since C++20)_

## Notes
In libstdc++, shrink_to_fit() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v;
    std::cout << "Default-constructed capacity is " << v.capacity() << '\n';
    v.resize(100);
    std::cout << "Capacity of a 100-element vector is " << v.capacity() << '\n';
    v.resize(50);
    std::cout << "Capacity after resize(50) is " << v.capacity() << '\n';
    v.shrink_to_fit();
    std::cout << "Capacity after shrink_to_fit() is " << v.capacity() << '\n';
    v.clear();
    std::cout << "Capacity after clear() is " << v.capacity() << '\n';
    v.shrink_to_fit();
    std::cout << "Capacity after shrink_to_fit() is " << v.capacity() << '\n';
    for (int i = 1000; i < 1300; ++i)
        v.push_back(i);
    std::cout << "Capacity after adding 300 elements is " << v.capacity() << '\n';
    v.shrink_to_fit();
    std::cout << "Capacity after shrink_to_fit() is " << v.capacity() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 755 | C++98 | std::vector lacked explicit shrink-to-fit operations | provided |
| LWG 2033 | C++98C++11 | 1. the complexity requirement was missing (C++98)2. T was not required to be MoveInsertable (C++11) | 1. added2. required |
| LWG 2223 | C++98C++11 | 1. references, pointers, and iterators were not invalidated (C++98)2. there was no exception safety guarantee (C++11) | 1. they may be invalidated2. added |

## See also
- [size](/cpp/container/vector/size/)
- [capacity](/cpp/container/vector/capacity/)
