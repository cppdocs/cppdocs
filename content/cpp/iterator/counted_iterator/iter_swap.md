---
title: "iter_swap(std::counted_iterator)"
source_path: "cpp/iterator/counted_iterator/iter_swap"
category: "iterator"
since: "C++20"
---

Swaps the objects pointed to by two underlying iterators. The behavior is undefined if either x.count() or y.count() is equal to 0.

## Declarations
```cpp
template< std::indirectly_swappable<I> I2 >
friend constexpr void
iter_swap( const counted_iterator& x, const std::counted_iterator<I2>& y )
noexcept(noexcept(ranges::iter_swap(x.base(), y.base())));
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors to the elements to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    std::vector p{1, 2, 3, 4},
                q{5, 6, 7, 8};
 
    std::counted_iterator<std::vector<int>::iterator> ip{p.begin(), 2};
    std::counted_iterator<std::vector<int>::iterator> iq{q.begin(), 3};
 
    std::cout << *ip << ' ' << *iq << '\n';
    iter_swap(ip, iq); // ADL
    std::cout << *ip << ' ' << *iq << '\n';
 
    std::list x{0, 1, 3};
    std::counted_iterator<std::list<int>::iterator> ix{x.begin(), 2};
//  iter_swap(ip, ix); // error: not indirectly swappable
}
```

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_move](/cpp/iterator/counted_iterator/iter_move/)
