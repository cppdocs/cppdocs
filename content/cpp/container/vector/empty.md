---
title: "std::vector<T,Allocator>::empty"
source_path: "cpp/container/vector/empty"
category: "container"
---

Checks if the container has no elements, i.e. whether begin() == end().

## Declarations
```cpp
bool empty() const;
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
true if the container is empty, false otherwise.

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::vector<int> numbers;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.push_back(42);
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/vector/size/)
- [empty](/cpp/iterator/empty/)
