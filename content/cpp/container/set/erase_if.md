---
title: "std::erase_if (std::set)"
source_path: "cpp/container/set/erase_if"
header: "<set>"
category: "container"
since: "C++20"
---

Erases all elements that satisfy the predicate pred from c.

## Declarations
```cpp
template< class Key, class Compare, class Alloc,
class Pred >
std::set<Key, Compare, Alloc>::size_type
erase_if( std::set<Key, Compare, Alloc>& c,
Pred pred );
```
_(since C++20)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that returns true if the element should be erased

## Return value
The number of erased elements.

## Example
```cpp
#include <iostream>
#include <set>
 
void println(auto rem, auto const& container)
{
    std::cout << rem << '{';
    for (char sep[]{0, ' ', 0}; const auto& item : container)
        std::cout << sep << item, *sep = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::set data{3, 3, 4, 5, 5, 6, 6, 7, 2, 1, 0};
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
