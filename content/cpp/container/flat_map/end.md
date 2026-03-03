---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::end, std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::cend"
source_path: "cpp/container/flat_map/end"
category: "container"
since: "C++23"
---

Returns an iterator to the element following the last element of the flat_map.

## Declarations
```cpp
iterator end() noexcept;
```
_(since C++23)_

```cpp
const_iterator end() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the element following the last element.

## Example
```cpp
#include <iostream>
#include <flat_map>
 
int main()
{
    std::flat_map<int, double> map{{4, 4.13}, {9, 9.24}, {1, 1.09}};
 
    for (auto it = map.cbegin(); it != map.cend(); ++it)
        std::cout << '[' << it->first << "] = " << it->second << '\n';
 
    // Unlike std::map's bidirectional iterators, the std::flat_map iterators
    // are random-access, so they can be used with the operator[]:
    auto it = map.cbegin();
    assert(it[0] == map[1]);
    assert(it[1] == map[4]);
    assert(it[2] == map[9]);
}
```

## See also
- [begincbegin](/cpp/container/flat_map/begin/)
- [endcend](/cpp/iterator/end/)
