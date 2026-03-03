---
title: "std::experimental::erase_if (std::multiset)"
source_path: "cpp/experimental/multiset/erase_if"
header: "<experimental/set>"
category: "experimental"
---

Erases all elements that satisfy the predicate pred from the container. Equivalent to

## Declarations
```cpp
template< class Key, class Compare, class Alloc, class Pred >
void erase_if( std::multiset<Key, Compare, Alloc>& c, Pred pred );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that determines which elements should be erased

## Example
```cpp
#include <experimental/set>
#include <iostream>
 
template<typename Os, typename Container>
inline Os& operator<<(Os& os, Container const& container)
{
    os << "{ ";
    for (const auto& item : container)
        os << item << ' ';
    return os << '}';
}
 
int main()
{
    std::multiset<int> data{3, 3, 4, 5, 5, 6, 6, 7, 2, 1, 0};
    std::cout << "Original:\n" << data << '\n';
    auto divisible_by_3 = [](auto const& x) { return (x % 3) == 0; };
    std::experimental::erase_if(data, divisible_by_3);
    std::cout << "Erase all items divisible by 3:\n" << data << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
