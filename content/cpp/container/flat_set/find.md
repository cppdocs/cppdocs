---
title: "std::flat_set<Key,Compare,KeyContainer>::find"
source_path: "cpp/container/flat_set/find"
category: "container"
since: "C++23"
---

1,2) Finds an element with key equivalent to key.

## Declarations
```cpp
iterator find( const Key& key );
```
_(since C++23)_

```cpp
const_iterator find( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
iterator find( const K& x );
```
_(since C++23)_

```cpp
template< class K >
const_iterator find( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
An iterator to the requested element. If no such element is found, past-the-end (see end()) iterator is returned.

## Example
```cpp
#include <iostream>
#include <flat_set>
 
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
    std::flat_set<int> example{1, 2, 3, 4};
 
    if (auto search = example.find(2); search != example.end())
        std::cout << "Found " << (*search) << '\n';
    else
        std::cout << "Not found\n";
 
    // Transparent comparison demo.
    std::flat_set<FatKey, std::less<>> example2{{1, {}}, {2, {}}, {3, {}}, {4, {}}};
 
    LightKey lk = {2};
    if (auto search = example2.find(lk); search != example2.end())
        std::cout << "Found " << search->x << '\n';
    else
        std::cout << "Not found\n";
}
```

## See also
- [count](/cpp/container/flat_set/count/)
- [equal_range](/cpp/container/flat_set/equal_range/)
