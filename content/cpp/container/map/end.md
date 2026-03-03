---
title: "std::map<Key,T,Compare,Allocator>::end, std::map<Key,T,Compare,Allocator>::cend"
source_path: "cpp/container/map/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the map.

## Declarations
```cpp
iterator end();
```
_(noexcept since C++11)_

```cpp
const_iterator end() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the element following the last element.

## Notes
libc++ backports cend() to C++98 mode.

## Example
```cpp
#include <iostream>
#include <map>
 
int main()
{
    std::map<int, float> num_map;
    num_map[4] = 4.13;
    num_map[9] = 9.24;
    num_map[1] = 1.09;
    // Calls num_map.begin() and num_map.end()
    for (auto it = num_map.begin(); it != num_map.end(); ++it)
        std::cout << it->first << ", " << it->second << '\n';
}
```

## See also
- [begincbegin](/cpp/container/map/begin/)
- [endcend](/cpp/iterator/end/)
