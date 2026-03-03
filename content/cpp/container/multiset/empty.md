---
title: "std::multiset<Key,Compare,Allocator>::empty"
source_path: "cpp/container/multiset/empty"
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
#include <iostream>
#include <set>
 
int main()
{
    std::multiset<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.insert(42);
    numbers.insert(19937);
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/multiset/size/)
- [empty](/cpp/iterator/empty/)
