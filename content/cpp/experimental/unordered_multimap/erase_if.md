---
title: "std::experimental::erase_if (std::unordered_multimap)"
source_path: "cpp/experimental/unordered_multimap/erase_if"
header: "<experimental/unordered_map>"
category: "experimental"
---

Erases all elements that satisfy the predicate pred from the container. Equivalent to

## Declarations
```cpp
template< class Key, class T, class Hash, class KeyEqual, class Alloc, class Pred >
void erase_if( std::unordered_multimap<Key, T, Hash, KeyEqual, Alloc>& c, Pred pred );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that determines which elements should be erased

## Example
```cpp
#include <experimental/unordered_map>
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
    std::unordered_multimap<int, char> data{{1, 'a'},{2, 'b'},{3, 'c'},{4, 'd'},
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
