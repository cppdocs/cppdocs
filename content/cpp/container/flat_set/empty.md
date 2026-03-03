---
title: "std::flat_set<Key,Compare,KeyContainer>::empty"
source_path: "cpp/container/flat_set/empty"
category: "container"
since: "C++23"
---

Checks if the underlying container has no elements. Equivalent to: return begin() == end();.

## Declarations
```cpp
bool empty() const noexcept;
```
_(since C++23)_

## Return value
true if the underlying container is empty, false otherwise.

## Example
```cpp
#include <iostream>
#include <flat_set>
 
int main()
{
    std::flat_set<int> numbers;
    std::cout << std::boolalpha;
    std::cout << "Initially, numbers.empty(): " << numbers.empty() << '\n';
 
    numbers.insert(42);
    numbers.insert(19937);
    std::cout << "After adding elements, numbers.empty(): " << numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/flat_set/size/)
- [empty](/cpp/iterator/empty/)
