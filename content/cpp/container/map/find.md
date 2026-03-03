---
title: "std::map<Key,T,Compare,Allocator>::find"
source_path: "cpp/container/map/find"
category: "container"
since: "C++14"
---

1,2) Finds an element with key equivalent to key.

## Declarations
```cpp
iterator find( const Key& key );
```

```cpp
const_iterator find( const Key& key ) const;
```

```cpp
template< class K >
iterator find( const K& x );
```
_(since C++14)_

```cpp
template< class K >
const_iterator find( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
An iterator to the requested element. If no such element is found, past-the-end (see [end()](/cpp/container/map/end/)) iterator is returned.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers; overloads (3,4)

## Example
```cpp
#include <iostream>
#include <map>
 
struct LightKey
{
    int x;
};
 
struct FatKey
{
    int x;
    int data[1000]; // a heavy blob
};
 
// As detailed above, the container must use std::less<> (or other transparent
// Comparator) to access these overloads. This includes standard overloads,
// such as comparison between std::string and std::string_view.
bool operator<(const FatKey& fk, const LightKey& lk) { return fk.x < lk.x; }
bool operator<(const LightKey& lk, const FatKey& fk) { return lk.x < fk.x; }
bool operator<(const FatKey& fk1, const FatKey& fk2) { return fk1.x < fk2.x; }
 
int main()
{
    // Simple comparison demo.
    std::map<int, char> example{{1, 'a'}, {2, 'b'}};
 
    if (auto search = example.find(2); search != example.end())
        std::cout << "Found " << search->first << ' ' << search->second << '\n';
    else
        std::cout << "Not found\n";
 
    // Transparent comparison demo.
    std::map<FatKey, char, std::less<>> example2{{{1, {}}, 'a'}, {{2, {}}, 'b'}};
 
    LightKey lk = {2};
    if (auto search = example2.find(lk); search != example2.end())
        std::cout << "Found " << search->first.x << ' ' << search->second << '\n';
    else
        std::cout << "Not found\n";
 
    // Obtaining const iterators.
    // Compiler decides whether to return iterator of (non) const type by way of
    // accessing map; to prevent intentional modification, one of the simplest
    // options is to access the map via a constant reference.
    const auto& example2ref = example2;
    if (auto search = example2ref.find(lk); search != example2.end())
    {
        std::cout << "Found " << search->first.x << ' ' << search->second << '\n';
    //  search->second = 'c'; // error: assignment of member
                              // 'std::pair<const FatKey, char>::second'
                              // in read-only object
    }
}
```

## See also
- [at](/cpp/container/map/at/)
- [operator[]](/cpp/container/map/operator_at/)
- [count](/cpp/container/map/count/)
- [equal_range](/cpp/container/map/equal_range/)
