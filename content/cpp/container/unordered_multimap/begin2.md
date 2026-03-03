---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::begin(size_type), std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::cbegin(size_type)"
source_path: "cpp/container/unordered_multimap/begin2"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the bucket with index n.

## Declarations
```cpp
local_iterator begin( size_type n );
```
_(since C++11)_

```cpp
const_local_iterator begin( size_type n ) const;
```
_(since C++11)_

```cpp
const_local_iterator cbegin( size_type n ) const;
```
_(since C++11)_

## Parameters
- `n`: the index of the bucket to access

## Return value
Iterator to the first element.

## See also
- [end(size_type)cend(size_type)](/cpp/container/unordered_multimap/end2/)
