---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::at"
source_path: "cpp/container/unordered_map/at"
category: "container"
since: "C++11"
---

Returns a reference to the mapped value of the element with specified key. If no such element exists, an exception of type [std::out_of_range](/cpp/error/out_of_range/) is thrown.

## Declarations
```cpp
T& at( const Key& key );
```
_(since C++11)_

```cpp
const T& at( const Key& key ) const;
```
_(since C++11)_

```cpp
template< class K >
T& at( const K& x );
```
_(since C++26)_

```cpp
template< class K >
const T& at( const K& x ) const;
```
_(since C++26)_

## Parameters
- `key`: the key of the element to find
- `x`: a value of any type that can be transparently compared with a key

## Return value
A reference to the mapped value of the requested element.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_associative_heterogeneous_insertion
202311L
(C++26)
Heterogeneous overloads for the remaining member functions in ordered and unordered associative containers. (3,4)

## Example
This section is incompleteReason: no example

## See also
- [operator[]](/cpp/container/unordered_map/operator_at/)
- [find](/cpp/container/unordered_map/find/)
