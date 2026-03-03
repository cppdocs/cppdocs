---
title: "std::multimap<Key,T,Compare,Allocator>::equal_range"
source_path: "cpp/container/multimap/equal_range"
category: "container"
since: "C++14"
---

Returns a range containing all elements with the given key in the container. The range is defined by two iterators, one pointing to the first element that is not less than key and another pointing to the first element greater than key. Alternatively, the first iterator may be obtained with [lower_bound()](/cpp/container/multimap/lower_bound/), and the second with [upper_bound()](/cpp/container/multimap/upper_bound/).

## Declarations
```cpp
std::pair<iterator, iterator> equal_range( const Key& key );
```

```cpp
std::pair<const_iterator, const_iterator> equal_range( const Key& key ) const;
```

```cpp
template< class K >
std::pair<iterator, iterator> equal_range( const K& x );
```
_(since C++14)_

```cpp
template< class K >
std::pair<const_iterator, const_iterator> equal_range( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
[std::pair](/cpp/utility/pair/) containing a pair of iterators defining the wanted range: the first pointing to the first element that is not less than key and the second pointing to the first element greater than key.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers, for overloads (3,4)

## Example
```cpp
#include <iostream>
#include <map>
 
int main()
{
    std::multimap<int, char> dict
    {
        {1, 'A'},
        {2, 'B'},
        {2, 'C'},
        {2, 'D'},
        {4, 'E'},
        {3, 'F'}
    };
 
    auto range = dict.equal_range(2);
 
    for (auto i = range.first; i != range.second; ++i)
        std::cout << i->first << ": " << i->second << '\n';
}
```

## See also
- [find](/cpp/container/multimap/find/)
- [contains](/cpp/container/multimap/contains/)
- [count](/cpp/container/multimap/count/)
- [upper_bound](/cpp/container/multimap/upper_bound/)
- [lower_bound](/cpp/container/multimap/lower_bound/)
- [equal_range](/cpp/algorithm/equal_range/)
