---
title: "std::set<Key,Compare,Allocator>::merge"
source_path: "cpp/container/set/merge"
category: "container"
since: "C++17"
---

Attempts to extract ("splice") each element in source and insert it into *this using the comparison object of *this.
If there is an element in *this with key equivalent to the key of an element from source, then that element is not extracted from source.
No elements are copied or moved, only the internal pointers of the container nodes are repointed. All pointers and references to the transferred elements remain valid, but now refer into *this, not into source.

## Declarations
```cpp
template< class C2 >
void merge( std::set<Key, C2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::set<Key, C2, Allocator>&& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::multiset<Key, C2, Allocator>& source );
```
_(since C++17)_

```cpp
template< class C2 >
void merge( std::multiset<Key, C2, Allocator>&& source );
```
_(since C++17)_

## Parameters
- `source`: compatible container to transfer the nodes from

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <set>
 
// print out a container
template<class Os, class K>
Os& operator<<(Os& os, const std::set<K>& v)
{
    os << '[' << v.size() << "] {";
    bool o{};
    for (const auto& e : v)
        os << (o ? ", " : (o = 1, " ")) << e;
    return os << " }\n";
}
 
int main()
{
    std::set<char>
        p{'C', 'B', 'B', 'A'}, 
        q{'E', 'D', 'E', 'C'};
 
    std::cout << "p: " << p << "q: " << q;
 
    p.merge(q);
 
    std::cout << "p.merge(q);\n" << "p: " << p << "q: " << q;
}
```

## See also
- [extract](/cpp/container/set/extract/)
- [insert](/cpp/container/set/insert/)
