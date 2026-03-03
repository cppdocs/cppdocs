---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::merge"
source_path: "cpp/container/unordered_multiset/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the hash function and key equality predicate of *this.

## Declarations
```cpp
template< class H2, class P2 >
void merge( std::unordered_set<Key, H2, P2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_set<Key, H2, P2, Allocator>&& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_multiset<Key, H2, P2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class H2, class P2 >
void merge( std::unordered_multiset<Key, H2, P2, Allocator>&& source );
```
_(since C++17)_

## Parameters
- `source`: compatible container to transfer the nodes from

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <unordered_set>
 
// print out a container
template<class Os, class K>
Os& operator<<(Os& os, const std::unordered_multiset<K>& v)
{
    os << '[' << v.size() << "] {";
    bool o{};
    for (const auto& e : v)
        os << (o ? ", " : (o = 1, " ")) << e;
    return os << " }\n";
}
 
int main()
{
    std::unordered_multiset<char>
        p{'C', 'B', 'B', 'A'}, 
        q{'E', 'D', 'E', 'C'};
 
    std::cout << "p: " << p << "q: " << q;
 
    p.merge(q);
 
    std::cout << "p.merge(q);\n" << "p: " << p << "q: " << q;
}
```

## See also
- [extract](/cpp/container/unordered_multiset/extract/)
- [insert](/cpp/container/unordered_multiset/insert/)
