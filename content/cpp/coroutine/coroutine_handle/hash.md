---
title: "std::hash<std::coroutine_handle>"
source_path: "cpp/coroutine/coroutine_handle/hash"
header: "<coroutine>"
category: "coroutine"
since: "C++20"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::coroutine_handle](/cpp/coroutine/coroutine_handle/) allows users to obtain hashes of objects of type [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<P>.

## Declarations
```cpp
template< class Promise >
struct hash<std::coroutine_handle<Promise>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
