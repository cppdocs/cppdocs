---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::rehash"
source_path: "cpp/container/unordered_map/rehash"
category: "container"
since: "C++11"
---

Changes the number of buckets to a value n that is not less than count and satisfies n >= size() / max_load_factor(), then rehashes the container, i.e. puts the elements into appropriate buckets considering that total number of buckets has changed.

## Declarations
```cpp
void rehash( size_type count );
```
_(since C++11)_

## Parameters
- `count`: lower bound for the new number of buckets

## Return value
(none)

## Notes
rehash(0) may be used to force an unconditional rehash, such as after suspension of automatic rehashing by temporarily increasing max_load_factor().

## See also
- [reserve](/cpp/container/unordered_map/reserve/)
