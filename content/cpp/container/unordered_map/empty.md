---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::empty"
source_path: "cpp/container/unordered_map/empty"
category: "container"
since: "C++11"
---

Checks if the container has no elements, i.e. whether begin() == end().

## Declarations
```cpp
bool empty() const noexcept;
```
_(since C++11)_

## Return value
true if the container is empty, false otherwise.

## Example
```cpp
#include <iostream>
#include <unordered_map>
#include <utility>
 
int main()
{
    std::unordered_map<int,int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.emplace(42, 13);
    numbers.insert(std::make_pair(13317, 123));
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/unordered_map/size/)
- [empty](/cpp/iterator/empty/)
