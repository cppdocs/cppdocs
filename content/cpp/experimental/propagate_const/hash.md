---
title: "std::hash(std::experimental::propagate_const)"
source_path: "cpp/experimental/propagate_const/hash"
header: "<experimental/propagate_const>"
category: "experimental"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::experimental::propagate_const](/cpp/experimental/propagate_const/)<T> allows users to obtain hashes of objects of type [std::experimental::propagate_const](/cpp/experimental/propagate_const/)<T>.

## Declarations
```cpp
template< class T > struct hash<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
