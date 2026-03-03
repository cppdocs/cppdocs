---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::reserve"
source_path: "cpp/container/unordered_multimap/reserve"
category: "container"
since: "C++11"
---

Sets the number of buckets to the number needed to accommodate at least count elements without exceeding maximum load factor and rehashes the container, i.e. puts the elements into appropriate buckets considering that total number of buckets has changed. Effectively calls rehash([std::ceil](/cpp/numeric/math/ceil/)(count / max_load_factor())).

## Declarations
```cpp
void reserve( size_type count );
```
_(since C++11)_

## Parameters
- `count`: new capacity of the container

## Return value
(none)

## See also
- [rehash](/cpp/container/unordered_multimap/rehash/)
