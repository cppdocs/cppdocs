---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::value_comp"
source_path: "cpp/container/flat_multimap/value_comp"
category: "container"
since: "C++23"
---

Returns a function object that compares objects of type std::flat_multimap::[value_type](/cpp/container/flat_multimap/#Member_types) (key-value pairs) by using key_comp to compare the first components of the pairs.

## Declarations
```cpp
std::flat_multimap::value_compare value_comp() const;
```
_(since C++23)_

## Return value
The value comparison function object.

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
    std::flat_multimap<int, char, ModCmp> cont;
    cont = {{1, 'a'}, {2, 'b'}, {3, 'c'}, {4, 'd'}, {5, 'e'}};
 
    auto comp_func = cont.value_comp();
 
    for (const std::pair<int, char> val = {100, 'a'}; auto it : cont)
    {
        const bool before = comp_func(it, val);
        const bool after = comp_func(val, it);
 
        std::cout << '(' << it.first << ',' << it.second << ") ";
        if (!before && !after)
            std::cout << "equivalent to key (" << val.first << ")\n";
        else if (before)
            std::cout << "goes before key (" << val.first << ")\n";
        else if (after)
            std::cout << "goes after key (" << val.first << ")\n";
        else
            std::unreachable();
    }
}
```

## See also
- [key_comp](/cpp/container/flat_multimap/key_comp/)
