---
title: "std::deque<T,Allocator>::empty"
source_path: "cpp/container/deque/empty"
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
#include <deque>
#include <iostream>
 
int main()
{
    std::deque<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.push_back(42);
    numbers.push_back(13317); 
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/deque/size/)
- [empty](/cpp/iterator/empty/)
