---
title: "std::deque<T,Allocator>::pop_back"
source_path: "cpp/container/deque/pop_back"
category: "container"
---

Removes the last element of the container.

## Declarations
```cpp
void pop_back();
```

## Return value
(none)

## Example
```cpp
#include <deque>
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
    std::deque<int> numbers{1, 2, 3};
    stq::println("{}", numbers);
    while (not numbers.empty())
    {
        numbers.pop_back();
        stq::println("{}", numbers);
    }
}
```

## See also
- [pop_front](/cpp/container/deque/pop_front/)
- [push_back](/cpp/container/deque/push_back/)
