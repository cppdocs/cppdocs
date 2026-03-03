---
title: "std::hash(std::experimental::observer_ptr)"
source_path: "cpp/experimental/observer_ptr/hash"
header: "<experimental/memory>"
category: "experimental"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::experimental::observer_ptr](/cpp/experimental/observer_ptr/)<T> allows users to obtain hashes of objects of type [std::experimental::observer_ptr](/cpp/experimental/observer_ptr/)<T>.

## Declarations
```cpp
template< class T > struct hash<std::experimental::observer_ptr<T>>;
```
_(library fundamentals TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
