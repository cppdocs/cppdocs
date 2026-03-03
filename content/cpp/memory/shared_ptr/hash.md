---
title: "std::hash<std::shared_ptr>"
source_path: "cpp/memory/shared_ptr/hash"
category: "memory"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::shared_ptr](/cpp/memory/shared_ptr/)<T> allows users to obtain hashes of objects of type [std::shared_ptr](/cpp/memory/shared_ptr/)<T>.

## Declarations
```cpp
template< class T >
struct hash<std::shared_ptr<T>>;
```
_(since C++11)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
