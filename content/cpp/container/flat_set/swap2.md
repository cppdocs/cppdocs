---
title: "std::swap(std::flat_set)"
source_path: "cpp/container/flat_set/swap2"
header: "<flat_set>"
category: "container"
since: "C++23"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for std::flat_set. Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( std::flat_set& lhs, std::flat_set& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: containers whose contents to swap

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <flat_set>
 
int main()
{
    std::flat_set<int> alice{1, 2, 3};
    std::flat_set<int> bob{7, 8, 9, 10};
 
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
- [swap](/cpp/container/flat_set/swap/)
