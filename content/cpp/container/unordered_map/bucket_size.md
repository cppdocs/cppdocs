---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::bucket_size"
source_path: "cpp/container/unordered_map/bucket_size"
category: "container"
since: "C++11"
---

Returns the number of elements in the bucket with index n.

## Declarations
```cpp
size_type bucket_size( size_type n ) const;
```
_(since C++11)_

## Parameters
- `n`: the index of the bucket to examine

## Return value
The number of elements in the bucket n.

## See also
- [bucket_count](/cpp/container/unordered_map/bucket_count/)
