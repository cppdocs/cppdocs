---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::find"
source_path: "cpp/container/unordered_map/find"
category: "container"
since: "C++11"
---

1,2) Finds an element with key equivalent to key.

## Declarations
```cpp
iterator find( const Key& key );
```
_(since C++11)_

```cpp
const_iterator find( const Key& key ) const;
```
_(since C++11)_

```cpp
template< class K >
iterator find( const K& x );
```
_(since C++20)_

```cpp
template< class K >
const_iterator find( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
An iterator to the requested element. If no such element is found, past-the-end (see [end()](/cpp/container/unordered_map/end/)) iterator is returned.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_unordered_lookup
201811L
(C++20)
Heterogeneous comparison lookup in unordered associative containers; overloads (3,4)

## Example
```cpp
#include <cstddef>
#include <functional>
#include <iostream>
#include <string>
#include <string_view>
#include <unordered_map>
 
using namespace std::literals;
 
struct string_hash
{
    using hash_type = std::hash<std::string_view>;
    using is_transparent = void;
 
    std::size_t operator()(const char* str) const        { return hash_type{}(str); }
    std::size_t operator()(std::string_view str) const   { return hash_type{}(str); }
    std::size_t operator()(std::string const& str) const { return hash_type{}(str); }
};
 
int main()
{
    // simple comparison demo
    std::unordered_map<int, char> example{{1, 'a'}, {2, 'b'}};
 
    if (auto search = example.find(2); search != example.end())
        std::cout << "Found " << search->first << ' ' << search->second << '\n';
    else
        std::cout << "Not found\n";
 
    // C++20 demo: Heterogeneous lookup for unordered containers (transparent hashing)
    std::unordered_map<std::string, size_t, string_hash, std::equal_to<>> map{{"one"s, 1}};
    std::cout << std::boolalpha
        << (map.find("one")   != map.end()) << '\n'
        << (map.find("one"s)  != map.end()) << '\n'
        << (map.find("one"sv) != map.end()) << '\n';
}
```

## See also
- [at](/cpp/container/unordered_map/at/)
- [operator[]](/cpp/container/unordered_map/operator_at/)
- [count](/cpp/container/unordered_map/count/)
- [equal_range](/cpp/container/unordered_map/equal_range/)
