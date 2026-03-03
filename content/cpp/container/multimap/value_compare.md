---
title: "std::multimap<Key,T,Compare,Allocator>::value_compare"
source_path: "cpp/container/multimap/value_compare"
category: "container"
---

std::multimap::value_compare is a function object that compares objects of type std::multimap::value_type (key-value pairs) by comparing of the first components of the pairs.

## Declarations
```cpp
class value_compare;
```

## Parameters
- `c`: comparator to assign

## Return value
comp(lhs.first, rhs.first)
