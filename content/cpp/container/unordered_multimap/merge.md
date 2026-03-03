---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::merge"
source_path: "cpp/container/unordered_multimap/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the hash function and key equality predicate of *this.

## Declarations
```cpp
template< class H2, class P2 >
void merge( std::unordered_map<Key, T, H2, P2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_map<Key, T, H2, P2, Allocator>&& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_multimap<Key, T, H2, P2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_multimap<Key, T, H2, P2, Allocator>&& source );
```
_(since C++17)_

## Parameters
- `source`: compatible container to transfer the nodes from

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <utility>
 
// print out a std::pair
template<class Os, class U, class V>
Os& operator<<(Os& os, const std::pair<U,V>& p)
{
    return os << '{' << p.first << ", " << p.second << '}';
}
 
// print out an associative container
template<class Os, class K, class V>
Os& operator<<(Os& os, const std::unordered_multimap<K, V>& v)
{
    os << '[' << v.size() << "] {";
    bool o{};
    for (const auto& e : v)
        os << (o ? ", " : (o = 1, "")) << e;
    return os << "}\n";
}
 
int main()
{
    std::unordered_multimap<std::string, int>
        p{{"C", 3}, {"B", 2}, {"A", 1}, {"A", 0}},
        q{{"E", 6}, {"E", 7}, {"D", 5}, {"A", 4}};
 
    std::cout << "p: " << p << "q: " << q;
 
    p.merge(q);
 
    std::cout << "p.merge(q);\n" << "p: " << p << "q: " << q;
}
```

## See also
- [extract](/cpp/container/unordered_multimap/extract/)
- [insert](/cpp/container/unordered_multimap/insert/)
