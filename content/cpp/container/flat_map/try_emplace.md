---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::try_emplace"
source_path: "cpp/container/flat_map/try_emplace"
category: "container"
since: "C++23"
---

If a key equivalent to k already exists in the container, does nothing. Otherwise, inserts a new element into the underlying containers [c](/cpp/container/flat_map/#Member_objects) with key k and value constructed with args.

## Declarations
```cpp
template< class... Args >
std::pair<iterator, bool> try_emplace( const key_type& k, Args&&... args );
```
_(since C++23)_

```cpp
template< class... Args >
std::pair<iterator, bool> try_emplace( key_type&& k, Args&&... args );
```
_(since C++23)_

```cpp
template< class K, class... Args >
std::pair<iterator, bool> try_emplace( K&& k, Args&&... args );
```
_(since C++23)_

```cpp
template< class... Args >
iterator try_emplace( const_iterator hint, const key_type& k, Args&&... args );
```
_(since C++23)_

```cpp
template< class... Args >
iterator try_emplace( const_iterator hint, key_type&& k, Args&&... args );
```
_(since C++23)_

```cpp
template< class K, class... Args >
iterator try_emplace( const_iterator hint, K&& k, Args&&... args );
```
_(since C++23)_

## Parameters
- `k`: the key used both to look up and to insert if not found
- `hint`: iterator to the position before which the new element will be inserted
- `args`: arguments to forward to the constructor of the element

## Notes
Unlike [insert](/cpp/container/flat_map/insert/) or [emplace](/cpp/container/flat_map/emplace/), these functions do not move from rvalue arguments if the insertion does not happen, which makes it easy to manipulate maps whose values are move-only types, such as [std::flat_map](/cpp/container/flat_map/)<[std::string](/cpp/string/basic_string/), [std::unique_ptr](/cpp/memory/unique_ptr/)<foo>>. In addition, try_emplace treats the key and the arguments to the mapped_type separately, unlike [emplace](/cpp/container/flat_map/emplace/), which requires the arguments to construct a value_type (that is, a [std::pair](/cpp/utility/pair/)).

Overloads ([3,6](#Version_3)) can be called without constructing an object of type key_type.

## Example
```cpp
#include <flat_map>
#include <iostream>
#include <string>
#include <utility>
 
void print_node(const auto& node)
{
    std::cout << '[' << node.first << "] = " << node.second << '\n';
}
 
void print_result(auto const& pair)
{
    std::cout << (pair.second ? "inserted: " : "ignored:  ");
    print_node(*pair.first);
}
 
int main()
{
    using namespace std::literals;
    std::map<std::string, std::string> m;
 
    print_result(m.try_emplace( "a", "a"s));
    print_result(m.try_emplace( "b", "abcd"));
    print_result(m.try_emplace( "c", 10, 'c'));
    print_result(m.try_emplace( "c", "Won't be inserted"));
 
    for (const auto& p : m)
        print_node(p);
}
```

## See also
- [emplace](/cpp/container/flat_map/emplace/)
- [emplace_hint](/cpp/container/flat_map/emplace_hint/)
- [insert](/cpp/container/flat_map/insert/)
- [insert_or_assign](/cpp/container/flat_map/insert_or_assign/)
