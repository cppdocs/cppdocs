---
title: "std::swap(std::forward_list)"
source_path: "cpp/container/forward_list/swap2"
header: "<forward_list>"
category: "container"
since: "C++17"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::forward_list](/cpp/container/forward_list/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class T, class Alloc >
void swap( std::forward_list<T, Alloc>& lhs,
std::forward_list<T, Alloc>& rhs );
```
_(since C++11) (until C++17)_

```cpp
template< class T, class Alloc >
void swap( std::forward_list<T, Alloc>& lhs,
std::forward_list<T, Alloc>& rhs )
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
#include <forward_list>
 
int main()
{
    std::forward_list<int> alice{1, 2, 3};
    std::forward_list<int> bob{7, 8, 9, 10};
 
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
- [swap](/cpp/container/forward_list/swap/)
