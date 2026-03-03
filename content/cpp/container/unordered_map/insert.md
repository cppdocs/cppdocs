---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::insert"
source_path: "cpp/container/unordered_map/insert"
category: "container"
since: "C++11"
---

Inserts element(s) into the container, if the container doesn't already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator, bool> insert( const value_type& value );
```
_(since C++11)_

```cpp
std::pair<iterator, bool> insert( value_type&& value );
```
_(since C++17)_

```cpp
template< class P >
std::pair<iterator, bool> insert( P&& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator hint, const value_type& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator hint, value_type&& value );
```
_(since C++17)_

```cpp
template< class P >
iterator insert( const_iterator hint, P&& value );
```
_(since C++11)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```
_(since C++11)_

```cpp
void insert( std::initializer_list<value_type> ilist );
```
_(since C++11)_

```cpp
insert_return_type insert( node_type&& nh );
```
_(since C++17)_

```cpp
iterator insert( const_iterator hint, node_type&& nh );
```
_(since C++17)_

## Parameters
- `hint`: iterator, used as a suggestion as to where to insert the content
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `nh`: a compatible node handle

## Notes
The hinted insert (4-6) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/unordered_map/size/) before and after.

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
 
int main ()
{
    std::unordered_map<int, std::string> dict = {{1, "one"}, {2, "two"}};
    dict.insert({3, "three"});
    dict.insert(std::make_pair(4, "four"));
    dict.insert({{4, "another four"}, {5, "five"}});
 
    const bool ok = dict.insert({1, "another one"}).second;
    std::cout << "inserting 1 => \"another one\" "
              << (ok ? "succeeded" : "failed") << '\n';
 
    std::cout << "contents:\n";
    for (auto& p : dict)
        std::cout << ' ' << p.first << " => " << p.second << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2005 | C++11 | overloads (3,6) would only participate in overloadresolution if P is implicitly convertible to value_type | only participates if value_typeis constructible from P&& |

## See also
- [emplace](/cpp/container/unordered_map/emplace/)
- [emplace_hint](/cpp/container/unordered_map/emplace_hint/)
- [insert_or_assign](/cpp/container/unordered_map/insert_or_assign/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
