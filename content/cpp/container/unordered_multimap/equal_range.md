---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::equal_range"
source_path: "cpp/container/unordered_multimap/equal_range"
category: "container"
since: "C++11"
---

1,2) Returns a range containing all elements with key key in the container. The range is defined by two iterators, the first pointing to the first element of the wanted range and the second pointing past the last element of the range.

## Declarations
```cpp
std::pair<iterator, iterator> equal_range( const Key& key );
```
_(since C++11)_

```cpp
std::pair<const_iterator, const_iterator> equal_range( const Key& key ) const;
```
_(since C++11)_

```cpp
template< class K >
std::pair<iterator, iterator> equal_range( const K& x );
```
_(since C++20)_

```cpp
template< class K >
std::pair<const_iterator, const_iterator> equal_range( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value to compare the elements to
- `x`: a value of any type that can be transparently compared with a key

## Return value
[std::pair](/cpp/utility/pair/) containing a pair of iterators defining the wanted range. If there are no such elements, past-the-end (see [end()](/cpp/container/unordered_multimap/end/)) iterators are returned as both elements of the pair.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_unordered_lookup
201811L
(C++20)
Heterogeneous comparison lookup in unordered associative containers, overloads (3,4)

## Example
```cpp
#include <iostream>
#include <unordered_map>
 
int main()
{
    std::unordered_multimap<int,char> map = {{1, 'a'},{1, 'b'},{1, 'd'},{2, 'b'}};
    auto range = map.equal_range(1);
    for (auto it = range.first; it != range.second; ++it)
        std::cout << it->first << ' ' << it->second << '\n';
}
```

## See also
- [find](/cpp/container/unordered_multimap/find/)
- [contains](/cpp/container/unordered_multimap/contains/)
- [count](/cpp/container/unordered_multimap/count/)
- [equal_range](/cpp/algorithm/equal_range/)
