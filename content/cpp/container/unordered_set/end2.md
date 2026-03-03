---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::end(size_type), std::unordered_set<Key,Hash,KeyEqual,Allocator>::cend(size_type)"
source_path: "cpp/container/unordered_set/end2"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the bucket with index n. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
local_iterator end( size_type n );
```
_(since C++11)_

```cpp
const_local_iterator end( size_type n ) const;
```
_(since C++11)_

```cpp
const_local_iterator cend( size_type n ) const;
```
_(since C++11)_

## Parameters
- `n`: the index of the bucket to access

## Return value
Iterator to the element following the last element.

## See also
- [begin(size_type)cbegin(size_type)](/cpp/container/unordered_set/begin2/)
