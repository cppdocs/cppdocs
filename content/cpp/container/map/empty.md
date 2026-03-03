---
title: "std::map<Key,T,Compare,Allocator>::empty"
source_path: "cpp/container/map/empty"
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
#include <map>
#include <utility>
 
int main()
{
    std::map<int,int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.emplace(42, 13);
    numbers.insert(std::make_pair(13317, 123));
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/map/size/)
- [empty](/cpp/iterator/empty/)
