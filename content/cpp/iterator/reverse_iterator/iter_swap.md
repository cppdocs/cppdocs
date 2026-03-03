---
title: "std::iter_swap(std::reverse_iterator)"
source_path: "cpp/iterator/reverse_iterator/iter_swap"
category: "iterator"
since: "C++20"
---

Swaps the objects pointed to by two adjusted underlying iterators.

## Declarations
```cpp
template< std::indirectly_swappable<Iter> Iter2 >
friend constexpr void iter_swap( const reverse_iterator& x,
const std::reverse_iterator<Iter2>& y )
noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `x, y`: reverse iterators to the elements to swap

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3};
    std::list l{4, 5, 6};
 
    std::reverse_iterator<std::vector<int>::iterator> r1{v.rbegin()};
    std::reverse_iterator<std::list<int>::iterator> r2{l.rbegin()};
 
    std::cout << *r1 << ' ' << *r2 << '\n';
 
    iter_swap(r1, r2); // ADL
 
    std::cout << *r1 << ' ' << *r2 << '\n';
}
```

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/iterator/move_iterator/iter_swap/)
