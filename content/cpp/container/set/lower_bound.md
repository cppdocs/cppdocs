---
title: "std::set<Key,Compare,Allocator>::lower_bound"
source_path: "cpp/container/set/lower_bound"
category: "container"
since: "C++14"
---

1,2) Returns an iterator pointing to the first element that is not less than (i.e. greater or equal to) key.

## Declarations
```cpp
iterator lower_bound( const Key& key );
```

```cpp
const_iterator lower_bound( const Key& key ) const;
```

```cpp
template< class K >
iterator lower_bound( const K& x );
```
_(since C++14)_

```cpp
template< class K >
const_iterator lower_bound( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
Iterator pointing to the first element that is not less than key. If no such element is found, a past-the-end iterator (see [end()](/cpp/container/set/end/)) is returned.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers; overloads (3,4)

## Example
This section is incompleteReason: no example

## See also
- [equal_range](/cpp/container/set/equal_range/)
- [upper_bound](/cpp/container/set/upper_bound/)
