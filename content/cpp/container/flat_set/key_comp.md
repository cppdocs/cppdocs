---
title: "std::flat_set<Key,Compare,KeyContainer>::key_comp"
source_path: "cpp/container/flat_set/key_comp"
category: "container"
since: "C++23"
---

Returns the function object that compares the keys, which is a copy of this container's [constructor](/cpp/container/flat_set/flat_set/) argument comp. It is the same as value_comp.

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
#include <flat_set>
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
    std::flat_set<int, ModCmp> cont{1, 2, 3, 4, 5};
 
    auto comp_func = cont.key_comp();
 
    for (const int key : cont)
    {
        const bool before = comp_func(key, 100);
        const bool after = comp_func(100, key);
 
        std::cout << '(' << key << ") ";
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
- [value_comp](/cpp/container/flat_set/value_comp/)
