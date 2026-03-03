---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::try_emplace"
source_path: "cpp/container/unordered_map/try_emplace"
category: "container"
since: "C++17"
---

If a key equivalent to k already exists in the container, does nothing. Otherwise, inserts a new element into the container with key k and value constructed with args. In such case:

## Declarations
```cpp
template< class... Args >
std::pair<iterator, bool> try_emplace( const Key& k, Args&&... args );
```
_(since C++17)_

```cpp
template< class... Args >
std::pair<iterator, bool> try_emplace( Key&& k, Args&&... args );
```
_(since C++17)_

```cpp
template< class K, class... Args >
std::pair<iterator, bool> try_emplace( K&& k, Args&&... args );
```
_(since C++26)_

```cpp
template< class... Args >
iterator try_emplace( const_iterator hint, const Key& k, Args&&... args );
```
_(since C++17)_

```cpp
template< class... Args >
iterator try_emplace( const_iterator hint, Key&& k, Args&&... args );
```
_(since C++17)_

```cpp
template< class K, class... Args >
iterator try_emplace( const_iterator hint, K&& k, Args&&... args );
```
_(since C++26)_

## Parameters
- `k`: the key used both to look up and to insert if not found
- `hint`: iterator to the position before which the new element will be inserted
- `args`: arguments to forward to the constructor of the element

## Notes
Unlike [insert](/cpp/container/unordered_map/insert/) or [emplace](/cpp/container/unordered_map/emplace/), these functions do not move from rvalue arguments if the insertion does not happen, which makes it easy to manipulate maps whose values are move-only types, such as [std::unordered_map](/cpp/container/unordered_map/)<[std::string](/cpp/string/basic_string/), [std::unique_ptr](/cpp/memory/unique_ptr/)<foo>>. In addition, try_emplace treats the key and the arguments to the mapped_type separately, unlike [emplace](/cpp/container/unordered_map/emplace/), which requires the arguments to construct a value_type (that is, a [std::pair](/cpp/utility/pair/)).

Overloads (3,6) can be called without constructing an object of type Key.

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
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
    std::unordered_map<std::string, std::string> m;
 
    print_result(m.try_emplace("a", "a"s));
    print_result(m.try_emplace("b", "abcd"));
    print_result(m.try_emplace("c", 10, 'c'));
    print_result(m.try_emplace("c", "Won't be inserted"));
 
    for (const auto& p : m)
        print_node(p);
}
```

## See also
- [emplace](/cpp/container/unordered_map/emplace/)
- [emplace_hint](/cpp/container/unordered_map/emplace_hint/)
- [insert](/cpp/container/unordered_map/insert/)
