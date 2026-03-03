---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::key_comp"
source_path: "cpp/container/flat_map/key_comp"
category: "container"
since: "C++23"
---

Returns the function object that compares the keys, which is a copy of this container's [constructor](/cpp/container/flat_map/flat_map/) argument comp.

## Declarations
```cpp
key_compare key_comp() const;
```
_(since C++23)_

## Return value
The key comparison function object.

## Example
```cpp
#include <iostream>
#include <flat_map>
#include <utility>
 
// Example module 97 key compare function
struct ModCmp
{
    bool operator()(int lhs, int rhs) const
    {
        return (lhs % 97) < (rhs % 97);
    }
};
 
int main()
{
    std::flat_map<int, char, ModCmp> cont;
    cont = {{1, 'a'}, {2, 'b'}, {3, 'c'}, {4, 'd'}, {5, 'e'}};
 
    auto comp_func = cont.key_comp();
 
    for (const auto it : cont)
    {
        const bool before = comp_func(it.first, 100);
        const bool after = comp_func(100, it.first);
 
        std::cout << "Key (" << it.first << ',' << it.second << ") ";
        if (!before && !after)
            std::cout << "equivalent to key (100)\n";
        else if (before)
            std::cout << "goes before key (100)\n";
        else if (after)
            std::cout << "goes after key (100)\n";
        else
            std::unreachable();
    }
}
```

## See also
- [value_comp](/cpp/container/flat_map/value_comp/)
