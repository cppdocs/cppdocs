---
title: "std::swap(std::unordered_set)"
source_path: "cpp/container/unordered_set/swap2"
header: "<unordered_set>"
category: "container"
since: "C++17"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::unordered_set](/cpp/container/unordered_set/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class Key, class Hash, class KeyEqual, class Alloc >
void swap( std::unordered_set<Key, Hash, KeyEqual, Alloc>& lhs,
std::unordered_set<Key, Hash, KeyEqual, Alloc>& rhs );
```
_(since C++11) (until C++17)_

```cpp
template< class Key, class Hash, class KeyEqual, class Alloc >
void swap( std::unordered_set<Key, Hash, KeyEqual, Alloc>& lhs,
std::unordered_set<Key, Hash, KeyEqual, Alloc>& rhs )
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
#include <unordered_set>
 
int main()
{
    std::unordered_set<int> alice{1, 2, 3};
    std::unordered_set<int> bob{7, 8, 9, 10};
 
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
- [swap](/cpp/container/unordered_set/swap/)
