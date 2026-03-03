---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::extract"
source_path: "cpp/container/unordered_multimap/extract"
category: "container"
since: "C++17"
---

1) Unlinks the node that contains the element pointed to by position and returns a [node handle](/cpp/container/node_handle/) that owns it.

## Declarations
```cpp
node_type extract( const_iterator position );
```
_(since C++17)_

```cpp
node_type extract( const Key& k );
```
_(since C++17)_

```cpp
template< class K >
node_type extract( K&& x );
```
_(since C++23)_

## Parameters
- `position`: a valid iterator into this container
- `k`: a key to identify the node to be extracted
- `x`: a value of any type that can be transparently compared with a key identifying the node to be extracted

## Return value
A [node handle](/cpp/container/node_handle/) that owns the extracted element, or empty node handle in case the element is not found in (2,3).

## Notes
extract is the only way to change a key of a map element without reallocation:

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
#include <unordered_map>
 
void print(std::string_view comment, const auto& data)
{
    std::cout << comment;
    for (auto [k, v] : data)
        std::cout << ' ' << k << '(' << v << ')';
 
    std::cout << '\n';
}
 
int main()
{
    std::unordered_multimap<int, char> cont{{1, 'a'}, {2, 'b'}, {3, 'c'}};
 
    print("Start:", cont);
 
    // Extract node handle and change key
    auto nh = cont.extract(1);
    nh.key() = 4;
 
    print("After extract and before insert:", cont);
 
    // Insert node handle back
    cont.insert(std::move(nh));
 
    print("End:", cont);
}
```

## See also
- [merge](/cpp/container/unordered_multimap/merge/)
- [insert](/cpp/container/unordered_multimap/insert/)
- [erase](/cpp/container/unordered_multimap/erase/)
