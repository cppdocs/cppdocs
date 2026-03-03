---
title: "std::erase_if (std::flat_multimap)"
source_path: "cpp/container/flat_multimap/erase_if"
header: "<flat_map>"
category: "container"
since: "C++23"
---

Erases all elements that satisfy the predicate pred from c.

## Declarations
```cpp
template< class Key, class T, class Compare, class KeyContainer, class MappedContainer,
class Pred >
std::flat_multimap<Key, T, Compare, KeyContainer, MappedContainer>::size_type
erase_if( std::flat_multimap<Key, T, Compare, KeyContainer, MappedContainer>& c,
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
#include <flat_map>
 
void println(auto rem, auto const& container)
{
    std::cout << rem << '{';
    for (char sep[]{0, ' ', 0}; const auto& [key, value] : container)
        std::cout << sep << '{' << key << ", " << value << '}', *sep = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::flat_multimap<int, char> data
    {
        {1, 'a'}, {2, 'b'}, {3, 'c'}, {4, 'd'},
        {5, 'e'}, {4, 'f'}, {5, 'g'}, {5, 'g'},
    };
    println("Original:\n", data);
 
    const auto count = std::erase_if(data, [](const auto& item)
    {
        auto const& [key, value] = item;
        return (key & 1) == 1;
    });
 
    println("Erase items with odd keys:\n", data);
    std::cout << count << " items removed.\n";
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
