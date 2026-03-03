---
title: "std::list<T,Allocator>::empty"
source_path: "cpp/container/list/empty"
category: "container"
---

Checks if the container has no elements, i.e. whether begin() == end().

## Declarations
```cpp
bool empty() const;
```
_(noexcept since C++11)_

## Return value
true if the container is empty, false otherwise.

## Example
```cpp
#include <list>
#include <iostream>
 
int main()
{
    std::list<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.push_back(42);
    numbers.push_back(13317); 
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/list/size/)
- [empty](/cpp/iterator/empty/)
