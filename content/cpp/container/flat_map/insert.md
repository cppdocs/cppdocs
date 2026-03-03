---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::insert"
source_path: "cpp/container/flat_map/insert"
category: "container"
since: "C++23"
---

Inserts element(s) into the container, if the container does not already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator, bool> insert( const value_type& value );
```
_(since C++23)_

```cpp
std::pair<iterator, bool> insert( value_type&& value );
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
std::pair<iterator, bool> insert( P&& x );
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
void insert( std::sorted_unique_t, InputIt first, InputIt last );
```
_(since C++23)_

```cpp
void insert( std::initializer_list<key_type> ilist );
```
_(since C++23)_

```cpp
void insert( std::sorted_unique_t s, std::initializer_list<key_type> ilist );
```
_(since C++23)_

## Parameters
- `pos`: an iterator to the position before which the new element will be inserted
- `value`: an element value to insert
- `first, last`: a range of elements to insert
- `ilist`: an initializer list to insert the values from
- `x`: a value of any type that can be transparently compared with a key
- `s`: a disambiguation tag indicating that the input sequence is sorted (with respect to value_comp()) and contains only unique elements

## Notes
The hinted insert (3,4,6) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/flat_map/size/) before and after.

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/flat_map/emplace/)
- [emplace_hint](/cpp/container/flat_map/emplace_hint/)
- [insert_or_assign](/cpp/container/flat_map/insert_or_assign/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
