---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::load_factor"
source_path: "cpp/container/unordered_multimap/load_factor"
category: "container"
since: "C++11"
---

Returns the average number of elements per bucket, that is, [size()](/cpp/container/unordered_multimap/size/) divided by [bucket_count()](/cpp/container/unordered_multimap/bucket_count/).

## Declarations
```cpp
float load_factor() const;
```
_(since C++11)_

## Return value
Average number of elements per bucket.

## See also
- [max_load_factor](/cpp/container/unordered_multimap/max_load_factor/)
