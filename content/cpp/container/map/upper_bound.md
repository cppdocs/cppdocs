---
title: "std::map<Key,T,Compare,Allocator>::upper_bound"
source_path: "cpp/container/map/upper_bound"
category: "container"
since: "C++14"
---

1,2) Returns an iterator pointing to the first element that is greater than key.

## Declarations
```cpp
iterator upper_bound( const Key& key );
```

```cpp
const_iterator upper_bound( const Key& key ) const;
```

```cpp
template< class K >
iterator upper_bound( const K& x );
```
_(since C++14)_

```cpp
template< class K >
const_iterator upper_bound( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
Iterator pointing to the first element that is greater than key. If no such element is found, past-the-end (see [end()](/cpp/container/map/end/)) iterator is returned.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers, for overloads (3,4)

## Example
This section is incompleteReason: no example

## See also
- [equal_range](/cpp/container/map/equal_range/)
- [lower_bound](/cpp/container/map/lower_bound/)
