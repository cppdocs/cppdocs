---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::empty"
source_path: "cpp/container/unordered_multiset/empty"
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
#include <unordered_set>
 
int main()
{
    std::unordered_multiset<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.insert(42);
    numbers.insert(19937);
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/unordered_multiset/size/)
- [empty](/cpp/iterator/empty/)
