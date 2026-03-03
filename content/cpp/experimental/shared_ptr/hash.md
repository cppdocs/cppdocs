---
title: "std::hash(std::experimental::shared_ptr)"
source_path: "cpp/experimental/shared_ptr/hash"
category: "experimental"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::experimental::shared_ptr](/cpp/experimental/shared_ptr/)<T> allows users to obtain hashes of objects of type [std::experimental::shared_ptr](/cpp/experimental/shared_ptr/)<T>.

## Declarations
```cpp
template< class T > struct hash<std::experimental::shared_ptr<T>>;
```
_(library fundamentals TS)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
