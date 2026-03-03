---
title: "std::swap(std::array)"
source_path: "cpp/container/array/swap2"
header: "<array>"
category: "container"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
template< class T, std::size_t N >
void swap( std::array<T, N>& lhs,
std::array<T, N>& rhs );
```
_(since C++11) (until C++17)_

```cpp
template< class T, std::size_t N >
void swap( std::array<T, N>& lhs,
std::array<T, N>& rhs )
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
#include <array>
 
int main()
{
    std::array<int, 3> alice{1, 2, 3};
    std::array<int, 3> bob{7, 8, 9};
 
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
- [swap](/cpp/container/array/swap/)
