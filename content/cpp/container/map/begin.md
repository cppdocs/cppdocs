---
title: "std::map<Key,T,Compare,Allocator>::begin, std::map<Key,T,Compare,Allocator>::cbegin"
source_path: "cpp/container/map/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the map.

## Declarations
```cpp
iterator begin();
```
_(noexcept since C++11)_

```cpp
const_iterator begin() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the first element.

## Notes
libc++ backports cbegin() to C++98 mode.

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
- [endcend](/cpp/container/map/end/)
- [begincbegin](/cpp/iterator/begin/)
