---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::emplace"
source_path: "cpp/container/flat_map/emplace"
category: "container"
since: "C++23"
---

Inserts a new element into the container constructed in-place with the given args, if there is no element with the key in the container.

## Declarations
```cpp
template< class... Args >
std::pair<iterator, bool> emplace( Args&&... args );
```
_(since C++23)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
A pair consisting of an iterator to the inserted element (or to the element that prevented the insertion) and a bool value set to true if and only if the insertion took place.

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
#include <flat_map>
 
int main()
{
    std::flat_map<std::string, std::string> m;
 
    // uses pair's move constructor
    m.emplace(std::make_pair(std::string("a"), std::string("a")));
 
    // uses pair's converting move constructor
    m.emplace(std::make_pair("b", "abcd"));
 
    // uses pair's template constructor
    m.emplace("d", "ddd");
 
    // emplace with duplicate key has no effect
    m.emplace("d", "DDD");
 
    // uses pair's piecewise constructor
    m.emplace(std::piecewise_construct,
              std::forward_as_tuple("c"),
              std::forward_as_tuple(10, 'c'));
    // an alternative is: m.try_emplace("c", 10, 'c');
 
    for (const auto& p : m)
        std::cout << p.first << " => " << p.second << '\n';
}
```

## See also
- [emplace_hint](/cpp/container/flat_map/emplace_hint/)
- [try_emplace](/cpp/container/flat_map/try_emplace/)
- [insert](/cpp/container/flat_map/insert/)
