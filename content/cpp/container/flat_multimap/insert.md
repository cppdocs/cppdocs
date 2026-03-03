---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::insert"
source_path: "cpp/container/flat_multimap/insert"
category: "container"
since: "C++23"
---

Inserts element(s) into the container.

## Declarations
```cpp
iterator insert( const value_type& value );
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
template< class P >
iterator insert( P&& x );
```
_(since C++23)_

```cpp
template< class P >
iterator insert( const_iterator pos, P&& x );
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
- `pos`: an iterator to the position before which the new element will be inserted
- `value`: an element value to insert
- `first, last`: a range of elements to insert
- `ilist`: an initializer list to insert the values from
- `x`: a value of any type that can be transparently compared with a key
- `s`: a disambiguation tag indicating that the input sequence is sorted (with respect to value_comp())

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/flat_multimap/emplace/)
- [emplace_hint](/cpp/container/flat_multimap/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
