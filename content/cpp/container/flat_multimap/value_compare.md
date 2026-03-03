---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::value_compare"
source_path: "cpp/container/flat_multimap/value_compare"
category: "container"
since: "C++23"
---

std::flat_multimap::value_compare is a function object that compares objects of type [std::flat_multimap::const_reference](/cpp/container/flat_multimap/#Member_types) (a pair of references to the stored key/value) by comparing the first components (i.e. keys) of the passed pairs.

## Declarations
```cpp
class value_compare;
```
_(since C++23)_

## Parameters
- `c`: a comparator to assign

## Return value
comp(lhs.first, rhs.first)
