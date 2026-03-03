---
title: "std::multiset<Key,Compare,Allocator>::insert"
source_path: "cpp/container/multiset/insert"
category: "container"
since: "C++11"
---

Inserts element(s) into the container. The order of the remaining equivalent elements is preserved.

## Declarations
```cpp
iterator insert( const value_type& value );
```

```cpp
iterator insert( value_type&& value );
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
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 233 | C++98 | pos was just a hint, it could be totally ignored | the insertion is required tobe as close as possible to theposition just prior to pos |
| LWG 264 | C++98 | the complexity of overload (5) was required to be linear ifthe range [first, last) is sorted according to Compare | removed the linear requirementin this special case |
| LWG 371 | C++98 | the order of equivalent elements was not guaranteed to be preserved | required to be preserved |

## See also
- [emplace](/cpp/container/multiset/emplace/)
- [emplace_hint](/cpp/container/multiset/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
