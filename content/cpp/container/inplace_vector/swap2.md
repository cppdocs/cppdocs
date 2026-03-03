---
title: "std::swap(std::inplace_vector)"
source_path: "cpp/container/inplace_vector/swap2"
header: "<inplace_vector>"
category: "container"
since: "C++26"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for std::inplace_vector. Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
constexpr friend void swap( std::inplace_vector& lhs,
std::inplace_vector& rhs ) noexcept(/* see below */);
```
_(since C++26)_

## Parameters
- `lhs, rhs`: containers whose contents to swap

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<int, 4> alice{1, 2, 3};
    std::inplace_vector<int, 4> bob{7, 8, 9, 10};
 
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
- [swap](/cpp/container/inplace_vector/swap/)
