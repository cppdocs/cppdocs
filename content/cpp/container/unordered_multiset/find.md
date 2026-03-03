---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::find"
source_path: "cpp/container/unordered_multiset/find"
category: "container"
since: "C++11"
---

1,2) Finds an element with key equivalent to key. If there are several elements with the requested key in the container, any of them may be returned.

## Declarations
```cpp
iterator find( const Key& key );
```
_(since C++11)_

```cpp
const_iterator find( const Key& key ) const;
```
_(since C++11)_

```cpp
template< class K >
iterator find( const K& x );
```
_(since C++20)_

```cpp
template< class K >
const_iterator find( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
An iterator to the requested element. If no such element is found, past-the-end (see [end()](/cpp/container/unordered_multiset/end/)) iterator is returned.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_unordered_lookup
201811L
(C++20)
Heterogeneous comparison lookup in unordered associative containers; overloads (3,4)

## Example
```cpp
#include <iostream>
#include <unordered_set>
 
int main()
{
    // Simple comparison demo.
    std::unordered_multiset<int> example{1, 2, 3, 4};
 
    if (auto search = example.find(2); search != example.end())
        std::cout << "Found " << (*search) << '\n';
    else
        std::cout << "Not found\n";
}
```

## See also
- [count](/cpp/container/unordered_multiset/count/)
- [equal_range](/cpp/container/unordered_multiset/equal_range/)
