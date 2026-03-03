---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::max_load_factor"
source_path: "cpp/container/unordered_map/max_load_factor"
category: "container"
since: "C++11"
---

Manages the maximum load factor (number of elements per bucket). The container automatically increases the number of buckets if the load factor exceeds this threshold.

## Declarations
```cpp
float max_load_factor() const;
```
_(since C++11)_

```cpp
void max_load_factor( float ml );
```
_(since C++11)_

## Parameters
- `ml`: new maximum load factor setting

## See also
- [load_factor](/cpp/container/unordered_map/load_factor/)
