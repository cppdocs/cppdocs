---
title: "std::experimental::erase_if (std::multimap)"
source_path: "cpp/experimental/multimap/erase_if"
header: "<experimental/map>"
category: "experimental"
---

Erases all elements that satisfy the predicate pred from the container. Equivalent to

## Declarations
```cpp
template< class Key, class T, class Compare, class Alloc, class Pred >
void erase_if( std::multimap<Key, T, Compare, Alloc>& c, Pred pred );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that determines which elements should be erased

## Example
```cpp
#include <experimental/map>
#include <iostream>
 
template<typename Os, typename Container>
inline Os& operator<<(Os& os, Container const& cont)
{
    os << '{';
    for (const auto& item : cont)
        os << '{' << item.first << ", " << item.second << '}';
    return os << '}';
}
 
int main()
{
    std::multimap<int, char> data{{1, 'a'},{2, 'b'},{3, 'c'},{4, 'd'},
                                  {5, 'e'},{4, 'f'},{5, 'g'},{5, 'g'}};
    std::cout << "Original:\n" << data << '\n';
    std::experimental::erase_if(data, [](const auto& item)
    {
        return (item.first & 1) == 1;
    });
    std::cout << "Erase items with odd keys:\n" << data << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
