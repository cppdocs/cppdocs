---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::count"
source_path: "cpp/container/unordered_multimap/count"
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
#include <iostream>
#include <string>
#include <unordered_map>
 
int main()
{
    std::unordered_multimap<int, std::string> dict = {
        {1, "one"}, {6, "six"}, {3, "three"}
    };
    dict.insert({4, "four"});
    dict.insert({5, "five"});
    dict.insert({6, "six"});
 
    std::cout << "dict: { ";
    for (auto const& [key, value] : dict)
        std::cout << '[' << key << "]=" << value << ' ';
    std::cout << "}\n\n";
 
    for (int i{1}; i != 8; ++i)
        std::cout << "dict.count(" << i << ") = " << dict.count(i) << '\n';
}
```

## See also
- [find](/cpp/container/unordered_multimap/find/)
- [contains](/cpp/container/unordered_multimap/contains/)
- [equal_range](/cpp/container/unordered_multimap/equal_range/)
