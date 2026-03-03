---
title: "std::flat_multiset<Key,Compare,KeyContainer>::count"
source_path: "cpp/container/flat_multiset/count"
category: "container"
since: "C++23"
---

Returns the number of elements with key that compares equivalent to the specified argument.

## Declarations
```cpp
size_type count( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
size_type count( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value of the elements to count
- `x`: alternative value to compare to the keys

## Return value
Number of elements with key that compares equivalent to key or x.

## Example
This section is incompleteReason: no example

## See also
- [find](/cpp/container/flat_multiset/find/)
- [equal_range](/cpp/container/flat_multiset/equal_range/)
