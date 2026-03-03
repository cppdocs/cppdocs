---
title: "std::swap(std::map)"
source_path: "cpp/container/map/swap2"
header: "<map>"
category: "container"
since: "C++17"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::map](/cpp/container/map/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class Key, class T, class Compare, class Alloc >
void swap( std::map<Key, T, Compare, Alloc>& lhs,
std::map<Key, T, Compare, Alloc>& rhs );
```
_(until C++17)_

```cpp
template< class Key, class T, class Compare, class Alloc >
void swap( std::map<Key, T, Compare, Alloc>& lhs,
std::map<Key, T, Compare, Alloc>& rhs )
noexcept(/* see below */);
```
_(since C++17)_

## Parameters
- `lhs, rhs`: containers whose contents to swap

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <map>
 
int main()
{
    std::map<int, char> alice{{1, 'a'}, {2, 'b'}, {3, 'c'}};
    std::map<int, char> bob{{7, 'Z'}, {8, 'Y'}, {9, 'X'}, {10, 'W'}};
 
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
- [swap](/cpp/container/map/swap/)
