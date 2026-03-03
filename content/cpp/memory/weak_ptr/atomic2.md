---
title: "std::atomic<std::weak_ptr>"
source_path: "cpp/memory/weak_ptr/atomic2"
header: "<memory>"
category: "memory"
since: "C++20"
---

The partial template specialization of [std::atomic](/cpp/atomic/atomic/) for [std::weak_ptr](/cpp/memory/weak_ptr/)<T> allows users to manipulate weak_ptr objects atomically.

## Declarations
```cpp
template< class T > struct std::atomic<std::weak_ptr<T>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [atomic](/cpp/atomic/atomic/)
