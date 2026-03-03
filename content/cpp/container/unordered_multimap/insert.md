---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::insert"
source_path: "cpp/container/unordered_multimap/insert"
header: "<unordered_map>"
category: "container"
since: "C++11"
---

Inserts element(s) into the container.

## Declarations
```cpp
iterator insert( const value_type& value );
```
_(since C++11)_

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
iterator insert( node_type&& nh );
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

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2005 | C++11 | overloads (3,6) would only participate in overloadresolution if P is implicitly convertible to value_type | only participates if value_typeis constructible from P&& |

## See also
- [emplace](/cpp/container/unordered_multimap/emplace/)
- [emplace_hint](/cpp/container/unordered_multimap/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
