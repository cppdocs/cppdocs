---
title: "std::vector<T,Allocator>::pop_back"
source_path: "cpp/container/vector/pop_back"
category: "container"
---

Removes the last element of the container.

## Declarations
```cpp
void pop_back();
```
_(constexpr since C++20)_

## Return value
(none)

## Example
```cpp
#include <vector>
#include <iostream>
 
namespace stq {
template<typename T>
void println(auto, const T& xz)
{
    std::cout << '[';
    bool first{true};
    for (auto const& x : xz)
        std::cout << (first ? first = false, "" : ", ") << x;
    std::cout << "]\n";
}
}
 
int main()
{
    std::vector<int> numbers{1, 2, 3};
    stq::println("{}", numbers);
    while (not numbers.empty())
    {
        numbers.pop_back();
        stq::println("{}", numbers);
    }
}
```

## See also
- [push_back](/cpp/container/vector/push_back/)
