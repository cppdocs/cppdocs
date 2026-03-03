---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::insert_or_assign"
source_path: "cpp/container/flat_map/insert_or_assign"
category: "container"
since: "C++23"
---

1,2) If a key equivalent to k already exists in the container, assigns [std::forward](/cpp/utility/forward/)<M>(obj) to the [mapped_type](/cpp/container/flat_map/#Member_types) corresponding to the key k. If the key does not exist, inserts the new value as if by
(1,2) try_emplace([std::forward](/cpp/utility/forward/)<decltype(k)>(k), [std::forward](/cpp/utility/forward/)<M>(obj)),(4,5) try_emplace(hint, [std::forward](/cpp/utility/forward/)<decltype(k)>(k), [std::forward](/cpp/utility/forward/)<M>(obj)).

## Declarations
```cpp
template< class M >
std::pair<iterator, bool> insert_or_assign( const key_type& k, M&& obj );
```
_(since C++23)_

```cpp
template< class M >
std::pair<iterator, bool> insert_or_assign( key_type&& k, M&& obj );
```
_(since C++23)_

```cpp
template< class K, class M >
std::pair<iterator, bool> insert_or_assign( K&& k, M&& obj );
```
_(since C++23)_

```cpp
template< class M >
iterator insert_or_assign( const_iterator hint, const key_type& k, M&& obj );
```
_(since C++23)_

```cpp
template< class M >
iterator insert_or_assign( const_iterator hint, key_type&& k, M&& obj );
```
_(since C++23)_

```cpp
template< class K, class M >
iterator insert_or_assign( const_iterator hint, K&& k, M&& obj );
```
_(since C++23)_

## Parameters
- `k`: the key used both to look up and to insert if not found
- `hint`: iterator to the position before which the new element will be inserted
- `obj`: the value to insert or assign

## Notes
insert_or_assign returns more information than [operator](/cpp/container/flat_map/operator_at/)[] and does not require default-constructibility of the mapped type.

## Example
```cpp
#include <flat_map>
#include <iostream>
#include <string>
 
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
    std::flat_map<std::string, std::string> map;
 
    print_result(map.insert_or_assign("a", "apple"));
    print_result(map.insert_or_assign("b", "banana"));
    print_result(map.insert_or_assign("c", "cherry"));
    print_result(map.insert_or_assign("c", "clementine"));
 
    for (const auto& node : map)
        print_node(node);
}
```

## See also
- [operator[]](/cpp/container/flat_map/operator_at/)
- [at](/cpp/container/flat_map/at/)
- [insert](/cpp/container/flat_map/insert/)
- [emplace](/cpp/container/flat_map/emplace/)
- [try_emplace](/cpp/container/flat_map/try_emplace/)
