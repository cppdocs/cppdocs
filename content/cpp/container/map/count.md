---
title: "std::map<Key,T,Compare,Allocator>::count"
source_path: "cpp/container/map/count"
category: "container"
since: "C++14"
---

Returns the number of elements with key that compares equivalent to the specified argument.

## Declarations
```cpp
size_type count( const Key& key ) const;
```

```cpp
template< class K >
size_type count( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value of the elements to count
- `x`: alternative value to compare to the keys

## Return value
Number of elements with key that compares equivalent to key or x, which, for overload (1), is either 1 or 0.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers; overload (2)

## Example
This section is incompleteReason: no example

## See also
- [find](/cpp/container/map/find/)
- [equal_range](/cpp/container/map/equal_range/)
