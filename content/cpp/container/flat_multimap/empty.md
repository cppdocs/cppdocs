---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::empty"
source_path: "cpp/container/flat_multimap/empty"
category: "container"
since: "C++23"
---

Checks if the underlying containers have no elements. Equivalent to: return begin() == end();.

## Declarations
```cpp
bool empty() const noexcept;
```
_(since C++23)_

## Return value
true if the underlying containers are empty, false otherwise.

## Example
```cpp
#include <iostream>
#include <flat_map>
#include <utility>
 
int main()
{
    std::flat_multimap<int,int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.emplace(42, 13);
    numbers.insert(std::make_pair(13317, 123));
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/flat_multimap/size/)
- [empty](/cpp/iterator/empty/)
