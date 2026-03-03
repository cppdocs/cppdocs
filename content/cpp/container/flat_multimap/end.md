---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::end, std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::cend"
source_path: "cpp/container/flat_multimap/end"
category: "container"
since: "C++23"
---

Returns an iterator to the element following the last element of the flat_multimap.

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
    std::flat_multimap<int, int> map{{4, 13}, {9, 94}, {1, 19}, {4, 42}};
 
    for (auto it = map.cbegin(); it != map.cend(); ++it)
        std::cout << '[' << it->first << "] = " << it->second << '\n';
 
    // Unlike std::multimap's bidirectional iterators, the std::flat_multimap
    // iterators are random-access, so they can be used with the operator[]:
    auto it = map.cbegin();
    assert(it[1] == 19);
    assert(it[4] == 13);
    assert(it[4] == 42);
    assert(it[9] == 94);
}
```

## See also
- [begincbegin](/cpp/container/flat_multimap/begin/)
- [endcend](/cpp/iterator/end/)
