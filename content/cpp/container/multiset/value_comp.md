---
title: "std::multiset<Key,Compare,Allocator>::value_comp"
source_path: "cpp/container/multiset/value_comp"
category: "container"
---

Returns the function object that compares the values. It is the same as [key_comp](/cpp/container/multiset/key_comp/).

## Declarations
```cpp
std::multiset::value_compare value_comp() const;
```

## Return value
The value comparison function object.

## Example
```cpp
#include <iostream>
#include <set>
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
    std::multiset<int, ModCmp> cont{1, 2, 3, 4, 5};
 
    // Same behaviour as key_comp()
    auto comp_func = cont.value_comp();
 
    for (const int val{100}; const int key : cont)
    {
        const bool before = comp_func(key, val);
        const bool after = comp_func(val, key);
 
        std::cout << "Key (" << key << ") ";
        if (!before && !after)
            std::cout << "equivalent to key (" << val << ")\n";
        else if (before)
            std::cout << "goes before key (" << val << ")\n";
        else if (after)
            std::cout << "goes after key (" << val << ")\n";
        else
            std::unreachable();
    }
}
```

## See also
- [key_comp](/cpp/container/multiset/key_comp/)
