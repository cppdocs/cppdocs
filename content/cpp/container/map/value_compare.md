---
title: "std::map<Key,T,Compare,Allocator>::value_compare"
source_path: "cpp/container/map/value_compare"
category: "container"
---

std::map::value_compare is a function object that compares objects of type std::map::value_type (key-value pairs) by comparing of the first components of the pairs.

## Declarations
```cpp
class value_compare;
```

## Parameters
- `c`: comparator to assign

## Return value
comp(lhs.first, rhs.first)
