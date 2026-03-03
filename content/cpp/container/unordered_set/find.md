---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::find"
source_path: "cpp/container/unordered_set/find"
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
An iterator to the requested element. If no such element is found, past-the-end (see [end()](/cpp/container/unordered_set/end/)) iterator is returned.

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
#include <source_location>
#include <string>
#include <string_view>
#include <unordered_set>
 
using namespace std::literals;
 
namespace logger { bool enabled{false}; }
 
inline void who(const std::source_location sloc = std::source_location::current())
{
    if (logger::enabled)
        std::cout << sloc.function_name() << '\n';
}
 
struct string_hash // C++20's transparent hashing
{
    using hash_type = std::hash<std::string_view>;
    using is_transparent = void;
 
    std::size_t operator()(const char* str) const
    {
        who();
        return hash_type{}(str);
    }
    std::size_t operator()(std::string_view str) const
    {
        who();
        return hash_type{}(str);
    }
    std::size_t operator()(std::string const& str) const
    {
        who();
        return hash_type{}(str);
    }
};
 
int main()
{
    std::unordered_set<int> example{1, 2, -10};
 
    std::cout << "Simple comparison demo:\n" << std::boolalpha;
    if (auto search = example.find(2); search != example.end())
        std::cout << "Found " << *search << '\n';
    else
        std::cout << "Not found\n";
 
    std::unordered_set<std::string, string_hash, std::equal_to<>> set{"one"s, "two"s};
 
    logger::enabled = true;
    std::cout << "Heterogeneous lookup for unordered containers (transparent hashing):\n"
              << (set.find("one")   != set.end()) << '\n'
              << (set.find("one"s)  != set.end()) << '\n'
              << (set.find("one"sv) != set.end()) << '\n';
}
```

## See also
- [count](/cpp/container/unordered_set/count/)
- [equal_range](/cpp/container/unordered_set/equal_range/)
