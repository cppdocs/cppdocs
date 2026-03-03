---
title: "std::array<T,N>::empty"
source_path: "cpp/container/array/empty"
category: "container"
since: "C++11"
---

Checks if the container has no elements, i.e. whether begin() == end().

## Declarations
```cpp
constexpr bool empty() const noexcept;
```
_(since C++11)_

## Return value
true if the container is empty, false otherwise.

## Example
```cpp
#include <array>
#include <iostream>
 
int main()
{
    std::array<int, 4> numbers{3, 1, 4, 1};
    std::array<int, 0> no_numbers;
 
    std::cout << std::boolalpha;
    std::cout << "numbers.empty(): " << numbers.empty() << '\n';
    std::cout << "no_numbers.empty(): " << no_numbers.empty() << '\n';
}
```

## See also
- [size](/cpp/container/array/size/)
- [empty](/cpp/iterator/empty/)
