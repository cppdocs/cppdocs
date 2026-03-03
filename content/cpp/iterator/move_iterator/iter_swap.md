---
title: "iter_swap(std::move_iterator)"
source_path: "cpp/iterator/move_iterator/iter_swap"
category: "iterator"
since: "C++20"
---

Swaps the objects pointed to by two underlying iterators.

## Declarations
```cpp
template< std::indirectly_swappable<Iter> Iter2 >
friend constexpr void iter_swap( const move_iterator& x,
const std::move_iterator<Iter2>& y )
noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `x, y`: move iterators to the elements to swap

## Example
```cpp
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::string> p{"AA", "EE"},
                             q{"ⱯⱯ", "ƎƎ"};
 
    std::move_iterator<std::vector<std::string>::iterator>
        x = std::make_move_iterator(p.begin()),
        y = std::make_move_iterator(q.begin());
 
    std::cout << *x << ' ' << *y << '\n';
 
    iter_swap(x, y); // ADL
 
    std::cout << *x << ' ' << *y << '\n';
}
```

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/iterator/reverse_iterator/iter_swap/)
