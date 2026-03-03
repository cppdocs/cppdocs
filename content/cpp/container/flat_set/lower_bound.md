---
title: "std::flat_set<Key,Compare,KeyContainer>::lower_bound"
source_path: "cpp/container/flat_set/lower_bound"
category: "container"
since: "C++23"
---

1,2) Returns an iterator pointing to the first element that is not less than (i.e. greater or equal to) key.

## Declarations
```cpp
iterator lower_bound( const Key& key );
```
_(since C++23)_

```cpp
const_iterator lower_bound( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
iterator lower_bound( const K& x );
```
_(since C++23)_

```cpp
template< class K >
const_iterator lower_bound( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
Iterator pointing to the first element that is not less than key. If no such element is found, a past-the-end iterator (see end()) is returned.

## Example
This section is incompleteReason: no example

## See also
- [equal_range](/cpp/container/flat_set/equal_range/)
- [upper_bound](/cpp/container/flat_set/upper_bound/)
