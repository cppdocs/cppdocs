---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::insert_or_assign"
source_path: "cpp/container/unordered_map/insert_or_assign"
category: "container"
since: "C++17"
---

1,4) If a key equivalent to k already exists in the container, assigns [std::forward](/cpp/utility/forward/)<M>(obj) to the [mapped_type](/cpp/container/unordered_map/#Member_types) corresponding to the key k. If the key does not exist, inserts the new value as if by [insert](/cpp/container/unordered_map/insert/), constructing it from value_type(k, [std::forward](/cpp/utility/forward/)<M>(obj)).

## Declarations
```cpp
template< class M >
std::pair<iterator, bool> insert_or_assign( const Key& k, M&& obj );
```
_(since C++17)_

```cpp
template< class M >
std::pair<iterator, bool> insert_or_assign( Key&& k, M&& obj );
```
_(since C++17)_

```cpp
template< class K, class M >
std::pair<iterator, bool> insert_or_assign( K&& k, M&& obj );
```
_(since C++26)_

```cpp
template< class M >
iterator insert_or_assign( const_iterator hint, const Key& k, M&& obj );
```
_(since C++17)_

```cpp
template< class M >
iterator insert_or_assign( const_iterator hint, Key&& k, M&& obj );
```
_(since C++17)_

```cpp
template< class K, class M >
iterator insert_or_assign( const_iterator hint, K&& k, M&& obj );
```
_(since C++26)_

## Parameters
- `k`: the key used both to look up and to insert if not found
- `hint`: iterator to the position before which the new element will be inserted
- `obj`: the value to insert or assign

## Notes
insert_or_assign returns more information than [operator](/cpp/container/unordered_map/operator_at/)[] and does not require default-constructibility of the mapped type.

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
 
void print_node(const auto& node)
{
    std::cout << '[' << node.first << "] = " << node.second << '\n';
}
 
void print_result(auto const& pair)
{
    std::cout << (pair.second ? "inserted: " : "assigned: ");
    print_node(*pair.first);
}
 
int main()
{
    std::unordered_map<std::string, std::string> myMap;
 
    print_result(myMap.insert_or_assign("a", "apple"));
    print_result(myMap.insert_or_assign("b", "banana"));
    print_result(myMap.insert_or_assign("c", "cherry"));
    print_result(myMap.insert_or_assign("c", "clementine"));
 
    for (const auto& node : myMap)
        print_node(node);
}
```

## See also
- [operator[]](/cpp/container/unordered_map/operator_at/)
- [at](/cpp/container/unordered_map/at/)
- [insert](/cpp/container/unordered_map/insert/)
- [emplace](/cpp/container/unordered_map/emplace/)
