---
title: "std::swap(std::flat_multimap)"
source_path: "cpp/container/flat_multimap/swap2"
header: "<flat_map>"
category: "container"
since: "C++23"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for std::flat_multimap. Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( std::flat_multimap& lhs, std::flat_multimap& rhs ) noexcept;
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
#include <flat_map>
 
int main()
{
    std::flat_multimap<int, char> alice{{1, 'a'}, {2, 'b'}, {3, 'c'}};
    std::flat_multimap<int, char> bob{{7, 'Z'}, {8, 'Y'}, {9, 'X'}, {10, 'W'}};
 
    auto print = [](std::pair<const int, char>& n)
    {
        std::cout << ' ' << n.first << ':' << n.second;
    };
 
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
- [swap](/cpp/container/flat_multimap/swap/)
