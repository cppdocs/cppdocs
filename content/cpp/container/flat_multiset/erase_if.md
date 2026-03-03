---
title: "std::erase_if (std::flat_multiset)"
source_path: "cpp/container/flat_multiset/erase_if"
header: "<flat_set>"
category: "container"
since: "C++23"
---

Erases all elements that satisfy the predicate pred from c.

## Declarations
```cpp
template< class Key, class Compare, class KeyContainer,
class Pred >
std::flat_multiset<Key, Compare, KeyContainer>::size_type
erase_if( std::flat_multiset<Key, Compare, KeyContainer>& c,
Pred pred );
```
_(since C++23)_

## Parameters
- `c`: container adaptor from which to erase
- `pred`: predicate that returns true if the element should be erased

## Return value
The number of erased elements.

## Notes
The algorithm is stable, that is, the order of elements that are not deleted remains unchanged.

## Example
```cpp
#include <iostream>
#include <flat_set>
 
void println(auto rem, auto const& container)
{
    std::cout << rem << '{';
    for (char sep[]{0, ' ', 0}; const auto& item : container)
        std::cout << sep << item, *sep = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::flat_multiset data{3, 3, 4, 5, 5, 6, 6, 7, 2, 1, 0};
    println("Original:\n", data);
 
    auto divisible_by_3 = [](auto const& x) { return (x % 3) == 0; };
 
    const auto count = std::erase_if(data, divisible_by_3);
 
    println("Erase all items divisible by 3:\n", data);
    std::cout << count << " items erased.\n";
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
