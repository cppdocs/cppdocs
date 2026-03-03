---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::bucket"
source_path: "cpp/container/unordered_set/bucket"
category: "container"
since: "C++11"
---

1) Returns the index of the bucket for key key. Elements (if any) with keys equivalent to key are always found in this bucket.

## Declarations
```cpp
size_type bucket( const Key& key ) const;
```
_(since C++11)_

```cpp
template< typename K >
size_type bucket( const K& x ) const;
```
_(since C++26)_

## Parameters
- `key`: the value of the key to examine
- `x`: a value of any type that can be transparently compared with a key

## Return value
Bucket index for the requested key.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_associative_heterogeneous_insertion
202311L
(C++26)
Heterogeneous overloads for the remaining member functions in ordered and unordered associative containers. (2)

## Example
This section is incompleteReason: no example

## See also
- [bucket_size](/cpp/container/unordered_set/bucket_size/)
