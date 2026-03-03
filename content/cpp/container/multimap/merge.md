---
title: "std::multimap<Key,T,Compare,Allocator>::merge"
source_path: "cpp/container/multimap/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the comparison object of *this.

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
    std::multimap<int, std::string> ma{{1, "apple"}, {5, "pear"}, {10, "banana"}};
    std::multimap<int, std::string> mb{{2, "zorro"}, {4, "batman"}, {5, "X"}, {8, "alpaca"}};
    std::multimap<int, std::string> u;
    u.merge(ma);
    std::cout << "ma.size(): " << ma.size() << '\n';
    u.merge(mb);
    std::cout << "mb.size(): " << mb.size() << '\n';
 
    for (auto const& kv : u)
        std::cout << kv.first << ", " << kv.second << '\n';
}
```

## See also
- [extract](/cpp/container/multimap/extract/)
- [insert](/cpp/container/multimap/insert/)
