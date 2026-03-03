---
title: "std::swap(std::priority_queue)"
source_path: "cpp/container/priority_queue/swap2"
header: "<queue>"
category: "container"
since: "C++17"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
template< class T, class Container, class Compare >
void swap( std::priority_queue<T, Container, Compare>& lhs,
std::priority_queue<T, Container, Compare>& rhs );
```
_(since C++11) (until C++17)_

```cpp
template< class T, class Container, class Compare >
void swap( std::priority_queue<T, Container, Compare>& lhs,
std::priority_queue<T, Container, Compare>& rhs )
noexcept(/* see below */);
```
_(since C++17)_

## Parameters
- `lhs, rhs`: containers whose contents to swap

## Return value
(none)

## Notes
Although the overloads of [std::swap](/cpp/utility/swap/) for container adaptors are introduced in C++11, container adaptors can already be swapped by [std::swap](/cpp/utility/swap/) in C++98. Such calls to [std::swap](/cpp/utility/swap/) usually have linear time complexity, but better complexity may be provided.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
 
int main()
{
    std::priority_queue<int> alice;
    std::priority_queue<int> bob;
 
    auto print = [](const auto& title, const auto& cont)
    {
        std::cout << title << " size=" << cont.size();
        std::cout << " top=" << cont.top() << '\n';
    };
 
    for (int i = 1; i < 4; ++i)
        alice.push(i);
    for (int i = 7; i < 11; ++i)
        bob.push(i);
 
    // Print state before swap
    print("Alice:", alice);
    print("Bobby:", bob);
 
    std::cout << "-- SWAP\n";
    std::swap(alice, bob);
 
    // Print state after swap
    print("Alice:", alice);
    print("Bobby:", bob);
}
```

## See also
- [swap](/cpp/container/priority_queue/swap/)
