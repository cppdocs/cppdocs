---
title: "std::swap(std::multiset)"
source_path: "cpp/container/multiset/swap2"
header: "<set>"
category: "container"
since: "C++17"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::multiset](/cpp/container/multiset/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class Key, class Compare, class Alloc >
void swap( std::multiset<Key, Compare, Alloc>& lhs,
std::multiset<Key, Compare, Alloc>& rhs );
```
_(until C++17)_

```cpp
template< class Key, class Compare, class Alloc >
void swap( std::multiset<Key, Compare, Alloc>& lhs,
std::multiset<Key, Compare, Alloc>& rhs )
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
#include <set>
 
int main()
{
    std::multiset<int> alice{1, 2, 3};
    std::multiset<int> bob{7, 8, 9, 10};
 
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
- [swap](/cpp/container/multiset/swap/)
