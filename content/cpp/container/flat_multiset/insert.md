---
title: "std::flat_multiset<Key,Compare,KeyContainer>::insert"
source_path: "cpp/container/flat_multiset/insert"
category: "container"
since: "C++23"
---

Inserts element(s) into the container. The order of the remaining equivalent elements is preserved.

## Declarations
```cpp
iterator insert( const value_type& value )
```
_(since C++23)_

```cpp
iterator insert( value_type&& value );
```
_(since C++23)_

```cpp
iterator insert( const_iterator pos, const value_type& value );
```
_(since C++23)_

```cpp
iterator insert( const_iterator pos, value_type&& value );
```
_(since C++23)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```
_(since C++23)_

```cpp
template< class InputIt >
void insert( std::sorted_equivalent_t, InputIt first, InputIt last );
```
_(since C++23)_

```cpp
void insert( std::initializer_list<key_type> ilist );
```
_(since C++23)_

```cpp
void insert( std::sorted_equivalent_t s, std::initializer_list<key_type> ilist );
```
_(since C++23)_

## Parameters
- `pos`: iterator to the position before which the new element will be inserted
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `s`: a disambiguation tag indicating that the input sequence is sorted (with respect to key_compare)

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/flat_multiset/emplace/)
- [emplace_hint](/cpp/container/flat_multiset/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
