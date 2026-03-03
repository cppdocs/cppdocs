---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::merge"
source_path: "cpp/container/unordered_set/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the hash function and key equality predicate of *this.
If there is an element in *this with key equivalent to the key of an element from source, then that element is not extracted from source.
No elements are copied or moved, only the internal pointers of the container nodes are repointed. All pointers and references to the transferred elements remain valid, but now refer into *this, not into source. Iterators referring to the transferred elements and all iterators referring to *this are invalidated. Iterators to elements remaining in source remain valid.

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
Os& operator<<(Os& os, const std::unordered_set<K>& v)
{
    os << '[' << v.size() << "] {";
    bool o{};
    for (const auto& e : v)
        os << (o ? ", " : (o = 1, " ")) << e;
    return os << " }\n";
}
 
int main()
{
    std::unordered_set<char>
        p{'C', 'B', 'B', 'A'}, 
        q{'E', 'D', 'E', 'C'};
 
    std::cout << "p: " << p << "q: " << q;
 
    p.merge(q);
 
    std::cout << "p.merge(q);\n" << "p: " << p << "q: " << q;
}
```

## See also
- [extract](/cpp/container/unordered_set/extract/)
- [insert](/cpp/container/unordered_set/insert/)
