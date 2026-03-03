---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::begin, std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::cbegin"
source_path: "cpp/container/flat_map/begin"
category: "container"
since: "C++23"
---

Returns an iterator to the first element of the flat_map.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++23)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the first element.

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
- [endcend](/cpp/container/flat_map/end/)
- [begincbegin](/cpp/iterator/begin/)
