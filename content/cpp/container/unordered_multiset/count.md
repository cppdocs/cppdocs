---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::count"
source_path: "cpp/container/unordered_multiset/count"
category: "container"
since: "C++11"
---

1) Returns the number of elements with key that compares equal to the specified argument key.

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
    std::unordered_multiset set{2, 7, 1, 8, 2, 8, 1, 8, 2, 8};
 
    std::cout << "The set is:\n";
    for (int e : set)
        std::cout << e << ' ';
 
    const auto [min, max] = std::ranges::minmax(set);
 
    std::cout << "\nNumbers [" << min << ".." << max << "] frequency:\n";
 
    for (int i{min}; i <= max; ++i)
        std::cout << i << ':' << set.count(i) << "; ";
    std::cout << '\n';
}
```

## See also
- [find](/cpp/container/unordered_multiset/find/)
- [contains](/cpp/container/unordered_multiset/contains/)
- [equal_range](/cpp/container/unordered_multiset/equal_range/)
