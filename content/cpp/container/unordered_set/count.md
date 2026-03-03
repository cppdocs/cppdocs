---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::count"
source_path: "cpp/container/unordered_set/count"
category: "container"
since: "C++11"
---

1) Returns the number of elements with key that compares equal to the specified argument key, which is either 0 or 1 since this container does not allow duplicates.

## Declarations
```cpp
size_type count( const Key& key ) const;
```
_(since C++11)_

```cpp
template< class K >
size_type count( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value of the elements to count
- `x`: a value of any type that can be transparently compared with a key

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_unordered_lookup
201811L
(C++20)
Heterogeneous comparison lookup in unordered associative containers, overload (2)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <unordered_set>
 
int main()
{
    std::unordered_set set{2, 7, 1, 8, 2, 8, 1, 8, 2, 8};
 
    std::cout << "The set is: ";
    for (int e : set)
        std::cout << e << ' ';
 
    const auto [min, max] = std::ranges::minmax(set);
 
    std::cout << "\nNumbers from " << min << " to " << max << " that are in the set: ";
    for (int i{min}; i <= max; ++i)
        if (set.count(i) == 1)
            std::cout << i << ' ';
    std::cout << '\n';
}
```

## See also
- [find](/cpp/container/unordered_set/find/)
- [contains](/cpp/container/unordered_set/contains/)
- [equal_range](/cpp/container/unordered_set/equal_range/)
