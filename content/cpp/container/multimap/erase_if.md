---
title: "std::erase_if (std::multimap)"
source_path: "cpp/container/multimap/erase_if"
header: "<map>"
category: "container"
since: "C++20"
---

Erases all elements that satisfy the predicate pred from c.

## Declarations
```cpp
template< class Key, class T, class Compare, class Alloc,
class Pred >
std::multimap<Key, T, Compare, Alloc>::size_type
erase_if( std::multimap<Key, T, Compare, Alloc>& c,
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
#include <map>
 
void println(auto rem, auto const& container)
{
    std::cout << rem << '{';
    for (char sep[]{0, ' ', 0}; const auto& [key, value] : container)
        std::cout << sep << '{' << key << ", " << value << '}', *sep = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::multimap<int, char> data
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
