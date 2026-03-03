---
title: "std::map<Key,T,Compare,Allocator>::merge"
source_path: "cpp/container/map/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the comparison object of *this.
If there is an element in *this with key equivalent to the key of an element from source, then that element is not extracted from source.
No elements are copied or moved, only the internal pointers of the container nodes are repointed. All pointers and references to the transferred elements remain valid, but now refer into *this, not into source.

## Declarations
```cpp
template< class C2 >
void merge( std::map<Key, T, C2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::map<Key, T, C2, Allocator>&& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::multimap<Key, T, C2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::multimap<Key, T, C2, Allocator>&& source );
```
_(since C++17)_

## Parameters
- `source`: compatible container to transfer the nodes from

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <map>
#include <string>
 
int main()
{
    std::map<int, std::string> ma{{1, "apple"}, {5, "pear"}, {10, "banana"}};
    std::map<int, std::string> mb{{2, "zorro"}, {4, "batman"}, {5, "X"}, {8, "alpaca"}};
    std::map<int, std::string> u;
    u.merge(ma);
    std::cout << "ma.size(): " << ma.size() << '\n';
    u.merge(mb);
    std::cout << "mb.size(): " << mb.size() << '\n';
    std::cout << "mb.at(5): " << mb.at(5) << '\n';
    for (auto const& kv : u)
        std::cout << kv.first << ", " << kv.second << '\n';
}
```

## See also
- [extract](/cpp/container/map/extract/)
- [insert](/cpp/container/map/insert/)
