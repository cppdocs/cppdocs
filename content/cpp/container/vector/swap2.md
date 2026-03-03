---
title: "std::swap(std::vector)"
source_path: "cpp/container/vector/swap2"
header: "<vector>"
category: "container"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::vector](/cpp/container/vector/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class T, class Alloc >
void swap( std::vector<T, Alloc>& lhs,
std::vector<T, Alloc>& rhs );
```
_(until C++17)_

```cpp
template< class T, class Alloc >
void swap( std::vector<T, Alloc>& lhs,
std::vector<T, Alloc>& rhs )
noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `lhs, rhs`: containers whose contents to swap

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> alice{1, 2, 3};
    std::vector<int> bob{7, 8, 9, 10};
 
    auto print = [](const int& n) { std::cout << ' ' << n; };
 
    // Print state before swap
    std::cout << "Alice:";
    std::for_each(alice.begin(), alice.end(), print);
    std::cout << "\nBobby:";
    std::for_each(bob.begin(), bob.end(), print);
    std::cout << '\n';
 
    std::cout << "-- SWAP\n";
    std::swap(alice, bob);
 
    // Print state after swap
    std::cout << "Alice:";
    std::for_each(alice.begin(), alice.end(), print);
    std::cout << "\nBobby:";
    std::for_each(bob.begin(), bob.end(), print);
    std::cout << '\n';
}
```

## See also
- [swap](/cpp/container/vector/swap/)
