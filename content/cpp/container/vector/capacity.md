---
title: "std::vector<T,Allocator>::capacity"
source_path: "cpp/container/vector/capacity"
category: "container"
---

Returns the number of elements that the container has currently allocated space for.

## Declarations
```cpp
size_type capacity() const;
```
_(noexcept since C++11)(constexpr since C++20)_

## Return value
Capacity of the currently allocated storage.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <vector>
 
int main()
{
    int sz = 100;
    std::vector<int> v;
 
    auto cap = v.capacity();
    std::cout << "Initial size: " << v.size() << ", capacity: " << cap << '\n';
 
    std::cout << "\nDemonstrate the capacity's growth policy."
                 "\nSize:  Capacity:  Ratio:\n" << std::left;
    while (sz-- > 0)
    {
        v.push_back(sz);
        if (cap != v.capacity())
        {
            std::cout << std::setw( 7) << v.size()
                      << std::setw(11) << v.capacity()
                      << std::setw(10) << v.capacity() / static_cast<float>(cap) << '\n';
            cap = v.capacity();
        }
    }
 
    std::cout << "\nFinal size: " << v.size() << ", capacity: " << v.capacity() << '\n';
}
```

## See also
- [size](/cpp/container/vector/size/)
- [reserve](/cpp/container/vector/reserve/)
