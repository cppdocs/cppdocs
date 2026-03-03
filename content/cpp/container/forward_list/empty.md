---
title: "std::forward_list<T,Allocator>::empty"
source_path: "cpp/container/forward_list/empty"
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
#include <forward_list>
#include <iostream>
 
int main()
{
    std::forward_list<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.push_front(42);
    numbers.push_front(13317); 
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [distance](/cpp/iterator/distance/)
