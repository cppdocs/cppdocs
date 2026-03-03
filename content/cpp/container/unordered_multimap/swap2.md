---
title: "std::swap(std::unordered_multimap)"
source_path: "cpp/container/unordered_multimap/swap2"
header: "<unordered_map>"
category: "container"
since: "C++17"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::unordered_multimap](/cpp/container/unordered_multimap/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class Key, class T, class Hash, class KeyEqual, class Alloc >
void swap( std::unordered_multimap<Key, T, Hash, KeyEqual, Alloc>& lhs,
std::unordered_multimap<Key, T, Hash, KeyEqual, Alloc>& rhs );
```
_(since C++11) (until C++17)_

```cpp
template< class Key, class T, class Hash, class KeyEqual, class Alloc >
void swap( std::unordered_multimap<Key, T, Hash, KeyEqual, Alloc>& lhs,
std::unordered_multimap<Key, T, Hash, KeyEqual, Alloc>& rhs )
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
#include <unordered_map>
 
int main()
{
    std::unordered_multimap<int, char> alice{{1, 'a'}, {2, 'b'}, {3, 'c'}};
    std::unordered_multimap<int, char> bob{{7, 'Z'}, {8, 'Y'}, {9, 'X'}, {10, 'W'}};
 
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
- [swap](/cpp/container/unordered_multimap/swap/)
