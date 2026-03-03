---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::insert"
source_path: "cpp/container/unordered_multiset/insert"
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
_(since C++11)_

```cpp
iterator insert( const_iterator hint, const value_type& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator hint, value_type&& value );
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

## See also
- [emplace](/cpp/container/unordered_multiset/emplace/)
- [emplace_hint](/cpp/container/unordered_multiset/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
