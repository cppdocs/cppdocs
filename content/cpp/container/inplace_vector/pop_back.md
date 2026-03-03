---
title: "std::inplace_vector<T,N>::pop_back"
source_path: "cpp/container/inplace_vector/pop_back"
category: "container"
---

Removes the last element of the container.

## Declarations
```cpp
constexpr void pop_back();
```

## Return value
(none)

## Example
```cpp
#include <inplace_vector>
#include <print>
 
int main()
{
    std::inplace_vector<int, 4> numbers{1, 2, 3};
    for (; not numbers.empty(); numbers.pop_back())
        std::println("{}", numbers);
}
```

## See also
- [push_back](/cpp/container/inplace_vector/push_back/)
