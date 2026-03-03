---
title: "std::flat_set<Key,Compare,KeyContainer>::upper_bound"
source_path: "cpp/container/flat_set/upper_bound"
category: "container"
since: "C++23"
---

1,2) Returns an iterator pointing to the first element that is greater than key.

## Declarations
```cpp
iterator upper_bound( const Key& key );
```
_(since C++23)_

```cpp
const_iterator upper_bound( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
iterator upper_bound( const K& x );
```
_(since C++23)_

```cpp
template< class K >
const_iterator upper_bound( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
Iterator pointing to the first element that is greater than key. If no such element is found, past-the-end (see end()) iterator is returned.

## Example
This section is incompleteReason: no example

## See also
- [equal_range](/cpp/container/flat_set/equal_range/)
- [lower_bound](/cpp/container/flat_set/lower_bound/)
