---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::emplace"
source_path: "cpp/container/flat_multimap/emplace"
category: "container"
since: "C++23"
---

Inserts a new element into the container constructed in-place with the given args.

## Declarations
```cpp
template< class... Args >
iterator emplace( Args&&... args );
```
_(since C++23)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
#include <flat_map>
 
int main()
{
    std::flat_multimap<std::string, std::string> m;
 
    // uses pair's move constructor
    m.emplace(std::make_pair(std::string("a"), std::string("a")));
 
    // uses pair's converting move constructor
    m.emplace(std::make_pair("b", "abcd"));
 
    // uses pair's template constructor
    m.emplace("d", "ddd");
 
    // emplace with duplicate key 
    m.emplace("d", "DDD");
 
    // uses pair's piecewise constructor
    m.emplace(std::piecewise_construct,
              std::forward_as_tuple("c"),
              std::forward_as_tuple(10, 'c'));
 
    for (const auto& p : m)
        std::cout << p.first << " => " << p.second << '\n';
}
```

## See also
- [emplace_hint](/cpp/container/flat_multimap/emplace_hint/)
- [insert](/cpp/container/flat_multimap/insert/)
