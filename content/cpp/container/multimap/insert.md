---
title: "std::multimap<Key,T,Compare,Allocator>::insert"
source_path: "cpp/container/multimap/insert"
category: "container"
since: "C++17"
---

Inserts element(s) into the container.

## Declarations
```cpp
iterator insert( const value_type& value );
```

```cpp
iterator insert( value_type&& value );
```
_(since C++17)_

```cpp
template< class P >
iterator insert( P&& value );
```
_(since C++11)_

```cpp
iterator insert( iterator pos, const value_type& value );
```
_(until C++11)_

```cpp
iterator insert( const_iterator pos, const value_type& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator pos, value_type&& value );
```
_(since C++17)_

```cpp
template< class P >
iterator insert( const_iterator pos, P&& value );
```
_(since C++11)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```

```cpp
void insert( std::initializer_list<value_type> ilist );
```
_(since C++11)_

```cpp
iterator insert( node_type&& nh );
```
_(since C++17)_

```cpp
iterator insert( const_iterator pos, node_type&& nh );
```
_(since C++17)_

## Parameters
- `pos`: iterator to the position before which the new element will be inserted
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `nh`: a compatible node handle

## Example
```cpp
#include <functional>
#include <iostream>
#include <map>
#include <string>
#include <string_view>
#include <utility>
 
template<class M>
void print(const std::string_view rem, const M& mmap)
{
    std::cout << rem << ' ';
    for (const auto& e : mmap)
        std::cout << '{' << e.first << ',' << e.second << "} ";
    std::cout << '\n';
}
 
int main()
{
    // list-initialize
    std::multimap<int, std::string, std::greater<int>> mmap
        {{2, "foo"}, {2, "bar"}, {3, "baz"}, {1, "abc"}, {5, "def"}};
    print("#1", mmap);
 
    // insert using value_type
    mmap.insert(decltype(mmap)::value_type(5, "pqr"));
    print("#2", mmap);
 
    // insert using pair
    mmap.insert(std::pair{6, "uvw"});
    print("#3", mmap);
 
    mmap.insert({7, "xyz"});
    print("#4", mmap);
 
    // insert using initializer_list
    mmap.insert({{5, "one"}, {5, "two"}});
    print("#5", mmap);
 
    // insert using a pair of iterators
    mmap.clear();
    const auto il = {std::pair{1, "ä"}, {2, "ё"}, {2, "ö"}, {3, "ü"}};
    mmap.insert(il.begin(), il.end());
    print("#6", mmap);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 233 | C++98 | pos was just a hint, it could be totally ignored | the insertion is required tobe as close as possible to theposition just prior to pos |
| LWG 264 | C++98 | the complexity of overload (5) was required to be linear ifthe range [first, last) is sorted according to Compare | removed the linear requirementin this special case |
| LWG 371 | C++98 | the order of equivalent elementswas not guaranteed to be preserved | required to be preserved |
| LWG 2005 | C++11 | overloads (3,6) were poorly described | improved the description |

## See also
- [emplace](/cpp/container/multimap/emplace/)
- [emplace_hint](/cpp/container/multimap/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
